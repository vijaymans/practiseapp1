import React, { useState, useEffect } from 'react';
import { keralacities } from '../Constants/arraydata'
import Table from 'react-bootstrap/Table';
import './paginate.css'

const Paginate = () => {
  const [currentPage, setCurentPage] = useState(1)
  const recordsperpage = 5
  const lastIndexed = currentPage * recordsperpage
  const firstIndexed = lastIndexed - recordsperpage

  //filtered records based on curent page
  const records = keralacities.slice(firstIndexed, lastIndexed)
  console.log(records)

  //for generating page numbers
  const npage = Math.ceil(keralacities.length / recordsperpage)
  // const numbers = [...Array(npage+1).keys()].slice(1)

  const pagesgenerate = () => {
    let res = []
    const handleClick = (val) => {
      console.log(val)
      setCurentPage(val)
    }

    for (let i = 1; i <= npage; i++) {

      // style ={{color : `${currentPage==i} && red`}}
      res.push(<button
        className='paginate-button-numbers'
        style={{ backgroundColor: ` ${currentPage == i ? 'blue' : ''} ` }}
        onClick={() => handleClick(i)}

      >
        {i}
      </button>)
    }
    return res

  }



  return (<div>
    <h2 style={{textAlign:"center"}}>Pagination component</h2>
    <Table striped className="tablebody">
      <thead>
        <tr>

          <th style={{ width: "10px" }}>Id</th>

          <th>Name</th>
          <th>Longitude</th>
          <th>Latitude</th>
        </tr>
      </thead>

      <tbody>

        {records.map((city) => {
          return <tr key={city.id}>

            <td style={{ width: "20%" }}>{city.id}</td>
            <td>{city.name}</td>
            <td>{city.longitude}</td>
            <td>{city.latitude}</td>
          </tr>

        })
        }

      </tbody>
    </Table>

    <div className='paginate-btn-container'>
      <button className='paginate-button'
        onClick={() => {
          (currentPage > 1) &&
            setCurentPage(currentPage - 1)
        }}> Prev </button>

      {
        pagesgenerate()
      }

      <button className='paginate-button'
        onClick={() => {
          (currentPage < npage) &&
          setCurentPage(currentPage + 1)
        }
        }>Next</button>
    </div>
  

    </div >)
}

export default Paginate;
