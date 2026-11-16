import { Router } from "express";
import multer from "multer";
import Harry from "../controller/prof.controller.js";

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

router.post("/harry", upload.single("uploadfile"), Harry);
// router.get("");

export default router;
