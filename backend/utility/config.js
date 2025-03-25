 require('dotenv').config();


 module.exports={
    MONGODB_URL : process.env.MONGODB_URL,
    JWTSECRET: process.env.JWTSECRET,
 }

