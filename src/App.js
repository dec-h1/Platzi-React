import React from 'react'
import CreateTodoButton from './CreateTodoButton';
import {TodoCounter} from './TodoCounter'
import TodoItem from './TodoItem';
import { TodoList } from './TodoList';
import TodoSearch from './TodoSearch';
//import logo from './logo.svg';
// import './App.css';
const todos=[
  {text: 'Cortar cebolla', completed:true},
  {text: 'Tomar el curso de intro a React', completed:false},
  {text: 'Llorar con la llorona', completed:false},
  {text: 'bienvenida la princesa de la robotica', completed:false}

];
function App() {
  return (
   <React.Fragment>
    <TodoCounter/>
       {/* <h2>Has completado 2 de 3 Todos</h2> */}
      <TodoSearch/>
        {/* <input placeholder='Cebolla'/> */}
      <TodoList>
        {todos.map(todo=>(
          <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              />

        ))}
    </TodoList>
    <CreateTodoButton/>
    {/* <button>+</button> */}
   </React.Fragment>
  );
}
export default App;
