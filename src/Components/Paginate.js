import React, { useState, useEffect } from 'react';
import { keralacities } from '../Constants/arraydata'
import Table from 'react-bootstrap/Table';
import './paginate.css'

const Paginate = () => 
{
  const [currentPage, setCurentPage] = useState(1)
  const recordsperpage = 5
  const lastIndexed = currentPage * recordsperpage
  const firstIndexed = lastIndexed - recordsperpage

  //filtered records based on curent page
  const records = keralacities.slice(firstIndexed,lastIndexed)
  console.log(records)

  //for generating page numbers
  const npage = Math.ceil(keralacities.length /recordsperpage )
  // const numbers = [...Array(npage+1).keys()].slice(1)

  const pagesgenerate =()=>
  {
    let res =[]
     const handleClick=(val)=>
     {
        console.log(val)
        setCurentPage(val)
     }

     for(let i=1 ;i <=npage ;i++)
     {

        // style ={{color : `${currentPage==i} && red`}}
          res.push(<button 
                    style ={{backgroundColor: ` ${currentPage==i ? 'blue' : ''} ` }}
                    onClick={()=> handleClick(i)}

                   >
                    {i}   
                    </button>)
     }
     return res

  }

  // console.log(npage)

  // console.log(keralacities)

    return(<div className="tablebody">
      <h2>Pagination component</h2>
      <Table striped>
        <thead>
            <tr>
              
              <th>Id</th>
              
              <th>Name</th>
              <th>Latitude</th>
            </tr>
        </thead>

        <tbody>
          <>     
                { records.map( (city)=>
                        {
                              return   <tr key={city.id}>
                                            
                                            <td>{city.id}</td>
                                            <td>{city.name}</td>
                                            <td>{city.latitude}</td>
                                        </tr>
                                      
                        })
                }
                

                <div className='paginate-button'>
                <button onClick ={ () =>
                {
                  (currentPage > 1) &&
                  setCurentPage(currentPage- 1)
                }}> Prev </button>

                  {
                  pagesgenerate()
                  }
                
                <button onClick={ () => 
                                      {  (currentPage < npage) &&
                                         setCurentPage(currentPage+1)
                                      }
                                 }>Next</button>
                </div>
            </>
      
        </tbody>
      </Table>

    </div>)
}

export default Paginate;
