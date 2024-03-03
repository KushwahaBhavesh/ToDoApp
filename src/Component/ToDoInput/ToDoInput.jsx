import React, { useState } from 'react'
import './TodoInput.css'
import toast from 'react-hot-toast';

const ToDoInput = ({ onInputHandle }) => {
  const [currName, setCurrName] = useState()
  const [currDate, setCurrDate] = useState()

  const [error, setError] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target
    if (name === 'taskName') {
      setCurrName(value)
    } else if (name === 'taskDate') {
      setCurrDate(value)
    }
  }

  // Task Validation
  const TaskValidate = (currName, currDate) => {
    if (!currName && !currDate) {
      toast.error("Task Name and Date cannot be empty.")
    }
    else if (!currName) {
      toast.error('Task name cannot be empty.')
    }
    else if (!currDate) {
      toast.error('Task Date cannot be empty.')
    }
    else {
      onInputHandle(currName, currDate);
      setCurrName('')
      setCurrDate('')

    }
  }


  const onButtonHandle = (event) => {
    event.preventDefault();
    setError(TaskValidate(currName, currDate))
    
  }





  return <>
    <form className='Form-Container'>
      <input type='text' name='taskName' value={currName} onChange={handleInputChange} placeholder='Enter task' />
      <input type='date' name='taskDate' value={currDate} onChange={handleInputChange} />
      <input type='submit' value="Add" onClick={onButtonHandle} />
    </form>
  </>
}

export default ToDoInput
