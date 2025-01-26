import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        // profile:{
        //     type:String,
        //     required:true
        // },
        refreshToken:{
            type:String
        }

    },
    {timestamps: true}
)

export const User = new mongoose.model("User", UserSchema)
