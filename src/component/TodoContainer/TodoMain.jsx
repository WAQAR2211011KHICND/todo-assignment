import { useState } from 'react';
import Title from '../Title/Title';
import Todos from '../Todos/Todos';

function TodoMain(){
  const [todosArray, setTodoArray] = useState([]);

    return (
    <div className="App">
      <div className='todoList'>
          <Title todosArray={todosArray} setTodoArray={setTodoArray}/>
          <Todos todosArray={todosArray} setTodoArray={setTodoArray}/>
          {todosArray.length===0  && <div className='empty'><p>Empty</p></div>}
      </div>
    </div>
    );
}

export default TodoMain;