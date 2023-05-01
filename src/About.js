import React from 'react'
import Profile from './Profile'
import Profileclass from './profileclass'
import { Outlet } from 'react-router-dom'


class About extends React.Component{

  constructor(props)
  {
     super(props)
     this.state ={
       count : 0
     }

     console.log("Parent- Constructor")
  }

  componentDidMount()
  {
     console.log("Parent- componentDidMount")
  }

  render()
  {
    console.log("Parent - render")
     return(
      <div>
        
         <h1>About</h1>
         <h2>About us page - We are learing react</h2>
         {/* <Outlet/> */}
         {/* <Profile name ="vijay" age={30}  hobbies={ {details : "csdsds" }}/> */}
         <Profileclass name ="vijay" age={30}/>
    </div>
     )
  }
}

export default About