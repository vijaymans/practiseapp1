import './Details.css'
import axios from 'axios'

const TableDisplay =(props) =>
{
    const {masterdetails, setMasterDetails} = props

    const handleDelete =(Id) =>
    {
        console.log(Id)
        
        const filtereddetails = masterdetails.filter( (details) =>
        {
            return details.id!==Id
        })

        axios.delete(`https://64296601ebb1476fcc4870d1.mockapi.io/crud/${Id}`)
        .then((response)=>
        {
            console.log(response.data)
        })

        setMasterDetails(filtereddetails)
    }


  
    return (<>
         <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Age</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {
                    masterdetails.map( (data)=>
                    {
                        return ( <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.username}</td>
                                    <td>{data.age}</td>
                                    <td> <button onClick={()=>
                                    {
                                        handleDelete(data.id)
                                    }}>delete</button></td>
                                </tr>)
                    })
                }
            </tbody>
         </table>
        </>)
}

export default TableDisplay