export enum DynamicKeys {
      USER_TODOS="USER_TODOS"
};

function getDyanmicKey(key:DynamicKeys, userId: string){
      return `${key}:${userId}`
};

export function getUserTodoKey(userId:string){
      return getDyanmicKey(DynamicKeys.USER_TODOS, userId)
}