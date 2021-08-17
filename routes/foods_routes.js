import express from express
import { getFoods, createFood, updateFood, deleteFood } from "../controllers/foods_controller"

const router = express.router()

router.get("/", getFoods)
router.post("/", createFood)
router.patch("/:id", updateFood)
router.delete("/:id", deleteFood)