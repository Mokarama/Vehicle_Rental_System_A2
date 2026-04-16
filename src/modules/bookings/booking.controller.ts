import { Request, Response } from "express";
import { bookingServices } from "./booking.service";

const createBooking = async (req: Request, res: Response) => {
  try {
    const result = await bookingServices.createBooking(req.body);

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBooking = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      message: "Bookings retrieved successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// 🔥 UPDATED FUNCTION (Cancel + Return)
const updateBooking = async (req: Request, res: Response) => {
  try {
    const result = await bookingServices.updateBooking(
      req.params.bookingId,
      req.body
    );

    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const bookingControllers = {
  createBooking,
  getBooking,
  updateBooking,
};