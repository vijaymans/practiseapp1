import './Header.css'
import Logo from './Images/food-villa.png'
import { Link } from 'react-router-dom'

const Header =() =>
{
    return (<div className="Header">

    {/* code for logo*/}
    <a href="/">
    <img
     alt ="foodvilla"
     //src={Logo}
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w100-rw"
     />
    </a>

    {/* code for navbar */}
    <div>
        <ul className="container">
            <Link to="/">
                <li>Home</li>
            </Link>
           
            <Link to = "/About">
                <li>About</li>
            </Link>
           
            <Link to = "/Contact">
                <li>Contact</li>
            </Link>
            
            <Link to ="Instamart">
                <li>Instamart</li>
            </Link>

            <Link to="Details">
                <li>Details</li>
            </Link>
            
        </ul>

    </div>
    
    </div>)
}
    

export default Header