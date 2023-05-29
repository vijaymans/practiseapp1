import axios from "axios"

const productsaction =() =>
{
     return ( (dispatch)=>
     {
        
            axios.get('https://fakestoreapi.com/products')
            .then((response)=>
            {
                
                dispatch({
                    type : 'GET_PRODUCTS',
                    payload : response.data
                })
            })
            .catch((error)=>
            {
                    console.log(error)
            })


     })
}
export default productsaction
