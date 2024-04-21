import React from 'react'
import Sidebar from '../components/Sidebar'


const BuddysCorner = () => {
  return (
  <>
  <div className="grid grid-cols-4 p-4 bg-blend-lighten h-screen">
      <Sidebar/>

      {/* Right Component */}
      <div className="col-span-3 bg-green-200 h-full px-2 rounded-lg flex flex-col">
      <div className='h-1/6 w-full my-2 bg-slate-200 flex justify-center items-center'>
          <p className='font-bold text-7xl '>
            Buddys Corner
          </p>
        </div>
        <div className='flex-1 w-full my-2 bg-slate-200'>
          Down
        </div>
      </div>
    </div>

  </>
  )
}

export default BuddysCorner