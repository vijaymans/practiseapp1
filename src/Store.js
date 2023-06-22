import {combineReducers, legacy_createStore as createStore} from 'redux'
import productsreducers from './reducers/productsreducers'
import thunk from 'redux-thunk'
import {applyMiddleware,compose} from 'redux'
import userReducers from './reducers/usersreducers'
import geoDatareducers from './reducers/geodatareducers'

const configureStore =()=>
{
    const rootreducer = combineReducers({
        products : productsreducers,
        users : userReducers,
        geodata : geoDatareducers,
       

    })

    //enables redux dev tools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    // enables to make api calls using redux thunk middle ware
    const store = createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)))
   
   
   
   return store
}






export default configureStore