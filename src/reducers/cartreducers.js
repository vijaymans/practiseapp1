import React from 'react'
const intialState = []

function cartreducers(state = intialState, action)
{

    switch(action.type)
    {

        case 'ADD_ITEMS_TO_CART' : {
            return [...state , {...action.payload}]
            
        }

        case 'GET_CART_ITEMS' : {

            return [ ...action.payload ]

        }

        
        case 'DELETE_CART_ITEMS' : {

            const cartafterdeletion = state.filter( (ele) =>
            {
                return ele.id!=action.payload
            }
            )
            return cartafterdeletion
            
        }

        case 'DECREMENT_QUANTITY_IN_CART' : {

            const decrementedQuantityData = state.map(ele =>
                {
                    if(ele.id == action.payload.id)
                    {
                        return {...ele , quantity : ele.quantity -1  }
                    }
                    else{
                        return {...ele}
                    }
                })
            return decrementedQuantityData
            
        }

        case 'INCREMENT_QUANTITY_IN_CART' : {

            
            const incrementedQuantityData = state.map(ele =>
                {
                    if(ele.id == action.payload.id)
                    {
                        return {...ele , quantity : ele.quantity + 1 }
                    }
                    else{
                        return {...ele}
                    }
                })
                console.log(incrementedQuantityData)
            return incrementedQuantityData
        }

        default : {
            return state
        }

    }
  
}

export default cartreducers