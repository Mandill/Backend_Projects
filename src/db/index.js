// import mongoose from "mongoose";
// import express from "express"
// import { DB_NAME } from "../constants.js";

// const app = express()
// const connectDB = async() =>
// {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`);
//         // app.on("error",(error)=>
//         // {
//         //     console.log("Error :",error);
//         // })
//         // app.listen(process.env.PORT,()=>
//         // {
//         //     console.log("server running on port ",process.env.PORT);
//         // })
//     } catch (error) {
//         console.log("Error :",error);
//         throw error;
//     }
// }

// export default connectDB

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() =>
{
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log("\n MongoDB connected !! DB Host : ",connectionInstance.connection.host);
    } catch (error) {
        console.log("MONGODB Connection Error :",Error);
        throw error;
        process.exit(1)
    }
}

export default connectDB