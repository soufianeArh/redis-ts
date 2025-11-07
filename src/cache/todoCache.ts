import todoModel from "../model/todoModel"
import {getUserTodoKey} from "./keys"
import {setJSON} from "./query"
import {caching} from "../config"
import {todoDoc} from "../model/todoModel"
import { getJSON } from "./query"
import cache from "."
export async function saveUserTodos (userId: string, todos: todoDoc[] ){
      const key = getUserTodoKey(userId);
      return setJSON(
            key,
            {data: todos},
            new Date(Date.now() + Number(caching.contentCacheDuration))
      )
};
export async function fetchUserTodos(userId: string){
      const key= getUserTodoKey(userId);
      return getJSON<todoDoc[]>(key)
};

export async function invalidateUserTodos(userId: string){
      const key=getUserTodoKey(userId);
      return cache.del(key)
};