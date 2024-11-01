import React, { useState } from 'react';

const DragDropComponent = () => {
  const [dragData, setDragData] = useState(null); // Data being dragged
  const [droppedData, setDroppedData] = useState([]); // Data received on drop

  // Handle drag start and set the data being dragged
  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', item); // Send data
    setDragData(item); // Store in state
  };

  // Handle drop, prevent default to allow dropping
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text'); // Receive data
    setDroppedData((prev) => [...prev, data]); // Add to dropped list
    setDragData(null); // Clear drag data after drop
  };

  // Prevent default to allow drop
  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-lg font-semibold">Drag and Drop Example</h2>

      {/* Drag Source */}
      <div className="flex gap-4">
        {['Item 1', 'Item 2', 'Item 3'].map((item, idx) => (
          <div
            key={idx}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            className="p-4 bg-blue-200 rounded cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Drop Target */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="p-8 bg-green-100 rounded mt-4 w-1/2 h-40 flex flex-col items-center justify-center"
      >
        <p className="text-center text-gray-600">
          {droppedData.length > 0 ? 'Dropped Items:' : 'Drag items here'}
        </p>
        {droppedData.map((data, idx) => (
          <p key={idx} className="text-gray-800">{data}</p>
        ))}
      </div>
    </div>
  );
};

export default DragDropComponent;
