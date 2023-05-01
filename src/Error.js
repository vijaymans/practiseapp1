 import React from 'react'
 import { useRouteError } from 'react-router-dom'

function Error() {

  const error = useRouteError()
  console.log(error)
  
  return (
    <div>{ `OOPs! ----- ${error.data} `}</div>
  )
}

export default Error