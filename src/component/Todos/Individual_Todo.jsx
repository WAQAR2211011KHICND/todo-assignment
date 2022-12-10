import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function Individual_Todos({id, title, details, dueDate}){
    return (
    <div className="indTodos">
          <Accordion.Item eventKey={id}>
        <Accordion.Header>
            <h5>{title}</h5>
        </Accordion.Header>

        <Accordion.Body>

            <p>{details}</p>
            <p>{dueDate}</p>

            <Button variant='primary'><FontAwesomeIcon className='todoIcon' icon={faEdit} /></Button>
            <Button variant="danger">X</Button>
        </Accordion.Body>
      </Accordion.Item>
    </div>
    )
}
export default Individual_Todos;
