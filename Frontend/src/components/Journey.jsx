import React from 'react';
import Sidebar from '../components/Sidebar';

const Journey = () => {
  return (
    <>
      <div className="grid grid-cols-4 p-4 bg-blend-lighten h-screen">
        <Sidebar />

        {/* Right Component */}
        <div className="col-span-3 bg-green-200 h-full px-2 rounded-lg flex flex-col">
          <div className='h-[8rem] w-full my-2 bg-slate-200 flex justify-center items-center'>
            <p className='font-bold text-7xl '>
              My Journey So Far
            </p>
          </div>
          <div className='flex-1 w-full my-2 bg-slate-200 flex flex-col items-start'>
          <div className="p-6 bg-white rounded-md shadow-md h-full mx-auto">
            <div className="flex items-center mb-4">
                <span className="text-lg">Mood: <span role="img" aria-label="sad">😔</span></span>
            </div>
            <div className="text-purple-800 mb-4">
                <p>Woken up at: <span className="font-bold">09:32</span></p>
                <p>Slept at: <span className="font-bold">22:32</span></p>
                <p>Last Edited: <span className="font-bold">5 June 2024 17:52</span></p>
            </div>
            <div className="border-b-2 border-gray-300 mb-4"></div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Today's Happenings</h2>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Storyworthy:</h3>
                    <p className="mb-2">Today was a sad day. I was getting ready for work, when I stumbled upon my e-diary.</p>
                    <p className='mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequatur sed error! Veritatis quis qui, odio molestias maxime sit nesciunt ipsa dicta harum blanditiis placeat quaerat esse error a voluptate?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequatur sed error! Veritatis quis qui, odio molestias maxime sit nesciunt ipsa dicta harum blanditiis placeat quaerat esse error a voluptate?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequatur sed error! Veritatis quis qui, odio molestias maxime sit nesciunt ipsa dicta harum blanditiis placeat quaerat esse error a voluptate?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequatur sed error! Veritatis quis qui, odio molestias maxime sit nesciunt ipsa dicta harum blanditiis placeat quaerat esse error a voluptate?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequatur sed error! Veritatis quis qui, odio molestias maxime sit nesciunt ipsa dicta harum blanditiis placeat quaerat esse error a voluptate?
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Learnings and goals:</h3>
                    <p className="mb-2">Today was a sad day. I was getting ready for work, when I stumbled upon my e-diary.</p>
                    <p className='mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequatur sed error! Veritatis quis qui, odio molestias maxime sit nesciunt ipsa dicta harum blanditiis placeat quaerat esse error a voluptate?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequatur sed error! Veritatis quis qui, odio molestias maxime sit nesciunt ipsa dicta harum blanditiis placeat quaerat esse error a voluptate?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequatur sed error! Veritatis quis qui, odio molestias maxime sit nesciunt ipsa dicta harum blanditiis placeat quaerat esse error a voluptate?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequatur sed error! Veritatis quis qui, odio molestias maxime sit nesciunt ipsa dicta harum blanditiis placeat quaerat esse error a voluptate?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequatur sed error! Veritatis quis qui, odio molestias maxime sit nesciunt ipsa dicta harum blanditiis placeat quaerat esse error a voluptate?
                    </p>
                </div>
            </div>
        </div>   
            

          </div>
        </div>
      </div>

    </>
  );
}

export default Journey;
