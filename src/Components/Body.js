import React, { useState, useEffect } from "react"
import "./Body.css"
import ProductsCard from "./ProductsCard"
// import {restodata} from "../Constants/Constants"
import {Link} from "react-router-dom"
import Shimmer from "../Utils/Shimmer"
// import useOnline from "../Utils/useOnline"
import { useDispatch ,useSelector} from "react-redux"
import productsaction from "../actions/productsaction"


const Body =(props) =>
{
    
    const {userdata} = props
  

    
    const [loader, setLoader] = useState(true)
    const [userinp, setUserInp] = useState("")

    const dispatch = useDispatch()

    useEffect( () =>
    {
         dispatch(productsaction())

         setLoader(!loader)
        
    },[])
    
    const AllrestoData =  useSelector( (state)=>
    {
            return state.products
    })

    //logic for filtering data
    const filteredData = AllrestoData.filter( ele =>
        {
            if(userinp ==="")
            {
                return ele
            }
            else if (ele.title.toLowerCase().includes(userinp.toLowerCase()))
            {
                return ele
            }
        })

        
    const handleChange =(e) =>
    {
        console.log(e.target.value)
        setUserInp(e.target.value)
    }

    
    
 
    return (<>
            <input
             type="search"
             placeholder="Search"
             value ={userinp}
             onChange ={handleChange}
             style={{margin : "30px", borderRadius:"12px"}}/> 

            {console.log("Initial rendering")}
            
            <div className="product-container">
              { loader ?    
                        <h2>Data is loading.....</h2>
                        // <Shimmer/>
                        :
                            (filteredData.length ===0 && userinp!==""  ) 
                            
                            ? 
                            <div className="no-data">
                                <span >Sorry No Records Found!!</span>
                            </div>
                            :
               
                            ( filteredData.map ( (ele) =>
                                    {
                                        return ( <div className="product-container-child">
                                                 <Link to = {"/Product/" + ele.id} key={ele.id}
                                                 style={{ textDecoration: 'none' }}>
                                                 <ProductsCard  ele = {ele}
                                                                userdata ={userdata}/>
                                                 
                                                </Link>
                    
                                                </div>
                                            )

                                    }) 
                            )
             }
            </div>

           </>)
    

        
}
export default Body