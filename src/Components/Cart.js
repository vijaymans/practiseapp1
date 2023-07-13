import React, { useEffect } from 'react'
import './Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getcartData} from '../actions/cartaction'
import CartTable from './CartTable'
import CartAmount from './CartAmount'

function Cart() 
{
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cartState = useSelector( (state)=>
    {
        console.log('Redux store', state)
        return state.cartItems
    })

    

    useEffect( ()=>
    {
         dispatch(getcartData())

    },[])
    

  return (
    <div className='cart'>
        <h2>Cart</h2>
        {console.log('Inside JSX')}
        { cartState.length ? <div className='cartfont'> 
                                <p>Total cart Items -{cartState.length}</p>
                                <CartTable cartState={cartState}/>
                                <CartAmount cartState={cartState}/>
                              </div>
                           : <div>
                                
                           <p className='cartfont'>Your Cart is Empty!!</p>

                            </div>

        }
        <button 
        className='cart-btn'
        onClick = { ()=> navigate('/')}>
        Go Back</button>

    </div>
  )
}

export default Cart