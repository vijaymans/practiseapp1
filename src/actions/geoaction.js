import axios from "axios"
import { GEO_URL } from "../Constants/Constants"

export const geoactionpost =(geodata)=>
{
    
        return ( (dispatch)=>
                        {
                            axios.post(GEO_URL,geodata)
                            .then( (response)=>
                            {
                                console.log(response.status)
                                dispatch({
                                    type : 'ADD_GEODATA',
                                    payload : response.data,
                                    status : response.status
                                })
                            })
                            .catch((error)=>
                            {
                                console.log(error)
                                dispatch({
                                    type : 'ERROR_GEODATA',
                                    payload : error,
                                    geodata : geodata


                                })
                            })
                            
                        })
}