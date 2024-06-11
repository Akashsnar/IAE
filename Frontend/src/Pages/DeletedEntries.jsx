import React from 'react'
import Sidebar from '../components/Sidebar'

const deletedEntries = [
  {
    id: 1,
    date: '5th',
    title: "Lost Thoughts",
    summary: "These were the musings I had on a lonely night, contemplating the vastness of the universe and my place in it."
  },
  {
    id: 2,
    date: '10th',
    title: "A Forgotten Dream",
    summary: "This entry was about a dream I once had, vivid and strange, that slowly faded away with the morning light."
  },
  {
    id: 3,
    date: '22nd',
    title: "The Road Not Taken",
    summary: "Reflections on choices I didn't make and paths I didn't walk down. A meditative entry on what could have been."
  }
  // Add more deleted entries as necessary
]

const DeletedEntries = () => {
  return (
    <div className="grid grid-cols-4 p-4 bg-blend-lighten h-screen">
      <Sidebar />
      <div className="col-span-3 h-full px-2 rounded-lg flex flex-col">
        <div className="p-6 bg-white rounded-lg shadow-md w-full">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <span role="img" aria-label="Deleted" className='text-red-500 text-4xl mr-2'>🗑️</span>
            Deleted Entries
          </h2>
          <div className="flex items-center mb-4">
            <label className="text-xl font-semibold mr-2">Sort By Month:</label>
            <select className="bg-yellow-200 rounded px-2 py-1 text-xl font-semibold">
              <option>June</option>
              {/* Add more months as options */}
            </select>
          </div>
          {deletedEntries.map(entry => (
            <div key={entry.id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-red-500 text-3xl mr-2">🗑️</span>
                <div>
                  <h3 className="text-xl font-bold">{entry.title}</h3>
                  <p className="text-sm font-semibold">{entry.date}</p>
                </div>
              </div>
              <p><strong>Buddy's Reflection</strong> 🧠</p>
              <p>{entry.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DeletedEntries
