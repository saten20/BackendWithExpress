const express = require('express')
const app = express();
const port = 4000

app.get('/', (req, res) =>{
    res.send("This is Home page");
})

app.get('/userDetails', (req, res) =>{
    const obj = {
        firstName: "satendra",
        Email:"satendrayadav@gmail.com",
        bill:4900
    }

    res.json(obj)
})

app.listen(port, ()=>{
    console.log(`Listning to the port number ${port}`)
})