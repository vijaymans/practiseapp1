import Home from './Home'
import About from './About'
import Error from './Error'
import Instamart from './Instamart'
// import Contact from './Contact'
import Body from './Body'
import Profile from './Profile'
import Details from './Details'
import ProductDetails from './ProductDetails'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from 'react'


const DynamicContact = lazy( ()=> import('./Contact.js') )
console.log("DynamicContact",DynamicContact)



  /*
  Header -
    -Logo
    -navItems(right)
    - cart

  Body -
    -searchBar 
    -Resturant List
        -Resturant Card
            -Image
            -Name
            -Rating
            -cusines

  Footer -
    -Links
    -copyright

    // <div>
    //     <Header/>
    //     {/* <h2>sfsfsdfe</h2> */
    //     <Outlet/>
    // </div>






const App = () =>
{

  const userdata = {name :"vijay", age : 30}

     const router = createBrowserRouter([
      {
        path : "/",

        element : <Home/>,

        errorElement : <Error/>,

        children : [
          
        {
          path : "About",
          element : <About/>,
          children : [ {
            path : "profile",
            element : <Profile/>
                    }]
       },

       {
         path : "/",
         element : <Body userdata={userdata}/>
       },

       {
        path : "Contact",
        // element :  <DynamicContact/>
        element : <Suspense fallback={ <h1>Loading....</h1>}>
                      <DynamicContact/>
                  </Suspense>
                 
       },

       {
         path : "Product/:Id",
         element : <ProductDetails/>
       },

       {
        path : "Instamart",
        element : <Instamart/>
       },

       {
        path : "Details",
        element : <Details/>
       }
      
      ]
      }

    ])




   return (<>
            <RouterProvider router ={router}/>
          </>)
}

export default App