import React from 'react'

function CartAmount(props) {

    const {cartState} = props

    let cartamount = 0

    cartState.forEach( element => 
    {
        cartamount = cartamount + (element.price * element.quantity)

        
    });


  return (
    <div style={{fontSize:"30px" , fontWeight:"bolder"}}>
        <p>BillAmount - {Math.round(cartamount)}Rs </p>
    </div>
  )
}

export default CartAmount