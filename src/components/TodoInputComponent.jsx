import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function TodoInputComponent({ todoList, setTodoList }) {
  const [currentInput, setCurrentInput] = useState("");

  function handleValue() {
    if (currentInput) {
      setTodoList([
        ...todoList,
        { title: currentInput, id: new Date().getTime() },
      ]);
      toast.success('Uspjesno ste unjeli zadatak!')
      setCurrentInput("");
    } else {
      toast.warn("Unesite Zadatak!!!!");
    }
  }
  function handleInput(event) {
    setCurrentInput(event.target.value);
  }

  return (
    <div className="flex mx-auto items-center justify-center py-[20px] gap-[20px]">
      <input
        type="text"
        placeholder="Unesite zadatak"
        className="text-[20px] px-[20px] py-[10px] border-1 border-slate-500 rounded-xl"
        value={currentInput}
        onChange={(event) => handleInput(event)}
      />
      <button
        className="px-[20px] py-[10px] text-[20px] bg-green-600 text-white rounded-xl"
        onClick={handleValue}
      >
        Add Task
      </button>
      <ToastContainer autoClose={1000}/>

    </div>
  );
}
export default TodoInputComponent;
