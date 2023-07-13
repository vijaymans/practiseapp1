import { useParams } from "react-router-dom"
// import {useState , useEffect} from "react"
import {Link} from "react-router-dom"
import './product-detail.css'
import useProduct from "../Utils/useProduct"
import { useNavigate } from "react-router-dom"
import { useDispatch , useSelector} from "react-redux"
import {cartaction} from "../actions/cartaction"
import { useState , useEffect} from "react"
import swal from 'sweetalert';

const ProductDetails =() =>
{

    const [showAlert , setShowAlert] = useState(false)
    
    const params = useParams()
    console.log(params)
    const navigate = useNavigate()

    //useproduct calls the api and return the data object
    const product = useProduct(params)
    console.log(product)


    //dispatching action to store
   const dispatch = useDispatch()

   //accessing redux store
   const cartState = useSelector( (state)=>
   {
      return state.cartItems
   })

useEffect(()=>
{
    const exists = cartState.some( (ele)=>
    {
       return ele.id == product.id
    })

    if(exists)
    {
        setShowAlert(true)
    }

},[cartState])
  
   

    
    
    return (<>
                <div className="product-detail">
                <h2>ProductDetails- Page</h2>
                <img style ={{width : "100px", height : "150px"}}src={product?.image}/>
                <h3>{product?.title}</h3>
                <h3>Price {product?.price}-Rs</h3>
                <p>{product?.description}</p>

                <button 
                className='products-card-btn'
                onClick ={()=> dispatch(cartaction( {...product, quantity : 1} ))}
                // onClick={dispatch(cartaction(product))}

                >Add to Cart</button>

                </div>
                {showAlert &&  <>
                                  {swal("Good job!", "Item Added to Cart", "success")}
                                  {navigate('/Cart')}
                
                               </>
                 }

                

                <Link to="/"> 
                <h3 style={{textAlign:"center", textDecoration:"none", color : "black"}}>Go Back</h3>
                </Link>
            </>)
}

export default ProductDetails