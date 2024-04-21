import React from 'react';

function App() {
  return (
    <div className="grid grid-cols-4 p-4 bg-blend-lighten h-screen">
      {/* Left Component */}
      <div className="col-span-1 bg-blue-200 h-full mx-2 rounded-lg">
        <div className='p-2'>
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-full border border-gray-300 bg-white">
              <input
                type="text"
                className="w-full py-2 pl-8 pr-4 rounded-full focus:outline-none"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6" />
                  <path d="M21 21l-6-6" />
                  <path d="M21 21l-6-6" />
                  <path d="M21 21l-6-6" />
                  <circle cx="10" cy="10" r="8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
            <div >
                  
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
      </div>

      {/* Right Component */}
      <div className="col-span-3 bg-green-200 h-full px-2 rounded-lg flex flex-col">
        <div className='h-1/6 w-full my-2 bg-slate-200 flex justify-center items-center'>
          <p className='font-bold text-7xl '>
            All Entries
          </p>
        </div>
        <div className='flex-1 w-full my-2 bg-slate-200'>
          Down
        </div>
      </div>
    </div>

  );
}

export default App;