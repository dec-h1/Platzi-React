import React from 'react'
import {TodoCounter} from './TodoCounter'
//import logo from './logo.svg';
// import './App.css';
// const todos=[
//   {text: 'Cortar cebolla', completed:false},
//   {text: 'Tomar el curso de intro a React', completed:false},
//   {text: 'Llorar con la llorona', completed:false}

// ];
function App() {
  return (
   <React.Fragment>
    <TodoCounter/>
       <h2>Has completado 2 de 3 Todos</h2>
     {/*  <TodoSearch/> */}
        <input placeholder='Cebolla'/>
      {/* <TodoList>
        {todos.map(todo=>(
          <TodoItem/>
        ))}
    </TodoList> */}
  {/*   <CreateTodoButton/> */}
    <button>+</button>
   </React.Fragment>
  );
}
export default App;
