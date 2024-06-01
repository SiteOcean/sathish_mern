import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onButtonBlur=()=>{
    setTimeout(() => {
      setIsOpen(false)
    }, 500);
  }

  return (
    <nav className="bg-purple-200 text-purple-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex w-full items-center justify-between">
            <div className="">
              <Link href="/" className="text-purple-600 text-xl font-bold uppercase">
                MERN Portfolio
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link  href="#" className="text-purple-600 hover:bg-purple-400 duration-150 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                
                    About
                
                </Link>
                <Link href="#education" className="text-purple-600 hover:bg-purple-400 duration-150 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  
                  Education
                  
                  </Link>
                <Link href="#skills" className="text-purple-600 hover:bg-purple-400 duration-150 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  
                    Skills
                  
                </Link>
                <Link href="#experiences" className="text-purple-600 hover:bg-purple-400 duration-150 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  
                Experiences
                  
                  </Link>
                <Link href="#projects" className="text-purple-600 hover:bg-purple-400 duration-150 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                 
                    Projects
                
                </Link>

                <Link href="#contact" className="text-purple-600 hover:bg-purple-400 duration-150 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                 
                 Contact
             
             </Link>
               
              </div>
            </div>
            {/* <Image src={'next.svg'} className='bg-[gray]' alt='img' width={100} height={100}/> */}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onBlur={onButtonBlur}
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-ptext-purple-400 duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        
          <Link  href="#" className="text-purple-700 hover:bg-ptext-purple-400 duration-150 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                
                About
            
            </Link>
            <Link href="#education" className="text-purple-500 hover:bg-ptext-purple-400 duration-150 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              
              Education
              
              </Link>
            <Link href="#skills" className="text-purple-500 hover:bg-ptext-purple-400 duration-150 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              
                Skills
              
            </Link>
            <Link href="#experiences" className="text-purple-500 hover:bg-ptext-purple-400 duration-150 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              
            Experiences
              
              </Link>
            <Link href="#projects" className="text-purple-500 hover:bg-ptext-purple-400 duration-150 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
             
                Projects
            
            </Link>
        
        </div>
      </div>
    </nav>
  );
}
