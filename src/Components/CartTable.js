import React from 'react'
import Table from 'react-bootstrap/Table'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {decrementQuantityInCart, incrementQuantityInCart} from '../actions/cartaction'
import { deleteCartItem } from '../actions/cartaction'

function CartTable(props)
{
    //const [quantity , setQuantity] = useState(1)
    const {cartState}= props
    const dispatch = useDispatch()


    const handleDecrementQuantity =(Item)=>
    {
        if( Item.quantity > 1) 
        {
            const updateddecObj = {...Item, quantity: Item.quantity - 1}
            dispatch(decrementQuantityInCart(updateddecObj))
        }
        
     
    }
    

    const handleIncrementQuantity =(Item)=>
    {
        const updatedincObj = {...Item, quantity: Item.quantity + 1}
        dispatch(incrementQuantityInCart(updatedincObj))
    }

    const handledelete =(Id)=>
    {
        dispatch(deleteCartItem(Id))
    }


  return (
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete Items </th>
            </tr>
          </thead>
          <tbody>
           {
              cartState.length && cartState.map( (item)=>
              {
                return (<tr key={item.id}>
                    <td>{item?.id}</td>
                    <td>{item?.title}</td>
                    <td>{item?.price}</td>
                    <td>
                    <button 
                    className='cart-btn-quantity'
                    onClick = {()=> handleDecrementQuantity(item)}> -
                    </button>   
                    {item.quantity}

                    <button className='cart-btn-quantity'
                    onClick = {()=> handleIncrementQuantity(item) }
                    >+</button>

                    </td>
                    <td>
                     <button className='cart-btn-delete'
                     onClick = {()=> handledelete(item.id)}
                     >
                     Delete
                     </button>
                    </td>

                </tr>)
              })

           }
          </tbody>
        </Table>
      );
    
}

export default CartTable