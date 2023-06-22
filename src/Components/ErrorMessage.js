import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import './successmessage.css'

function ErrorMessage()
 {

   const [errordata, setErrordata] = useState({})
   const navigate = useNavigate()   
   
   useEffect(()=>
   {
      console.log(JSON.parse(localStorage.getItem("isexists")))
      setErrordata(JSON.parse(localStorage.getItem("isexists")))
      localStorage.removeItem("isexists")

   },[])

                                                                                                                                                                                                                                                                                                                                                                              

    return (    <div className="errormessage">
                 {Object.keys(errordata).length &&
                     <>
                     <h1>FORM SUBMISSION FAILED</h1>
                      <h2>{errordata.message}</h2>
                       <h3>{errordata.code}</h3>
                     </>
                    
                 }
               <button onClick={()=> navigate('/')}>Back</button>
            
                

                </div>

        );
   }



export default ErrorMessage;
