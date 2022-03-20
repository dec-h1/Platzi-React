import React from 'react'
import './CreateTodoButton.css';
const CreateTodoButton = (props) => {
  return (

    <button className='CreateTodoButton'
      onClick={()=>console.log('clic')}
    >+</button>
  )
}

export default CreateTodoButton