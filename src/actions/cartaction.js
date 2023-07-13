import React from 'react'
import axios from 'axios'
import swal from 'sweetalert'

export const cartaction = (data)=>
{
console.log(data)

  return ( (dispatch)=>
  {

       axios.post('http://localhost:5000/cart', data)
       .then( (response)=>
       {
           console.log(response)
           dispatch({
            type : 'ADD_ITEMS_TO_CART',
            payload : response.data
           })

       })
       .catch((error)=>
       {
            swal ( `${error?.response?.statusText}` ,  "Item Already added to Cart" ,  "error" )
       })
       
  }
   
  )

}

export const getcartData = () =>
{

    return ( (dispatch)=>
    {
        axios.get('http://localhost:5000/cart')
        .then((response)=>
        {
                dispatch({
                    type : 'GET_CART_ITEMS',
                    payload : response.data
                })
        })

        .catch((error)=>
        {
            alert('error')
        })
    })

}

export const deleteCartItem = (Id) =>
{

    return ( (dispatch)=>
    {
        axios.delete(`http://localhost:5000/cart/${Id}`)
        
        .then((response)=>
        {
            console.log(response)
                dispatch({
                    type : 'DELETE_CART_ITEMS',
                    payload : Id
                })
        })

        .catch((error)=>
        {
            alert('error')
        })
    })

}


export const decrementQuantityInCart = (Item)=>
{

    return( (dispatch)=>
    {

        axios.put(`http://localhost:5000/cart/${Item.id}`, Item)
        .then((response)=>
        {
                dispatch({
                    type : 'DECREMENT_QUANTITY_IN_CART',
                    payload : response.data
                })
        })

        .catch((error)=>
        {
            alert('error')
        })
        
    })


}

export const incrementQuantityInCart =(Item)=>
{

    return ( (dispatch)=>
    {
        axios.put(`http://localhost:5000/cart/${Item.id}`, Item)
        .then((response)=>
        {
            
                dispatch({
                    type : 'INCREMENT_QUANTITY_IN_CART',
                    payload : response.data
                })
        })

        .catch((error)=>
        {
            alert('error')
        })
    })


}