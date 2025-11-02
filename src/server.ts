import { port } from "./config";
import app from "./app";
import dotenv from "dotenv"

dotenv.config()

app.listen(port, ()=>{
      console.log(`app success runnign on port ${port}`)
})