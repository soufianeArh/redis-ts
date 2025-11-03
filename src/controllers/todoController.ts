import {Response, Request} from "express"
export const createTodo = async (req: Request, res: Response)=>{
      // const { title, description } = req.body;
      res.status(200).send({"user": "soufiane",})
}