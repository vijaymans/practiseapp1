import React from "react";
import './contact.css'
import { useState } from "react";

function Contact() {

    const [userinputs,setUserInputs] = useState({
        username : "",
        age : "",
        details : "",
        cars : "",
        isChecked : false,
        gender : ""
    })

    const carBrands = ["Mercedes", "BMW", "Maserati", "Infinity", "Audi"];


    const handleChange=(e)=>
    {
        console.log(e.target.value)
        //  ,
        const res = {   ...userinputs,
                      [e.target.name] : e.target.value
                    }
        console.log(res)

        setUserInputs(res)
    }

    const handleCheckboxChange =(e) =>
    {
        console.log(e.target.checked)
        setUserInputs({
            ...userinputs,
            isChecked : e.target.checked
            
        })
    }

    const handleRadioChange =(e) =>
    {
        console.log(e.target.value)
        setUserInputs({
            ...userinputs,
           gender : e.target.value
        })

    }

    const handleSubmit =(e)=>
    {
        e.preventDefault()
        console.log("form submitted")
        console.log(userinputs)
        // setUserInputs({username : "",
        // age : "",
        // details : "",
        // cars : "",
        // isChecked : false,
        // gender : ""

        // })
    }
    
  return (
        <div className="contact-form">

            <form onSubmit={handleSubmit}>
                <label>Enter-Name</label>
                <input type="text" placeholder="name" value={userinputs.username} name ="username"
                onChange={handleChange}/> 

                <label>Enter-Age</label>
                <input type="number" placeholder="age" value ={userinputs.age} name="age"
                 onChange={handleChange}/> 

                <label>Enter Details</label>
                <textarea onChange ={handleChange} value={userinputs.details} name="details"
                /> 

               

                <label>Gender</label>
                <input type="radio" 
                       name ="gender"
                       value = "male"
                       checked = {userinputs.gender ==="male"}
                       onChange ={handleRadioChange}/> Male 
                <input type="radio"
                       name ="gender" 
                       value ="female"
                       checked ={userinputs.gender ==="female"}
                       onChange ={handleRadioChange}/> FeMale 
                <br/>


                <label>Interests</label> 

                <select value={userinputs.cars} onChange={handleChange} name="cars">
                <option>Select any brand</option>
                {
                    carBrands.map( (car ,i) =>
                    {
                         return <option key={i}> {car}
                         </option>
                    })
                }
                    
                </select> <br/>

                <input type="checkbox" 
                       className="check-box"
                       name ="isChecked"
                       checked = {userinputs.isChecked}
                       onChange ={handleCheckboxChange}>
                </input>
                <span>I Agree to the terms and Conditions</span> <br/>

                <button type="submit">Submit</button> 

            </form>
       
       
        </div>


   
  );
}

export default Contact;
