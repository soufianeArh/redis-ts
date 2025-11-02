import {createClient} from "redis"
import { redis } from "../config"

const redisURL = `redis://${redis.password}@${redis.host}:${redis.port}`

const client = createClient({url: redisURL});
client.on("connect", ()=>console.log("redis connecting"))
client.on("ready", ()=>console.log("cache ready aka connected to redis"))
client.on("end", ()=>console.log("redis ended"))
client.on("reconnecting", ()=>console.log("redis reconnecting"))
client.on("error", (e)=>console.log("error", e))

async function connect (){
      try{
            await client.connect()
      }catch(err){
            console.error(err);
            setTimeout(connect, 5000)
      }
};
connect()

process.on("SIGINT", async ()=>{
      await client.disconnect()
})

export default client