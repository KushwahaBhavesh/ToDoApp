
import './App.css'
import ToDoTitle from './Component/TodoTitle/ToDoTitle'
import ToDoInput from './Component/ToDoInput/ToDoInput'
import toast, { Toaster } from 'react-hot-toast';
import ToDoError from './Component/ToDoError/ToDoError'
import { useEffect, useState } from 'react'
import ToDoTaskList from './Component/ToDoTaskList/ToDoTaskList'


function App() {
  const storedTasks = JSON.parse(localStorage.getItem('toDoItems'));
  const [toDoItems, setTodoItems] = useState(storedTasks||[]);
  const [loading, setLoading] = useState(true);

  //Localstorage implementation
  useEffect(() => {
    try {
      if (storedTasks) {
        setTodoItems(storedTasks);
      }
    } catch (error) {
      console.error('Error parsing JSON from local storage:', error);
    }
    finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('toDoItems', JSON.stringify(toDoItems))
  }, [toDoItems])

  const InputHandle = (currName, currDate) => {
    const newToDoData = [...toDoItems, {
      name: currName,
      date: currDate
    }]
    toast.success("Task added Successfully ", setTodoItems(newToDoData));
  }

  const HandleDeleteButton = (todoName) => {
    const newToDoData = toDoItems.filter((item) => item.name !== todoName)
    toast.success("Task Deleted Successfully", setTodoItems(newToDoData));
  }

  return (
    <>
      <div className='Container'>
        <ToDoTitle />
        <hr />
        <ToDoInput onInputHandle={InputHandle} />
        <hr />
        {loading
          ? <p>Loading...</p>
          : (toDoItems.length === 0 ? <ToDoError /> : <ToDoTaskList toDoItems={toDoItems} HandleDeleteButton={HandleDeleteButton} />)}
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  )
}

export default App
