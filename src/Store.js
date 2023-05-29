import {combineReducers, legacy_createStore as createStore} from 'redux'
import productsreducers from './reducers/productsreducers'
import thunk from 'redux-thunk'
import {applyMiddleware,compose} from 'redux'
import userReducers from './reducers/usersreducers'

const configureStore =()=>
{
    const rootreducer = combineReducers({
        products : productsreducers,
        users : userReducers   

    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)))
   
   
   
   return store
}






export default configureStore