import React from 'react';
import Sidebar from '../components/Sidebar';

// const BookMarks = () => {
//   return (
//     <>
//       <div className="grid grid-cols-4 p-4 bg-blend-lighten h-screen">
//         <Sidebar />

//         {/* Right Component */}
//         <div className="col-span-3 bg-green-200 h-full px-2 rounded-lg flex flex-col">
//           <div className='h-1/6 w-full my-2 bg-slate-200 flex justify-center items-center'>
//             <p className='font-bold text-7xl '>
//               BookMarks
//             </p>
//           </div>
//           <div className='flex-1 w-full my-2 bg-slate-200 flex flex-col items-start'>

//             <form className="flex ml-4 mt-6">
//               <label htmlFor="Months" className="w-[200%] block font-medium text-gray-900 text-lg m-auto">Sort by Month: </label>
//               <select id="Months" className="rounded-full border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ml-4 bg-[#F4E6A0]">
//                 <option selected>Months</option>
//                 <option value="Jan">Jan</option>
//                 <option value="Feb">Feb</option>
//                 <option value="March">March</option>
//                 <option value="Apr">Apr</option>
//                 <option value="May">May</option>
//                 <option value="June">June</option>
//                 <option value="July">July</option>
//                 <option value="Aug">Aug</option>
//                 <option value="Sep">Sep</option>
//                 <option value="Oct">Oct</option>
//                 <option value="Nov">Nov</option>
//                 <option value="Dec">Dec</option>
//               </select>
//             </form>

//           </div>
//         </div>
//       </div>

//     </>
//   );
// }

// export default BookMarks;

const bookmarks = [
  {
    id: 1,
    date: '13th',
    title: "The Day I went to Battle.",
    summary: "This was the start of your battle against your inner demons. Here began a journey of a thousand miles, a journey to conquer yourself. A Journey to rid yourself of the habit of procrastination."
  }
  // Add more bookmarks as necessary
]

const Bookmarks = () => {
  return (
    <div className="grid grid-cols-4 p-4 bg-blend-lighten h-screen">
      <Sidebar />
      <div className="col-span-3 h-full px-2 rounded-lg flex flex-col">
        <div className="p-6 bg-white rounded-lg shadow-md w-full">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <span role="img" aria-label="Bookmark" className='text-purple-500 text-4xl mr-2'>🔖</span>
            Bookmarks
          </h2>
          <div className="flex items-center mb-4">
            <label className="text-xl font-semibold mr-2">Sort By Month:</label>
            <select className="bg-yellow-200 rounded px-2 py-1 text-xl font-semibold">
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
          </div>
          {bookmarks.map(bookmark => (
            <div key={bookmark.id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-purple-500 text-3xl mr-2">🔖</span>
                <div>
                  <h3 className="text-xl font-bold">{bookmark.title}</h3>
                  <p className="text-sm font-semibold">{bookmark.date}</p>
                </div>
              </div>
              <p><strong>Buddy's Summary</strong> ✨</p>
              <p>{bookmark.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Bookmarks
