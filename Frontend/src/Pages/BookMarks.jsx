import React from 'react';
import Sidebar from '../components/Sidebar';
import BattleCard from '../components/BattleCard';



const Bookmarks = () => {
  return (
    <>
      <div className="grid grid-cols-4 p-4 bg-blend-lighten h-screen">
        <Sidebar />

        {/* Right Component */}
        <div className="col-span-3 bg-green-200 h-full px-2 rounded-lg flex flex-col">
          <div className='h-[8rem] w-full my-2 bg-slate-200 flex justify-center items-center'>
            <p className='font-bold text-7xl '>
              BookMarks
            </p>
          </div>
          <div className='flex-1 w-full my-2 bg-slate-200 flex flex-col items-start'>
          <BattleCard heading="Love and Lies" date="6 th June" />
         <BattleCard heading="Its hard" date="7 th June"/>
          
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookmarks
