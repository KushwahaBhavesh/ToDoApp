import React from 'react'
import ToDoModal from './ToDoModal/ToDoModal'


const ToDoTaskList = ({ toDoItems, HandleDeleteButton }) => {
  return <>
    {toDoItems.map((item, index) => <ToDoModal key={index} todoName={item.name} toDoDate={item.date} HandleDeleteButton={HandleDeleteButton} />)}
  </>
}

export default ToDoTaskList
