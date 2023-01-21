import React, { useEffect, useState } from "react"
import  ReactDOM from "react-dom"
import axios from 'axios'
import './App.css'
import App1 from "./App1"

const App =()=>
{
   const[data,setData] = useState([])
   const [show, setShow] = useState(false)
   

   useEffect( ()=>
   {
        axios.get('https://fakestoreapi.com/products')
        .then ( (response)=>
        {
            console.log(response.data)
            setData(response.data)
        })
        .catch(()=>
        {

        })
   },[])

   const handleClick =()=>
   {
          setShow(!show)
   }

   const sendData =(getData) =>
   {
      console.log('parent',getData)
   }

    return(<div>
            <button onClick={handleClick}>Click Me</button>
            <h1>List of Products</h1>
             <ul>
             {show &&
                data.map( (ele)=>
                {
                     return <li key={ele.id}>{ele.title}</li>
                })
             }
             </ul>
             <App1 sendData={sendData}/>
             {
              /*
              hhjkfdhgkjfdhgh
              */
             }

    </div>) 
}

export default App
