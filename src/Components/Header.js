import './Header.css'
// import Logo from '../Images/food-villa.png'
import { NavLink } from 'react-router-dom'

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
            <NavLink to="/">
                <li>Home</li>
            </NavLink>
           
            <NavLink to = "About">
                <li>About</li>
            </NavLink>

            <NavLink to="Paginate">
                <li>Pagination</li>
            </NavLink>
           
            <NavLink to ="Contact">
                <li>Contact</li>
            </NavLink>
            
            <NavLink to ="Instamart">
                <li>Instamart</li>
            </NavLink>

            <NavLink to="Dependent">
                <li>dependentDropdown</li>
            </NavLink>

            <NavLink to="Users">
                <li>Users</li>
            </NavLink>

            <NavLink to="AdminConsole">
                <li>Admin Console</li>
            </NavLink>

            <NavLink to="Cart">
                <li>Cart</li>
            </NavLink>
            
        </ul>

    </div>
    
    </div>)
}
    

export default Header