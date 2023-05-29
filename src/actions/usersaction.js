import {USERS_URL} from '../Constants/Constants'
import axios from 'axios'

export const usersactionfetch =() =>
{
    return ( (dispatch)=>
                        {
                            axios.get(`${USERS_URL}`)
                            .then( (response) =>
                            {
                                dispatch({
                                    type : 'GET_USERS',
                                    payload : response.data
                                })
                            })
                            .catch((error)=>
                            {
                                console.log(error)
                            })

                        }
                        
            )
    
}


export const usersactionpost =(data) =>
{
    return ( (dispatch)=>
                        {
                            axios.post('http://localhost:5000/users',data)
                            .then( (response) =>
                            {
                                console.log(response.data)
                                dispatch({
                                    type : 'ADD_USERS',
                                    payload : response.data
                                })
                            })
                            .catch((error)=>
                            {
                                console.log(error)
                            })

                        }
                        
            )
    
}
 
export const usersactiondelete =(Id) =>
{
    return ( (dispatch)=>
                        {
                            axios.delete(`http://localhost:5000/users/${Id}`)
                            .then( (response) =>
                            {
                                console.log(response)
                                dispatch({
                                    type : 'DELETE_USERS',
                                    payload : Id
                                })
                            })
                            .catch((error)=>
                            {
                                console.log(error)
                            })

                        }
                        
            )
    
}

export const oneuseractionupdate =(formdata)=>
{
    return ( (dispatch)=>
                {
                   
                    axios.put(USERS_URL+formdata.id , formdata)
                    .then((response)=>
                    {
                        console.log(response.data)
                        dispatch({
                            type : 'UPDATE_USER',
                            payload : response.data
                        })
                    })

                    .catch((error)=>
                    {

                    })
                })
}


export const sortuserdata=()=>
{
    return {
        type : 'SORT_USERS',
        payload : null
    }
}