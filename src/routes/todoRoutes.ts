import express, {Response, Request} from "express"
import { createTodo } from "../controllers/todoController"
const router=express.Router()
router.post("/api/todos/new", createTodo)

export default router