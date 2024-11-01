import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WordPressNavbar from '@/components/reactDnd/wordPressNavbar';
import ListingComponents from '@/components/reactDnd/listingComponents';
import DropSection from '@/components/reactDnd/dropSection';


export default function WordPressClone() {
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
                    <DropSection />
                </div>
            </div>
        </DndProvider>
    );
}
