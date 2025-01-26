import express from 'express'
import { dbConnection } from './utils/database.js'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config({path:'./.env'})

const app = express()
app.use(cors({
    origin:'http://localhost:6000'
}))
app.use(express.json())
app.use(cookieParser())
const port = 6000

dbConnection()
.then(()=>{
    console.log("DB connection successfull")
})
.catch((err)=>{
    console.log("Error in DB connection ")
})

import user from './routes/user.js'
app.use('/api/v1/user', user)

app.get('/', (req, res) =>{
    res.send("Home page of Testing || Satendra")
})


app.listen(port, ()=>{
    console.log(`Server is running on the port number ${port}`)
})