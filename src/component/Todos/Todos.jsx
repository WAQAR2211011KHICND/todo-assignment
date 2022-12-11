import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualTodos from './IndividualTodo.jsx';

function Todos({todosArray, setTodoArray }){



    return (

    <Accordion defaultActiveKey="0">
      {
        todosArray.map(todo =>{
            return (
            <>
                <IndividualTodos 
                setTodoArray = {setTodoArray}
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
