import { useState } from 'react';
import Title from '../Title/Title';
import Todos from '../Todos/Todos';

const todo = [
  {
    title: "Task1",
    details:  "do Something Task 1, Description",
    dueDate: "10-Dec-2022",
  }
];

function TodoMain(){
  const [todosArray, setTodoArray] = useState(todo);

    return (
    <div className="App">
      <div className='todoList'>
          <Title todosArray={todosArray} setTodoArray={setTodoArray}/>
          <Todos todosArray={todosArray} setTodoArray={setTodoArray} />
      </div>
    </div>
    );
}

export default TodoMain;