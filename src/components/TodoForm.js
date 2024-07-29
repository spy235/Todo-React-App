import React, { useState } from 'react'


const TodoForm = ({addTodo}) => {


const [value,setValue] =  useState("");

function handleChange(event) {
setValue(val => event.target.value);
}

function handleSubmit(event) {
    event.preventDefault();
    addTodo(value);
    setValue("");
    
}

  return (
    <form className='TodoFrom' onSubmit={handleSubmit}>
        <input value={value} type='text' className='todo-input' placeholder='what is the tash today' onChange={handleChange} required/>
        <button type='submit' className='todo-btn'>add task</button>      
    </form>
  )
}

export default TodoForm
