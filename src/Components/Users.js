import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState , useEffect} from 'react';
import uniqueIdentifier from '../Constants/uniqueId';
import UsersTable from './UsersTable';
import { useDispatch , useSelector} from 'react-redux';
import {usersactionpost, usersactionfetch} from '../actions/usersaction'

function Users() {

    const dispatch = useDispatch()
   

    const [userdetails,setUserdetails] = useState({
        username : "",
        email : "",
        age : ""

    })

    useEffect(()=>
    {
        dispatch(usersactionfetch())
    },[])

    

    const handleChange = (e)=>
    {
        setUserdetails({
            ...userdetails,
            [e.target.name] : e.target.value
        })

    }

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
    <Form style={{display :"flex" , flexDirection : "column",width : "200px" , height : "200px" ,
     margin : "30px auto" }} onSubmit ={handleSubmit}>

        
        Enter Name<input type="text" value ={userdetails.username} name ="username" onChange={handleChange}/>
        
        Enter Email<input type="email" value ={userdetails.email} name="email" onChange={handleChange}/>

        Enter Age<input type="number" value={userdetails.age} name ="age" onChange={handleChange}/>
        <br/>

    
         <Button variant="primary" type="submit" >
            Submit
        </Button> 
   
    </Form>

    <UsersTable/>
    </>
  );
}

export default Users;