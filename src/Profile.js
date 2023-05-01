import React from 'react'

function Profile(props) {

    console.log("Outside return")
    
  return (
    <div>
        {console.log("Inside return")}
        <h1>Profile functional Component</h1>
    </div>
  )
}

export default Profile