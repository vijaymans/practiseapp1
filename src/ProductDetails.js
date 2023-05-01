import { useParams } from "react-router-dom"
import {useState , useEffect} from "react"
import {Link} from "react-router-dom"
import './product-detail.css'
import useProduct from "./Utils/useProduct"

const ProductDetails =() =>
{
    
    const params = useParams()
    console.log(params)

    //useproduct calls the api and return the data object
    const product = useProduct(params)

    
    
    return (<>
                <div className="product-detail">
                <h2>ProductDetails- Page</h2>
                <img style ={{width : "100px", height : "150px"}}src={product?.image}/>
                <h3>{product?.title}</h3>
                <h3>Rating {product?.rating?.rate}</h3>
                <p>{product?.description}</p>
                </div>

                <Link to="/"> 
                <h3 style={{textAlign:"center", textDecoration:"none", color : "black"}}>Go Back</h3>
                </Link>
            </>)
}

export default ProductDetails