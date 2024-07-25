import { Router } from "express";
import {
  deleteDuck,
  getDuckById,
  getDuckName,
  getDucks,
  postDuck,
  updateDuck,
} from "./controllers/ducks-controllers";

const router = Router();

router.get("/ducks", getDucks);
router.get("/ducks/:id", getDuckById);
router.get("/ducks/:common_name", getDuckName);

router.post("/ducks", postDuck);

router.delete("/ducks/:id", deleteDuck);

router.patch("ducks/:id", updateDuck)

export default router;
