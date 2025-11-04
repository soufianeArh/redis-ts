import { port, mongo_uri } from "./config";
import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()


const start = async ()=>{
      try{
            await  mongoose.connect(mongo_uri)
            console.log("Connected to MongoDB")
      }catch(err){
            console.log("failed to connect mongo",err)
      }
      //start the Https
      app.listen(port, ()=>{
            console.log(`app success runnign on port ${port}`)
      })
}
start()
