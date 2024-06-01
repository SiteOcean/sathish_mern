import { useDrag } from 'react-dnd'
import { TbDragDrop } from "react-icons/tb";
const Boxs = ({item, index, type}) =>{

  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { item , index},
     
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    
    }),
  )
  return (
    <div ref={drag} className='border p-3 flex cursor-move justify-between rounded  bg-purple-100 text-gray-500 hover:bg-gray-200 duration-150'>
    {item.text} <TbDragDrop className='animate-pulse'/>
   </div>
   
  )
}

export default Boxs