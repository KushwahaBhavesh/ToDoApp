import React from 'react'
import './ToDoModal.css'

const ToDoModal = ({todoName,toDoDate,HandleDeleteButton}) => {
  return <>
    <div className='card'>
      <div className='title'>{todoName}</div>
      <div className='date'>{toDoDate}</div>
      <button onClick={()=>HandleDeleteButton(todoName)}>delete</button>
    </div>
  </>
}

export default ToDoModal
