
import React from 'react'
import './Body.css'

function Shimmer() {

    //Array with length 20 is created
    const arr = new Array(20)
    //It fills empty strings in 20 places which is length of array
    const arr1 = arr.fill("")



  return ( arr1.map( (ele) =>
                            {
                                return <div className='resturant-card1'>

                                    </div>
                            })

  )
}

export default Shimmer