import { Router } from "express";
import { getDucks } from "./controllers/ducks-controllers";

const router = Router();

router.get("/ducks", getDucks);

export default router;
