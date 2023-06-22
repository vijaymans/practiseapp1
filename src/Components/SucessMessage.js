import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation } from "react-router-dom";
import './successmessage.css'

function SuccessMessage()
 {
   const location = useLocation()
   console.log(location.state)

    const navigate = useNavigate()


    return (    <div className="successmessage">

                <h2>FORM SUBMITTED SUCCESSFULLY</h2>
                <p style ={{color : 'darkgreen', fontWeight:'bolder'}}>
                  FormId -- {location?.state?.id} </p>
               
                <button onClick={()=> navigate('/')}>Back</button>
            
                

                </div>

        );
   }



export default SuccessMessage;
