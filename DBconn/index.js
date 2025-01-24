import mongoose from 'mongoose'
import connectDB from './database/index.js'

connectDB()

// (async()=>{
//     try{
//         const connectionres = await mongoose.connect('mongodb://localhost:27017/Testing')
//         console.log(connectionres)
//         console.log("DB connection is successfull")

//     }
//     catch(err){
//         console.log("Error while connectiong DB", err)
//     }
// })()