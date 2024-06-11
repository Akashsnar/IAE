import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="col-span-1 bg-white h-full mx-2 rounded-lg shadow-lg">
      <div className="flex items-center justify-center my-4">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-500 mx-2 rounded-full">
          <Link to="/todaypage" className="text-white text-3xl font-bold">+</Link>
        </div>
        <div className="relative w-full max-w-md mx-2">
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
                <circle cx="10" cy="10" r="8" />
              </svg>
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
        <Link to='/deletedentries'>
          <div className='hover:bg-purple-200 cursor-pointer p-2 w-full bg-purple-100 my-2 rounded-lg flex items-center'>
            <span role="img" aria-label="Deleted Entries" className='text-2xl mr-2'>🗑️</span>
            <p className='font-semibold text-xl'>Deleted Entries</p>
          </div>
        </Link>
      </div>

      <div className="border-b-2 border-gray-300 mx-2 my-4"></div>

      <div className='flex flex-col px-3'>
        <p className='font-semibold text-xl mb-2'>Recent</p>
        <div className='hover:bg-purple-200 cursor-pointer p-2 w-full my-2 rounded-lg flex items-center'>
          <span role="img" aria-label="Day-to-day Struggle" className='text-2xl mr-2'>📅</span>
          <p className='text-lg'>Day-to-day Struggle</p>
        </div>
        <div className='hover:bg-purple-200 cursor-pointer p-2 w-full my-2 rounded-lg flex items-center'>
          <span role="img" aria-label="Hearts Everywhere" className='text-2xl mr-2'>❤️</span>
          <p className='text-lg'>HEARTS EVERYWHERE &lt;3</p>
        </div>
        <div className='hover:bg-purple-200 cursor-pointer p-2 w-full my-2 rounded-lg flex items-center'>
          <span role="img" aria-label="I think I messed up" className='text-2xl mr-2'>😔</span>
          <p className='text-lg'>I think I messed up</p>
        </div>
      </div>

      <Link to='/buddycorner'>
        <div className='hover:bg-purple-200 cursor-pointer p-2 w-full bg-purple-100 my-2 rounded-lg flex items-center'>
          <span role="img" aria-label="Buddy's Corner" className='text-2xl mr-2'>👥</span>
          <p className='font-semibold text-xl'>Buddy's Wink</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
