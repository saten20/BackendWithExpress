import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        const connection = await mongoose.connect('mongodb://localhost:27017/Testing')
        console.log("Congratulation! , DB is connected successfully")
    }
    catch(err){

    }
}

export default connectDB