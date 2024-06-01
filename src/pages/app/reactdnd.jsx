import React, { useState } from 'react';
import { DndProvider, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Box from '../../components/use_drag';
import Link from 'next/link';
import { MdArrowBackIosNew } from 'react-icons/md';

const TodoListDnd = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Drag this Box 1' },
    { id: 2, text: 'Drag this Box 2' },
    { id: 3, text: 'Drag this Box 3' },
  ]);
  const [taskTodos, setTaskTodos] = useState([])

  const moveTodo = (item) => {

    setTodos(
        todos.filter((val)=>{
            return val.id != item.item.id
        })
    )
    setTaskTodos([...taskTodos,item.item])
    
  };

  const moveTaskReturn=(item)=>{
    setTaskTodos(
        taskTodos.filter((val)=>{
            return val.id != item.item.id
        })
    )
    setTodos([...todos,item.item])  
  }

  const [, dropTodos] = useDrop({
    accept: 'box2',
    hover(item, monitor) {
        
    },
    drop(item, monitor){
        moveTaskReturn(item);
    }
  });

  const [, dropTaskTodos] = useDrop({
    accept: 'box1',
    hover(item, monitor) {
        
    },
    drop(item, monitor){
        moveTodo(item);
    }
  });

  return (
   <div>
     <nav className="bg-purple-300 text-purple-500 h-[70px] flex gap-x-2 items-center pl-5 sticky top-0">
    <Link href={'/'}> <MdArrowBackIosNew className='text-[30px] text-white'/></Link>
    <h1 className='mb-1 font-bold text-[19px] md:text-[25px] text-white'>React Drag & Drop Project (DND)</h1>
  </nav>
    <div className='min-h-[80vh] flex flex-col items-center justify-center'>
    <h1 className='font-bold text-[25px] text-purple-500 underline underline-offset-2 mb-2'>React Drag & Drop</h1>
      <div className='grid grid-cols-2 w-[90%] md:w-[70%] mx-auto gap-x-3 '>
        <div ref={dropTodos} className='border-2 p-3 rounded space-y-2 relative min-h-[200px]'>
{todos.length === 0 ? <span className='absolute top-[50%] text-purple-500 animate-pulse font-bold left-[40%]'>Drop Here!</span> : null
}          {todos.map((todo, index) => (
            <Box key={todo.id} item={todo} index={index} type={'box1'}/>
          ))}
        </div>
        <div ref={dropTaskTodos} className='border-2 rounded p-3 space-y-2 relative'>
        {taskTodos.length === 0 ? <span className='absolute top-[50%] text-purple-500 animate-pulse font-bold left-[40%]'>Drop Here!</span> : null
}             {taskTodos.map((val,i)=>{
            return <Box key={val.id} item={val} index={i} type={'box2'}/>
          })}
        </div>
      </div>
    </div>
   </div>
  );
};

const TodoListDndWrapper = () => (
  <DndProvider backend={HTML5Backend}>
    <TodoListDnd />
  </DndProvider>
);

export default TodoListDndWrapper;
