import Home from './Components/Home'
import About from './Components/About'
import Error from './Components/Error'
import Instamart from './Components/Instamart'
// import Contact from './Contact'
import Body from './Components/Body'
import Profile from './Components/Profile'
import Dependent from './Components/Dependent'
import ProductDetails from './Components/ProductDetails'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import configureStore from './Store'
import Users from './Components/Users'
import AdminConsole from './Components/AdminConsole'
import SuccessMessage from './Components/SucessMessage'
import ErrorMessage from './Components/ErrorMessage'
import Login from './Components/Login'





const DynamicContact = lazy( ()=> import('./Components/ContactContainer.js') )

const DynamicPaginate = lazy( () => import('./Components/Paginate.js') )
console.log(DynamicPaginate)


const store = configureStore()

  /*
  Header -
    -Logo
    -navItems(right)
    - cart
y

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
                    path : "Profile",
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
                path : "Dependent",
                element : <Dependent/>
              },
              {
                path : "Users",
                element : <Users/>
              },
              {
                path : "AdminConsole",
                element : <AdminConsole/>
              },
              {
                path :'Paginate',
                element : <Suspense fallback= { <h2>Data is loading....</h2> }>
                            <DynamicPaginate/>
                         </Suspense>
        
              }
      
      ]
      },

      {
        path :'SuccessMessage',
        element : <SuccessMessage/>

      },

      {
        path :'ErrorMessage',
        element : <ErrorMessage/>
      },

      {
        path : "Login",
        element : <Login/>
      }

      

    ])

    store.subscribe( ()=>
   {
         console.log('redux state', store.getState())
   })


   return (<>
              {/* //Using provider component we provide store to root component.
                  store is passed as props to provider */}
                       <Provider store ={store}>
                           <RouterProvider router ={router}/>
                       </Provider>
                       
           
            
          </>)
}

export default App