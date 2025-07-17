import React from 'react'
import { MdDeleteForever } from "react-icons/md";


function TodoListComponent({todoList, setTodoList}) {

  function deleteTask(id) { 
    let newArray = todoList.filter((task) => task.id!== id)

    setTodoList(newArray)
  }


  return (

    <div className='p-[20px]'>
      {todoList.length > 0 ? todoList.map((task)=> {
        return <div key={task.id} className='container mx-auto bg-slate-400 rounded-xl flex justify-between items-center p-[20px] m-[30px] '>
          <p className='text-[30px] text-white'>{task.title}</p>
          <button onClick={() => deleteTask(task.id)}><MdDeleteForever size={32} color='white' className='cursor-pointer' /></button>
        </div>
       }) : <h1 className='text-center text-[30px] text-green-600'>Unesite svoje zadatke!</h1>}
    </div> 

  )

}

export default TodoListComponent
