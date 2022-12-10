import { useState } from 'react';
import './App.css';
import Title from './component/Title/Title';
import Todos from './component/Todos/Todos.jsx';

const todo = [
  {
    title: "Task1",
    details:  "do Something Task 1, Description",
    dueDate: "10-Dec-2022",
  },

  {
    title: "Task3",
    details:  "do Something  Task 2, Description",
    dueDate: "11-Dec-2022",
  }
];

function App() {
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

export default App;
