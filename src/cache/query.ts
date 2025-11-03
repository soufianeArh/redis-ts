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
}