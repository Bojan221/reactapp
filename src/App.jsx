import { useState,useEffect } from 'react';
import TodoInputComponent from './components/TodoInputComponent'
import TodoListComponent from './components/TodoListComponent'

function App() {

const[todoList, setTodoList] = useState([]);

  return (
    <>
    <h1 className="text-center text-green-600 text-[45px] py-[20px] font-extrabold">TODO APP</h1>
    <TodoInputComponent todoList={todoList} setTodoList={setTodoList}/>
    <TodoListComponent todoList={todoList} setTodoList={setTodoList}/>    
    </>
  )
}

export default App
