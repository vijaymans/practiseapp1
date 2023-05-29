import {React ,useState ,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {oneuseractionupdate} from '../actions/usersaction'

const ProductModal = (props) => 
{
    const {userId,hideModal} = props

    const [uname ,setUName] = useState('')
    const [age ,setAge] = useState(0)
    const [umail,setUmail] = useState('')
    

    const dispatch = useDispatch() 

    const usersstate = useSelector((state)=>
    {
        return state.users
    })

    useEffect( () =>
    {
        const res= usersstate.find((ele)=>
        {
            return ele.id == userId
        })
        console.log(res)
        setUName(res.username)
        setAge(res.age)
        setUmail(res.email)

    },[])


    const handleChange =(e) =>
    {
        const inp = e.target.name
        if( inp === "username")
        {
            setUName(e.target.value)
        }
        else if(inp ==="email")
        {
          setUmail(e.target.value)
        }
        
        else
        {

            setAge(Number(e.target.value))
        }

    }

    const handleClick =(e) =>
    {
        e.preventDefault()
        const formData = {
            username : uname ,
            email :umail,
            age : age,
            id : userId
        }
        console.log(formData)
        dispatch(oneuseractionupdate(formData))
        hideModal()
    }
    
    return( <div>
               <form style={{ width :"200px",margin: "auto"}}>
                             
                    <label>Name</label>
                    <input type="text" name ="username"  onChange ={handleChange}  
                      value ={uname}   placeholder="Enter Name"/>

                    <label>Email</label>
                    <input type="email" name ="email"  onChange ={handleChange}  
                      value ={umail}   placeholder="Enter Email"/>
                    
                    <label>Age</label>
                    <input type="number" name ="age"  onChange ={handleChange}  
                     value ={age}   placeholder="Enter Age"/>
                    
                    
                    <button style={{marginTop:"10px"}} type="submit"  onClick ={handleClick}  className="btn btn-secondary">SAVE</button>
                </form>

                </div>)
}

export default ProductModal