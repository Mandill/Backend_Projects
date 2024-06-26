/*
import express from "express"
const app = express()
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error
        })
        app.listen(process.env.PORT,()=>
        {
            console.log(`Listening to the port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR :",error);
    }
})()
*/
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>
{
    app.listen(process.env.PORT || 8000, ()=>
    {
        console.log("server running at port ",process.env.PORT);
    })
})
.catch(error =>
    {
        console.log("Mongo Db Connection Failed :",error);
    })