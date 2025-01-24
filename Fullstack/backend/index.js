import express from 'express'
const app = express();

app.get('/', (req, res) =>{
    res.send("Home Page")
})

app.get('/api/jokes', (req, res) =>{
    const data = [
        {
            id:1,
            title:"Joke 1",
            content:"This is the first Joke"
        },
        {
            id:2,
            title:"Joke 2",
            content:"This is the second Joke"
        },
        {
            id:3,
            title:"Joke 3",
            content:"This is the third Joke"
        },
        {
            id:4,
            title:"Joke 4",
            content:"This is the Fourth Joke"
        },
        {
            id:5,
            title:"Joke 5",
            content:"This is the fifth Joke"
        }
    ]

    res.send(data)
})

const port = 3000
app.listen(port, ()=>{
    console.log(`App is Listning to the port number ${port}`)
})