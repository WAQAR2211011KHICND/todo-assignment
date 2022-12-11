import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Individual_Todo.css'
import Edit from '../Updation/Edit';
import { useState } from 'react';

function IndividualTodos({id, title, details, dueDate, setTodoArray}){
  const handleDelete = () =>{
    setTodoArray((prev)=>{
      return prev.filter((todo)=>todo.title !== title);
    });
  } 
  
  const [modalShow, setModalShow] = useState(false);
  const handleEdit = () =>{
    setModalShow(true)

  }

  return (
    <div className="indTodos" key={id}>
      <Accordion.Item eventKey={id}  >
        <Accordion.Header>
            <h5>{title}</h5>
        </Accordion.Header>

        <Accordion.Body>

          <p>{details}</p>


          <div className="editDeleteBtn">
            <div className='date'>
              <p>{dueDate}</p>
            </div>

            <div className="UpdationBtn">
              <Button variant='primary' 
                onClick={handleEdit} >
                <span>Edit </span>
                <FontAwesomeIcon className='todoIcon' icon={faEdit} />
              </Button>
              
              <Edit
                title        = {title}
                details      = {details} 
                dueDate      = {dueDate}
                setTodoArray = {setTodoArray}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

              <Button variant="danger" onClick={handleDelete} >
                <span>Delete </span>
               <FontAwesomeIcon className='todoIcon' icon={faTrash} />
              </Button>
            </div>

          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
    )
}
export default IndividualTodos;
