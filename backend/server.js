import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import morgan from "morgan"

import connectDB from "./config/database.js"
import apiRoutes from "./routes/api.js"

// Config
dotenv.config({ path: "./config/config.env" })
connectDB()

const app = express()
const port = process.env.PORT || 8000

// Middlewares
if (process.env.NODE_ENV === "development") app.use(morgan("tiny"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
)

// Routes
app.use("/api", apiRoutes)

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
})
