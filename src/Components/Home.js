import React from 'react'
import Header from './Header'
import Body from './Body'
import Contact from './NewContact'
import About from './About'
import { Outlet } from 'react-router-dom'



function Home() {
  return (
    <div>
        <Header/>
        {/* <h2>sfsfsdfe</h2> */}
        <Outlet/>
    </div>
  )
}

export default Home