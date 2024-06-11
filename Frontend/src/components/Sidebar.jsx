import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div className="col-span-1 bg-blue-200 h-full mx-2 rounded-lg relative">
        <div className='flex items-center justify-center '>
          <div className="flex items-center justify-center w-12 h-12 bg-gray-200 mx-2 rounded-full">
            <div className="text-gray-800 text-3xl font-bold">+</div>
          </div>
          <div>
            <div className='py-2 w-full px-2 mx-2'>
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
          </div>
        </div>

      <div className="flex flex-col px-3">
        <Link to='/'>
          <div className='hover:bg-purple-200 cursor-pointer p-2 w-full bg-purple-100 my-2 rounded-lg flex items-center'>
            <span role="img" aria-label="All Entries" className='text-2xl mr-2'>📚</span>
            <p className='font-semibold text-xl'>All Entries</p>
          </div>
        </Link>
        <Link to='/bookmarks'>
          <div className='hover:bg-purple-200 cursor-pointer p-2 w-full bg-purple-100 my-2 rounded-lg flex items-center'>
            <span role="img" aria-label="Bookmarks" className='text-2xl mr-2'>🔖</span>
            <p className='font-semibold text-xl'>Bookmarked Entries</p>
          </div>
        </Link>
       
      </div>

      <div className="border-b-2 border-gray-300 mx-2 my-4"></div>



        <div className='flex flex-col w-6/8 px-3 '>
          <p className=' text-2xl '>
            Recent
          </p>
          <Link to="/journey">
          <div className=' cursor-pointer  p-2  w-full my-2 rounded-lg' >
            <p className='font-semibold text-center text-2xl'>My Journey So Far</p>
          </div>
          </Link>
          <Link to="/love">
          <div className=' cursor-pointer  p-2  w-full my-2 rounded-lg' >
            <p className='font-semibold text-center text-2xl'>Love and Lies</p>
          </div>
          </Link>
          <Link to="/hard">
          <div className=' cursor-pointer  p-2  w-full my-2 rounded-lg' >
            <p className='font-semibold text-center text-2xl'>Its Hard</p>
          </div>
          </Link>
        </div>


        <div className='flex absolute bottom-0'>
        <Link to='/buddycorner'>
        <div className='hover:bg-purple-200 cursor-pointer p-2 m-2  bg-purple-100 my-2 rounded-lg flex items-center'>
          <span role="img" aria-label="Buddy's Corner" className='text-2xl mr-2'>👥</span>
          <p className='font-semibold text-xl'>Buddy's Wink</p>
        </div>
      </Link>
              <div  className='m-2 p-2 w-1/4  bg-slate-100 rounded-full'>
                    Login
              </div>
        </div>
      </div>

     
    </div>
  )
}

export default Sidebar
