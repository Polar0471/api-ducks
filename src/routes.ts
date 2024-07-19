import { Router } from "express";
import { getDuckById, getDucks } from "./controllers/ducks-controllers";

const router = Router();

router.get("/ducks", getDucks);
router.get("/ducks/:id", getDuckById)

export default router;
