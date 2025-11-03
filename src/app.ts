import express from "express"
import todosRouter from "./routes/todoRoutes"
const app=express()
app.use(todosRouter)
export default app