import { IMG_CDN_URL } from "./Components/Constants"

const ProductsCard = (props) =>
        {
            console.log(props)

        const {title,image,rating,price} = props.ele
        const {name, age} = props.userdata

        console.log(name,age)

                const prostyle ={
                    width : "300px",
                    height : "400px",
                    fontsize: "30px",
                    border : "2px solid orange",
                    margin : "5px",
                    padding : "10px",
                    wordWrap : "break-word",
                    color : "black",
                    overflow : "auto",
                    
                    }

            return (<div style={prostyle}>
                <img 
                style={{width : "100px", height :"150px"}}
                alt="product"
                src ={image}
                />
                <h2>{title}</h2>
                <h3>Rating - {rating.rate}</h3>
                 <h4>price -{price}</h4>
            </div>)
        }
export default ProductsCard