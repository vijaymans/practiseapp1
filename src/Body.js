import React, { useState, useEffect } from "react"
import "./Body.css"
import ResturantCard from "./ResturantCard"
import ProductsCard from "./ProductsCard"
import {restodata} from "./Components/Constants"
import { Audio } from 'react-loader-spinner'
import {Link} from "react-router-dom"
import Shimmer from "./Shimmer"
import useOnline from "./Utils/useOnline"


const Body =(props) =>
{
    
    const {userdata} = props
  

    const [AllrestoData, setRestoData] = useState([])
    const [loader, setLoader] = useState(true)
    const [userinp, setUserInp] = useState("")

    useEffect( () =>
    {
        fetch('https://fakestoreapi.com/products')

        .then((response) =>
        {
          console.log(response)
           return  response.json()
        })
        .then( (data) =>
        {
            console.log(data)
            setRestoData(data)
            
            setLoader(!loader)
        
            
        })
        .catch( (error) =>
        {
            console.log(error)
        })
        
    },[])
    

    //logic for filtering data
    const filteredData = AllrestoData.filter( ele =>
        {
            if(userinp ==="")
            {
                return ele
            }
            else if (ele.title.toLowerCase().includes(userinp.toLowerCase())){
                return ele
            }
        })

        
    const handleChange =(e) =>
    {
        console.log(e.target.value)
        setUserInp(e.target.value)
    }

    const isOnline = useOnline()

    console.log(isOnline)

    if(!isOnline)
    {
        return (<h1>Sorry!! You have lost Internet Connection</h1>)
    }

    
 
    return (<>
            <input
             type="search"
             placeholder="Search"
             value ={userinp}
             onChange ={handleChange}
             style={{margin : "30px"}}/> 

            {console.log("Initial rendering")}
            
            <div className="products-card">
              { loader ?    
                        //    <div className="loader">
                        //     <Audio
                        //     height="200"
                        //     width="200"
                        //     radius="9"
                        //     color="green"
                        //     ariaLabel="loading"
                        //     wrapperStyle
                        //     wrapperClass/> 
                        //     </div>
                        <Shimmer/>
                        :
                            (filteredData.length ===0 && userinp!==""  )  ? 
                            <div className="no-data">
                                <span >Sorry No Records Found!!</span>
                            </div>
                                                                         :
               
                            ( filteredData.map ( (ele) =>
                                    {
                                        return (<Link to = {"/Product/" + ele.id} key={ele.id}
                                                 style={{ textDecoration: 'none' }}>
                                                 <ProductsCard  ele = {ele}
                                                                userdata ={userdata}/>
                                                 
                                                </Link>)
                                                 
                                                  


                                    }) 
                            )
             }
            </div>

           </>)
    

        
}
export default Body