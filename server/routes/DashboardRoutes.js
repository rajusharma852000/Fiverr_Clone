import { Router } from "express";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { getSellerData } from "../controllers/DashboardControllers.js";


export const dashboardRoutes = Router();

dashboardRoutes.get("/seller", verifyToken, getSellerData);