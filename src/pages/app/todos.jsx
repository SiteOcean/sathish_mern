// pages/index.js
import Navbar from '@/components/navbar';
import Link from 'next/link';
import React, { useState } from 'react';

import { MdArrowBackIosNew } from "react-icons/md";

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'First Task', completed: false },
    { id: 2, text: 'Todo App', completed: false },
  ]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        text: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
         <nav className=" h-[70px] flex gap-x-2 items-center pl-5 bg-purple-300 text-purple-600 sticky top-0">
    <Link href={'/'}> <MdArrowBackIosNew className='text-[30px]'/></Link>
    <h1 className='mb-1 font-bold text-[19px] md:text-[25px] '>React Todos Project</h1>
  </nav>
        <div className="w-[90%] md:w-[50%] mx-auto mt-8 border border-gray-200 rounded p-6">
      <h1 className="text-3xl text-gray-400 font-semibold mb-4">Todo List</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          className="border rounded w-[80%] border-gray-300 px-4 py-3 mr-2"
          placeholder="Add Task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="bg-purple-500 w-[20%] hover:bg-purple-600 text-white px-3 py-1 rounded"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={` bg-white shadow-md rounded-md p-4 mb-4 flex justify-between items-center`}
          >
            <span className={`${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}>{todo.text}</span>
           <div className='space-x-3'>
           <button
              className="bg-purple-400 text-white hover:bg-blue-300 px-3 py-1 rounded"
              onClick={() => toggleTodo(todo.id)}
            >
             {todo.completed ? 'Un-Complete' : 'Complete' }
            </button>
            <button
              className="bg-red-400 text-white hover:bg-red-300 px-3 py-1 rounded"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
           </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Todos;
