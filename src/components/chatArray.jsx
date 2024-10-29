import React, { useState } from 'react';
import { FaRegComment } from 'react-icons/fa';
import { BiCheckDouble } from "react-icons/bi";

export default function ChatArray (){

    const [chats, setChats] = useState([{id:1, message:"one"},{id:2, message:"two"}])
    const [userOne, setUserOne] = useState('')
    const [userTwo, setUserTwo] = useState('')

    const handleUserOneMessage = (e) => {
        e.preventDefault();
        if(userOne.length < 1) return;
        // Get the current date and time
        const now = new Date();
        
        // Format the date and time in 12-hour format
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true 
        };
        const dateTimeString = now.toLocaleString('en-US', options);
    
        // Split the date and time
        const [date, time] = dateTimeString.split(", ");
    
        // Update the chats state with the new message
        setChats((prev) => [
            ...prev,
            {
                id: 1,
                message: userOne,
                date: date,
                time: time
            }
        ]);
    
        // Clear the input field after sending the message
        setUserOne('');
    };
    
    // Repeat similar logic for User Two's message handling function
    const handleUserTwoMessage = (e) => {
        e.preventDefault();
        if(userTwo.length < 1) return;
        // Get the current date and time
        const now = new Date();
        
        // Format the date and time in 12-hour format
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true 
        };
        const dateTimeString = now.toLocaleString('en-US', options);
        
        // Split the date and time
        const [date, time] = dateTimeString.split(", ");
    
        // Update the chats state with the new message
        setChats((prev) => [
            ...prev,
            {
                id: 2,
                message: userTwo,
                date: date,
                time: time
            }
        ]);
    
        // Clear the input field after sending the message
        setUserTwo('');
    };
    

    return(

        <div className="p-6  mx-auto  shadow-lg rounded-lg">
        <div className="flex gap-x-6">
          {/* User One Chat Section */}
          <div className="flex-1 p-4 rounded-lg border border-gray-300 bg-gray-50 shadow-inner">
            <h1 className="flex items-center font-bold text-xl mb-4">
              <FaRegComment className="mr-2 text-blue-500" />
              User 1
            </h1>
            {chats && chats.length > 0 ? (
                    chats.map((val) => (
                        <div key={val.id} className={`p-2 mb-2 rounded-md flex flex-col ${val.id === 2 ? 'bg-blue-200 items-start' : 'bg-gray-200 items-end'}`}>
                            <p>{val.message}</p>
                            <p className="text-[10px] text-gray-500 flex items-center gap-x-1"><span>{val.date} at {val.time}</span> <span>{val.id != 2 && <BiCheckDouble className='text-[12px] text-[blue]'/>}</span> </p>
                           
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No messages yet.</p>
                )}
            <form onSubmit={handleUserOneMessage} className="mt-4 flex">
              <input
                className="border border-gray-300 p-2 rounded-l-md flex-grow outline-slate-400"
                type="text"
                placeholder="Type your message..."
                onChange={(e) => setUserOne(e.target.value)}
                value={userOne}
              />
              <button className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">Send</button>
            </form>
          </div>
  
          {/* User Two Chat Section */}
          <div className="flex-1 p-4 rounded-lg border border-gray-300  shadow-inner">
            <h1 className="flex items-center font-bold text-xl mb-4">
              <FaRegComment className="mr-2 text-blue-500" />
              User 2
            </h1>
            {chats && chats.length > 0 ? (
                        chats.map((val) => (
                            <div key={val.id} className={`p-2 mb-2 rounded-md flex flex-col ${val.id === 1 ? 'bg-blue-200 items-start' : 'bg-gray-200 items-end'}`}>
                            <p>{val.message}</p>
                            <p className="text-[10px] text-gray-500 flex items-center gap-x-1"><span>{val.date} at {val.time}</span> <span>{val.id != 1 && <BiCheckDouble className='text-[12px] text-[blue]'/>}</span> </p>
                           
                        </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No messages yet.</p>
                    )}
            <form onSubmit={handleUserTwoMessage} className="mt-4 flex">
              <input
                className="border border-gray-300 p-2 rounded-l-md flex-grow outline-slate-400"
                type="text"
                placeholder="Type your message..."
                onChange={(e) => setUserTwo(e.target.value)}
                value={userTwo}
              />
              <button className="bg-green-500 text-white p-2 rounded-r-md hover:bg-green-600">Send</button>
            </form>
          </div>
        </div>
      </div>

    )

}