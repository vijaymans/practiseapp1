import { useState } from "react"

const Searchresto =(props) =>
{
    const {restodata1, updaterFunction} = props

    const [userinp, setUserInp] = useState("")

   


    const handleChange =(e) =>
    {
        console.log(e.target.value)
        setUserInp(e.target.value)
    }

    const handleClick =()=>
    {
        
        const filteredata = restodata1.filter( ele =>
            {
                    return  ele.data.name.toLowerCase().includes(userinp.toLowerCase())
            })
 
       
    }

    return(<div>
            <input
             type="search"
             placeholder="Search"
             value ={userinp}
             onChange ={handleChange}
             style={{margin : "30px"}}/> 

             <button 
             onClick ={handleClick}>
                Search here
             </button>

          </div>)
}

export default Searchresto