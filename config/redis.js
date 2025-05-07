const redis = require("redis");
require('dotenv').config()

const redisClient = redis.createClient({
    socket:{
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
})

redisClient.connect().catch(console.error);

module.exports = redisClient;