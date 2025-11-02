import dotenv from "dotenv"

dotenv.config()

export const port = process.env.PORT || 3000
export const redis = {
      host:process.env.REDIS_HOST || "",
      port:process.env.REDIS_PORT || "",
      password:process.env.REDIS_DEFAULT_PASSWORD || "",
}