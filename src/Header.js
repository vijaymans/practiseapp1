import './Header.css'
const Header =() =>
{
    return (<div className="Header">

    {/* code for logo*/}
    <a href="/">
    <img
     alt ="foodvilla"
     src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w100-rw"
     />
    </a>

    {/* code for navbar */}
    <div>
        <ul className="container">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
    
    </div>)
}
    

export default Header