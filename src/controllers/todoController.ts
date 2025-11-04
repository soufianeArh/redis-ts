import {Response, Request} from "express";
import { fetchUserTodos } from "../cache/todoCache";
import todoModel from "../model/todoModel";
import { saveUserTodos } from "../cache/todoCache";

export const createTodo = async (req: Request, res: Response)=>{
      // const { title, description } = req.body;

      res.status(200).send({"user": "soufiane",})
}

export const getTodos =  async (req: Request, res: Response)=>{
      const userId = req.params.id;
      let todos =  await fetchUserTodos(userId)
      if(!todos){
            todos = await todoModel.find({user: userId});
            if(!todos || todos.length === 0){
                  res.status(404).send("No Todos Found in MongoDB")
            }
            await saveUserTodos(userId, todos);
      }
      res.status(200).send(todos)
}