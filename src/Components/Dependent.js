
import { useState, useEffect } from 'react'
import axios from 'axios'
import './dependent.css'
import { geodata } from '../Data/geodata';

const DependentDropdown =() =>
{
    const [country, setCountry] = useState('')
    const [ustate, setUState] = useState('')
    const [city, setCity] = useState('')
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

   const handleCountryChange=(e)=>
   {
     
     const selectedcountryobj= geodata.find( (ele)=>
      {
         
        return ele.name == e.target.value
      })

      console.log(selectedcountryobj)
      setStates(selectedcountryobj.states)
      setCountry(e.target.value)

 }

 const handleStateChange =(e)=>
 {
    
   
    console.log(e.target.value)

    const selectedstatecitiesobj = states.find( (ele)=>
    {
         return ele.name == e.target.value
    })

    console.log(selectedstatecitiesobj)
    setCities(selectedstatecitiesobj.cities)
    setUState(e.target.value)

 }

 const handleCityChange=(e)=>
 {
    console.log(e.target.value)
    setCity(e.target.value)
 }


 const handleSubmit =()=>
 {
    const userdata = {
        country:country,
        state: ustate,
        city : city,

    }
    console.log(userdata)
 }

 console.log(geodata)

    return (<div className ="dependent-dropdown">
               <h2>Countries-States-cities</h2>
            <h3>Countries</h3> 

           <select value= {country} onChange ={ handleCountryChange}>

             <option>Please Enter Country</option>
             {
                geodata.map( (ele)=>
                {
                    return  <option key={ele.id}>{ele.name}</option>
                })
             }
           </select> <br/> <br/>

           <h3>States</h3>

           <select value={ustate} onChange={handleStateChange}>
                <option>Please Select the State</option>
                {   
                     states.map( (ele)=>
                            {
                                return  <option key={ele.id}> {ele.name} </option>
                            })
                }
            </select> <br/> <br/>

            <h3>Cities</h3>

            <select value={city} onChange={handleCityChange}> 
            <option>Please Select the city</option>
                {  
                    // 
                    cities.map( (ele)=>
                    {
                        return  <option key={ele.id}>{ele.name} </option>
                    })
                  

                   
                }
            </select> 
                <br/>
            <button style={{marginTop:"20px"}}onClick ={handleSubmit}>Submit</button>
           
           <br/> <br/>


            </div>)
}

export default DependentDropdown