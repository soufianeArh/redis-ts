import dotenv from "dotenv"

dotenv.config()

export const port = process.env.PORT || 3000
export const redis = {
      host:process.env.REDIS_HOST || "",
      port:process.env.REDIS_PORT || "",
      password:process.env.REDIS_DEFAULT_PASSWORD || "",
}

export const caching = {
      contentCacheDuration: process.env.CONTENT_CACHE_DURATION_MILIS || 60000
}

export const mongo_uri = process.env.MONGO_URI || ""
console.log(mongo_uri)