import React from 'react'
import Profile from './Profile'
import { Outlet } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


// class About extends React.Component{

//   constructor(props)
//   {
//      super(props)
//      this.state ={
//        count : 0
//      }

//      console.log("Parent- Constructor")
//   }

//   componentDidMount()
//   {
//      console.log("Parent- componentDidMount")
//   }

//   render()
//   {
//     console.log("Parent - render")
//      return(
//       <div>
        
//          <h1>About</h1>
//          <h2>About us page - We are learing react</h2>
//          {/* <Outlet/> */}
//          {/* <Profile name ="vijay" age={30}  hobbies={ {details : "csdsds" }}/> */}
//          <Profileclass name ="vijay" age={30}/>
//     </div>
//      )
//   }
// }

// export default About


const About =() =>
{
   const [users,setUsers] = useState([])
   const [userinp,setUserInp] = useState('')

    useEffect( ()=>
    {
        console.log('insideuseffect')
        axios.get('https://jsonplaceholder.typicode.com/posts')

        .then((res) => {
                     console.log(res)
                     setUsers(res.data)
                     }
        )


    },[])

    const products = useSelector( (state)=> state.products )

    const navigate = useNavigate()

    const handleChange =(e)=>
    {
        console.log(e.target.value)
        setUserInp(e.target.value)
    }

    const filteredData = users.filter( (ele)=>
    {
        if(userinp=='')
        {
            return ele
        }
        else{
           return ele.title.toLowerCase().includes(userinp.toLowerCase())
        }

    })
    console.log(filteredData)

    const handleClick=()=>
    {
        navigate('Profile')
        
    }


    return(<div>
        {/* //<button onClick ={handleClick}>profile</button> <br/><br/> */}
        <Outlet/>
      <input type="text" value={userinp} onChange ={handleChange}/>
      <div>
         <ul>
         { filteredData.map( (user)=>
            {
               return <li key={user.id}>{user.title}</li>
            })
         }
         </ul>
      </div>


    </div>)
}

export default About