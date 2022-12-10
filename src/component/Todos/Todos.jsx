import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Individual_Todos from './Individual_Todo.jsx';
import { useState } from 'react';

function Todos({todosArray, setTodoArray }){



    return (

    <Accordion defaultActiveKey="0">
      {
        todosArray.map(todo =>{
            return (
            <>
                <Individual_Todos 
                id =      {todo.title} 
                title =   {todo.title} 
                details = {todo.details} 
                dueDate = {todo.dueDate}
                />

            </>)
        })
      }
    </Accordion>
   
    )
}

export default Todos;
