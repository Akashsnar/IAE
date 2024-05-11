import React from 'react';
import Sidebar from '../components/Sidebar';

const BookMarks = () => {
  return (
    <>
      <div className="grid grid-cols-4 p-4 bg-blend-lighten h-screen">
        <Sidebar />

        {/* Right Component */}
        <div className="col-span-3 bg-green-200 h-full px-2 rounded-lg flex flex-col">
          <div className='h-1/6 w-full my-2 bg-slate-200 flex justify-center items-center'>
            <p className='font-bold text-7xl '>
              BookMarks
            </p>
          </div>
          <div className='flex-1 w-full my-2 bg-slate-200 flex flex-col items-start'>

            <form className="flex ml-4 mt-6">
              <label htmlFor="Months" className="w-[200%] block font-medium text-gray-900 text-lg m-auto">Sort by Month: </label>
              <select id="Months" className="rounded-full border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ml-4 bg-[#F4E6A0]">
                <option selected>Months</option>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="March">March</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
              </select>
            </form>

          </div>
        </div>
      </div>

    </>
  );
}

export default BookMarks;
