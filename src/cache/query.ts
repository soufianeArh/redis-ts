import cache from "."
export const  setJSON = (
      key: string,
      value: Record<string, unknown>,
      expireAt: Date | null = null
)=>{
      const valueJson = JSON.stringify(value);
      if(expireAt){
            const ttlMillis = expireAt.getTime()-Date.now()
            return cache.set(key, valueJson, {PX: ttlMillis})
      }else{
            return cache.set(key, valueJson)
      }
};

export async function getJSON<T>(key:string){
      const type= await cache.type(key);
      if(type !== "string") return null;

      const json = await cache.get(key);
      if (!json) return null;

      return JSON.parse(json) as T;
}