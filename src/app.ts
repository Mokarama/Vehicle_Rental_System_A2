import express from "express";
import cors from "cors";

import { authRoutes } from "./modules/auth/auth.route";
import { userRoutes } from "./modules/users/user.route";
import { vehicleRoutes } from "./modules/vehicles/vehicle.route";
import { bookingRoutes } from "./modules/bookings/booking.route";

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 ROUTES CONNECT
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/vehicles", vehicleRoutes);
app.use("/api/v1/bookings", bookingRoutes);

export default app;