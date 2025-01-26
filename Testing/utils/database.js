import mongoose from 'mongoose'

const dbConnection = async()=>{
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log("DB connection is done successfully")
    }
    catch(error){
        console.log("Error in db Connection")
    }
}

export {dbConnection}