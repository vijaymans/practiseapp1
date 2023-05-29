import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {usersactiondelete} from '../actions/usersaction'
import {useState} from 'react'
import UserModal from './UserModal';
import Modal from "react-bootstrap/Modal";
import { BsFillArrowDownCircleFill ,BsFillArrowUpCircleFill} from 'react-icons/bs';
import { sortuserdata ,usersactionfetch} from '../actions/usersaction';

function UsersTable(props) 
{
    const [isOpen,setIsOpen] =  useState(false)
    const [userId,setuserId] = useState(0)


    const dispatch = useDispatch()
    const usersstate = useSelector((state)=>
    {
        
        return state.users
    })

    const showModal=(Id)=>
    {
        setIsOpen(true)
        setuserId(Id)
    }

    const hideModal=()=>
    {
        setIsOpen(false)
    }

    const handleDownClick =()=>
    {
        dispatch(sortuserdata())
    }

    const handleUpClick=()=>
    {
        dispatch(usersactionfetch())
    }
   
    

  return (  <>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th> Id - <BsFillArrowDownCircleFill onClick = {handleDownClick}
                title="sortData"/>&nbsp;&nbsp;
                <BsFillArrowUpCircleFill onClick = {handleUpClick}
                title="backtoNormal"/> 
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>User-delete</th>
                <th>User-Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    usersstate.map(  (ele) =>
                    {
                        return ( <tr key ={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele?.username}</td>
                            <td>{ele?.email}</td>
                            <td>{ele?.age}</td>
                            <td> <button onClick ={ ()=> dispatch(usersactiondelete(ele.id))}>Delete</button></td>
                            <td> <button onClick ={ ()=>  showModal(ele.id)} >Edit</button></td>
                        </tr>)
                    })
                }
            </tbody>
            </Table>

            {
                isOpen && <div>
                        <Modal style ={ {color : "black" , marginLeft : "100px"}} show={isOpen} onHide={hideModal}>
                            <Modal.Header>
                            <Modal.Title>EDIT</Modal.Title>
                            </Modal.Header>
                            <UserModal  hideModal ={hideModal} userId ={userId}/>
                            <Modal.Footer>
                            <button className = "btn btn-dark" onClick={hideModal}>Cancel</button>
                        
                            </Modal.Footer>
                        </Modal>
                    </div>
            }

            </>
            
        )

    
}

export default UsersTable;