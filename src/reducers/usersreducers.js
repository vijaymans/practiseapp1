const initialuserstate = []

const userReducers =(state=initialuserstate, action)=>
{
      switch(action.type)
      {
             case 'GET_USERS' : {
                                  return [...action.payload]
                                }

             case 'ADD_USERS' : {
                                  return [...state , {...action.payload} ]
                                }

             case 'UPDATE_USER' : {
                                    const updatedata = state.map( (ele)=>
                                    {
                                        if(ele.id == action.payload.id)
                                        {
                                            return action.payload
                                        }
                                        else{
                                           return ele
                                        }
                                    })
                                    return updatedata
                                  }
              case 'SORT_USERS' : {
                                      const sortedData = state.sort( (a,b)=>
                                      {
                                         return a.id - b.id
                                      })
                                      console.log(sortedData)
                                      //return sortedData

                                  }
              

             case 'DELETE_USERS' : {
                                       const filteredData = state.filter( (ele) =>
                                                                              {
                                                                                return ele.id!=action.payload
                                                                                        
                                                                              })
                                        return filteredData
                                    }

            default  : {
                return state
            }
      }
}
export default userReducers