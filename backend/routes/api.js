import express from "express"

const router = express.Router()

// Home
router.get("/", (req, res) => res.send("Hello World"))

export default router
