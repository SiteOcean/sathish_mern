import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useRouter } from 'next/router';
import ListingComponents from './listingComponents';
import DropSection from './dropSection';
import WordPressNavbar from './wordPressNavbar';


export default function WordPressClone({children}) {
    const router = useRouter();
  const { id } = router.query; 

    return (
        <DndProvider backend={HTML5Backend}>
            <WordPressNavbar />
            <div className='flex w-full overflow-hidden min-h-[100vh]'>
                {/* Drag section */}
                <div className='w-[20%] bg-gray-200 bg-opacity-45'>
                    <ListingComponents />
                </div>

                {/* Drop section */}
                <div className='w-[80%] bg-red-50'>
                    {children}
                  
                </div>
            </div>
        </DndProvider>
    );
}
