import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState , useEffect} from 'react';
import uniqueIdentifier from '../Constants/uniqueId';
import UsersTable from './UsersTable';
import { useDispatch , useSelector} from 'react-redux';
import {usersactionpost, usersactionfetch} from '../actions/usersaction'
import './users.css'

function Users() {

    const dispatch = useDispatch()
   

    const [userdetails,setUserdetails] = useState({
        username : "",
        email : "",
        age : "",

    })

    const [ischecked, setIschecked] = useState(false)

    useEffect(()=>
    {
        dispatch(usersactionfetch())
    },[])

    
    const updatingObj = (name,value) =>
    {
        return {
            ...userdetails,
            [name] : value
        }
    }
    

    const handleChange = (e)=>
    {
        if(e.target.name ==="username")
        {
            if(e.target.value.match(/\d/))
            {
                alert("Your name contains number!!!!")
            }
            else
            {
                setUserdetails(updatingObj(e.target.name,e.target.value))
            }
        }
        else
        { 
            setUserdetails(updatingObj(e.target.name,e.target.value))
        }

    }

    //to check whether all input fields are submitted
    const isformready =  Object.values(userdetails).every( ele => ele!='') && ischecked

    console.log(isformready)

    const handleSubmit =(e)=>
    {
        e.preventDefault()
        const finaldata = {...userdetails, id :uniqueIdentifier()}
        console.log(finaldata)
        dispatch(usersactionpost(finaldata))

        //form reset
        setUserdetails({username : "",
        email : "",
        age : ""})
    }

  
    
  return ( <>
       <Form className ="usersform" onSubmit ={handleSubmit}>

        
        <label> Enter Name </label>
        <input type="text" value ={userdetails.username} name ="username" onChange={handleChange}/>
        
        <label>Enter Email</label>
        <input type="email" value ={userdetails.email} name="email" onChange={handleChange}/>

        <label>Enter Age</label>
        <input type="number" value={userdetails.age} name ="age" onChange={handleChange}/>
        <br/>

        <div classname="formcheckbox">
        <input
         type="checkbox"
         value ={ischecked}
         onClick ={ e=> setIschecked(e.target.checked)}/>
        <label>I have read all terms and conditions</label>
        </div>
         
        
         <Button 
          variant="primary" 
          disabled = {!isformready}
          className="formbutton"
         
          type="submit" >
            Submit
        </Button> 
   
    </Form>

    <UsersTable/>
    </>
  );
}

export default Users;