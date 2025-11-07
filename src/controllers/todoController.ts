import {Response, Request} from "express";
import { fetchUserTodos } from "../cache/todoCache";
import todoModel, {Status} from "../model/todoModel";
import { saveUserTodos } from "../cache/todoCache";

export const createTodo = async (req: Request, res: Response)=>{
      // const { title, description } = req.body;
      const userId = '6748e9f7c123456789abcd12';

      const newTodo = await todoModel.create({
            user: userId,
            title: 'Buy groceries',
            description: 'Milk, eggs, and bread',
            status: Status.NOT_STARTED,
          });
      res.status(200).send(newTodo)
}

export const getTodos =  async (req: Request, res: Response)=>{
      const userId = req.params.userId;
      console.log(userId)
      let todos =  await fetchUserTodos(userId)
      if(!todos){
            todos = await todoModel.find({user: userId});
            if(!todos || todos.length === 0){
                  res.status(404).send("No Todos Found in MongoDB")
            }
            console.log("todo fetched from mongo")
            await saveUserTodos(userId, todos);
      }
      console.log("todo fetched from cache")
      res.status(200).send(todos)
}