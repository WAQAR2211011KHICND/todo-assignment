import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faAdd } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import './Title.css';
import { useState } from 'react';
import Add from '../Add/Add.jsx';


function Title({todosArray, setTodoArray }){
    const [modalShow, setModalShow] = useState(false);

    return( 
    <div className="title">
            <FontAwesomeIcon className='todoIconAdd' icon={faList} />
            <h1>ToDo List</h1>
            <Button variant='dark' onClick={() => setModalShow(true)} className='addButton'><FontAwesomeIcon className='todoIcon' icon={faAdd} /></Button>
            <Add
                todosArray = {todosArray}
                setTodoArray = {setTodoArray}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
    </div>
    )
}

export default Title;