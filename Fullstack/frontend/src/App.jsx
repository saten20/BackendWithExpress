import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data)
    })
    .catch((e)=>{
      console.log(`Error while fetching the data ${e}`)
    })

  })

  return (
    <>
     <h1>This is the first Fullstack App</h1>
     <h2>{jokes.length}</h2>

     {
      jokes.map((value, idx) =>{
        return(
          <div key={value.id}>
            <h2>{value.title}</h2>
            <h3>{value.content}</h3>
          </div>
        )
      })
     }
    </>
  )
}

export default App
