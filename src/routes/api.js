import TestController from "../controllers/TestController.js";
import { Router } from "express";

const router = Router();

router.get("/test", TestController.index);

router.post("/test", TestController.store);

export default router;