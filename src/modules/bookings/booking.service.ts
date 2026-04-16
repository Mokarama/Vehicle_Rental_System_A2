import { pool } from "../../config/db";

const createBooking = async (payload: any) => {
  const {
    customer_id,
    vehicle_id,
    rent_start_date,
    rent_end_date,
  } = payload;

  // 🔹 vehicle check
  const vehicleRes = await pool.query(
    `SELECT * FROM Vehicles WHERE id=$1`,
    [vehicle_id]
  );

  const vehicle = vehicleRes.rows[0];

  if (!vehicle) {
    throw new Error("Vehicle not found");
  }

  if (vehicle.availability_status === "booked") {
    throw new Error("Vehicle already booked");
  }

  // 🔹 date calculation
  const start = new Date(rent_start_date);
  const end = new Date(rent_end_date);

  const days =
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

  const total_price = days * vehicle.daily_rent_price;

  // 🔹 booking insert
  const result = await pool.query(
    `INSERT INTO Bookings(customer_id, vehicle_id, rent_start_date, rent_end_date, total_price, status)
     VALUES($1,$2,$3,$4,$5,'active') RETURNING *`,
    [customer_id, vehicle_id, rent_start_date, rent_end_date, total_price]
  );

  // 🔹 vehicle update
  await pool.query(
    `UPDATE Vehicles SET availability_status='booked' WHERE id=$1`,
    [vehicle_id]
  );

  return result;
};



// 🔥 NEW FUNCTION (Cancel + Return Logic)
const updateBooking = async (id: string, payload: any) => {
  const bookingRes = await pool.query(
    `SELECT * FROM Bookings WHERE id=$1`,
    [id]
  );

  const booking = bookingRes.rows[0];

  if (!booking) {
    throw new Error("Booking not found");
  }

  // 🔹 Cancel (customer)
  if (payload.status === "cancelled") {
    const now = new Date();
    const start = new Date(booking.rent_start_date);

    if (now >= start) {
      throw new Error("Cannot cancel after start date");
    }

    await pool.query(
      `UPDATE Bookings SET status='cancelled' WHERE id=$1`,
      [id]
    );

    await pool.query(
      `UPDATE Vehicles SET availability_status='available' WHERE id=$1`,
      [booking.vehicle_id]
    );

    return { message: "Booking cancelled" };
  }

  // 🔹 Return (admin)
  if (payload.status === "returned") {
    await pool.query(
      `UPDATE Bookings SET status='returned' WHERE id=$1`,
      [id]
    );

    await pool.query(
      `UPDATE Vehicles SET availability_status='available' WHERE id=$1`,
      [booking.vehicle_id]
    );

    return { message: "Vehicle returned" };
  }

  throw new Error("Invalid status update");
};



export const bookingServices = {
  createBooking,
  updateBooking, // 🔥 add
};