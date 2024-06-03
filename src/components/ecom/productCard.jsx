import Link from "next/link";
import { useState } from "react";
import { MdStar } from "react-icons/md";

const EcomProductCard = ({ product }) => {

    const [readMore, setReadMore] = useState(false)


    return (
        <div className="border shadow-sm border-purple-200 rounded-md space-y-1">
        <img className='h-[200px] w-full rounded-t-md' src={product.image} alt='img'/>
        <div className='p-2'>
        <h1 className='text-gray-500 hidden sm:block font-medium'>{product.title.slice(0,20)}</h1>
        <h1 className='text-gray-500 sm:hidden font-medium'>{product.title.slice(0,12)}</h1>

        <p className='text-[14px] text-gray-500 w-full flex'>{readMore ? product.description : product.description.slice(0,41)+"..."} 
        {/* <span className='text-gray-400 cursor-pointer font-bold ml-1 hidden md:block' onClick={()=>setReadMore(!readMore)}>ReadMore</span> */}
        </p>
        <p className='flex items-center'><MdStar className="text-yellow-400 mr-1 text-[19px]"/> {product.rating.rate}</p>
        <p className="text-gray-500">Price : {product.price}</p>
        <div className="sm:flex space-y-3 mt-1 md:mt-0 items-center justify-between text-white font-bold">
        <Link href={"/app/productCard?id="+product.id} className="border text-center hover:bg-gray-100 duration-300 border-purple-400 w-full text-purple-400 px-2 py-1 rounded">View</Link>
        {/* <button className="border hidden sm:block border-green-400 text-green-400 p-2 rounded">Add To Cart</button> */}

        </div>

        </div>
      </div>
    );
  };
  
  export default EcomProductCard;
  