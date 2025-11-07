import express, {Response, Request} from "express"
import { createTodo, getTodos } from "../controllers/todoController"

const router=express.Router()

router.post("/api/todos/new", createTodo)
router.get("/api/todos/:userId", getTodos)

export default router