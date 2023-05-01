import './Details.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TableDisplay from './TableDisplay'

const Details =() =>
{
    const [details , setDetails] = useState( {
        username : "",
        age : ""

    })

    const [masterdetails,setMasterDetails] = useState( [] )

    useEffect( ()=>
                    //read operation
                    {
                        axios.get('https://64296601ebb1476fcc4870d1.mockapi.io/crud')
                        .then((resp) => 
                        {
                            console.log(resp.data)
                            setMasterDetails(resp.data)
                        })
                    }    
    , [])


    const handleChange =(e) =>
    {
        setDetails({
            ...details,
            [e.target.name] : e.target.value

        })

    }



    const handleSubmit =(e) =>
    {
        e.preventDefault()
        setDetails({
            ...details
        })

        //post operation
        axios.post('https://64296601ebb1476fcc4870d1.mockapi.io/crud',details)

        .then( (response) => {
                               console.log(response)
                               setMasterDetails([...masterdetails, response.data])
                             } 
             )

      setDetails({username : "", age :""})
        

    }


    return (<div >
                <div className="details">

                
                <h3>React CRUD Operations</h3>

                <form className='form' onSubmit={handleSubmit}>
                    Enter Name <input type="text"
                                        name ="username"
                                        value ={details.username}
                                        onChange ={handleChange}/> <br/>
                    Enter Age   <input type="number"
                                       name = "age"
                                       value ={details.age}
                                       onChange ={handleChange} 
                                       /> <br/>

                    <button type="submit">Submit</button>
                </form>
                </div>

                <TableDisplay masterdetails={masterdetails} setMasterDetails={setMasterDetails}/> 


            </div>)
}

export default Details