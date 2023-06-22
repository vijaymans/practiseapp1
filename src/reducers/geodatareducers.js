const intialState = []

const geoDatareducers = (state = intialState , action) =>
{
     switch(action.type)
     {
        case 'ADD_GEODATA' : {
                                return [ ...state, {...action.payload, status : action.status} ]
                             }
       case 'ERROR_GEODATA' : {
                              
                          return [...state,{...action.payload,...action.geodata}]
  }

          default :        {
                            return state
                          }
     }
}

export default geoDatareducers