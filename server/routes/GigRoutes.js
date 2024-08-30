import { Router } from "express";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import multer from "multer";
import { addGig, addReview, checkGigOrder, deleteGig, editGig, getGigData, getUserAuthGigs, searchGigs } from "../controllers/GigsControllers.js";



export const gigRoutes = Router();
const upload = multer({ dest: "uploads/" });
gigRoutes.post("/add", verifyToken, upload.array("images"), addGig);
gigRoutes.get("/get-user-gigs", verifyToken, getUserAuthGigs);
gigRoutes.get("/get-gig-data/:gigId", getGigData);
gigRoutes.put("/edit-gig/:gigId", verifyToken, upload.array("images"), editGig);
gigRoutes.get("/search-gigs", searchGigs);
gigRoutes.get("/check-gig-order/:gigId", verifyToken, checkGigOrder);
gigRoutes.post("/add-review/:gigId", verifyToken, addReview);
gigRoutes.delete("/delete/:gigId", verifyToken, deleteGig);