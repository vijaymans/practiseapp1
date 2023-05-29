const intialproductsstate = []

const productsreducers =(state=intialproductsstate, action)=>
{

    switch(action.type)
    {
        case 'GET_PRODUCTS' : { 
                                console.log(action)
                                return [ ...action.payload ]
                              }

        case 'ADD_PRODUCTS' : {
 
        }

        default : {
                         
                    return state
        }
    }

}

export default productsreducers