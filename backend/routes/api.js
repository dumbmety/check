import express from "express"
import taskController from "../controllers/task-controller.js"

const router = express.Router()

// Home
router.get("/", (req, res) => res.send("Hello World"))

// Tasks
router.get("/tasks", taskController.list)
router.put("/tasks/:id", taskController.changeChecked)
router.post("/tasks", taskController.create)

export default router
