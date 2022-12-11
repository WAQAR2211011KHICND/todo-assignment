import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import './Title.css';
import { useState } from 'react';
import Add from '../Updation/Add.jsx';


function Title({todosArray, setTodoArray }){
    const [modalShow, setModalShow] = useState(false);

    return(  
    <div className='header'>
    <div className="title">
            <FontAwesomeIcon className='todoListIcon' icon={faListCheck} />
            <div className="div">
                <p>ToDo List</p>
            </div>
            <button 
                
                onClick={() => setModalShow(true)} 
                className='addButton'>
                  <h3>+</h3> 
            </button>
    </div>
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