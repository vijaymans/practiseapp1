import { useState , useEffect } from "react"
import { FETCH_PRODUCT_URL } from "../Components/Constants"


const  useProduct =(params) =>
{
    const [product , setProduct] = useState({})

    useEffect( ()=>
    {
        console.log('Inside use effect')
        fetch(`${ FETCH_PRODUCT_URL + params.Id}`)

         .then ( (response)=>
        {
            return response.json()
        })
        .then ((data)=>
        {
           console.log(data)
           setProduct(data)
        })
        .catch((error) =>
        {
            return error
        })

    },[])

    return product


}

export default useProduct