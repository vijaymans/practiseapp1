// import { IMG_CDN_URL } from "./C"
import './productscard.css'
const ProductsCard = (props) =>
        {
            

        const {title,image,rating,price} = props.ele
        


            return (<div className="products-card">
                        <img 
                        style={{width : "100px", height :"150px", textAlign:"center", borderRadius:"14px"}}
                        alt="product"
                        src ={image}
                        />
                        <div>
                        <p>{title}</p>
                        <p>Rating - {rating.rate}</p>
                        <p>price -{price}</p>
                       
                       
                        </div>

                   </div>)
        }

export default ProductsCard