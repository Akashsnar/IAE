import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Todaypage = () => {
    const [mood, setMood] = useState('😊');
    const [wokenUpTime, setWokenUpTime] = useState('09:32');
    const [sleptTime, setSleptTime] = useState('22:32');
    const [lastEdited, setLastEdited] = useState('2024-04-05T17:52');
    const [storyworthy, setStoryworthy] = useState('Today was a day. I was getting ready for work, when I stumbled upon my e-diary.');
    const [learnings, setLearnings] = useState('Today was a day. I was getting ready for work, when I stumbled upon my e-diary.');

    const handleMoodChange = (event) => {
        setMood(event.target.value);
    };

    return (
        <div className="grid grid-cols-4 p-4 bg-blend-lighten h-screen">
            <Sidebar />
            <div className="col-span-3 bg-green-200 h-full px-2 rounded-lg flex flex-col">
                <div className="bg-gray-100 p-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Day-to-day Struggle</h1>
                            <div className="flex items-center">
                                <span className="text-yellow-500 text-xl mr-2">{mood}</span>
                                <span className="text-gray-500">12 Feb 17:52</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <span className="font-semibold text-lg">Mood :</span>
                                <select
                                    value={mood}
                                    onChange={handleMoodChange}
                                    className="ml-2 p-2 border rounded"
                                >
                                    <option value="😊">😊</option>
                                    <option value="😞">😞</option>
                                    <option value="😃">😃</option>
                                    <option value="😠">😠</option>
                                </select>
                            </div>

                            <div className="flex items-center mb-2">
                                <span className="font-semibold text-lg">Woken up at:</span>
                                <input
                                    type="time"
                                    value={wokenUpTime}
                                    onChange={(e) => setWokenUpTime(e.target.value)}
                                    className="ml-2 p-2 border rounded"
                                />
                            </div>

                            <div className="flex items-center mb-2">
                                <span className="font-semibold text-lg">Slept at:</span>
                                <input
                                    type="time"
                                    value={sleptTime}
                                    onChange={(e) => setSleptTime(e.target.value)}
                                    className="ml-2 p-2 border rounded"
                                />
                            </div>

                            <div className="flex items-center">
                                <span className="font-semibold text-lg">Last Edited:</span>
                                <input
                                    type="datetime-local"
                                    value={lastEdited}
                                    onChange={(e) => setLastEdited(e.target.value)}
                                    className="ml-2 p-2 border rounded"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">Today's Happenings</h2>
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Storyworthy:</h3>
                                <textarea
                                    className="w-full p-2 border rounded"
                                    rows="5"
                                    value={storyworthy}
                                    onChange={(e) => setStoryworthy(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-1">Learnings and goals:</h3>
                            <textarea
                                className="w-full p-2 border rounded"
                                rows="5"
                                value={learnings}
                                onChange={(e) => setLearnings(e.target.value)}
                            />
                        </div>
                        <Link to="/" className='m-[25rem] bg-green-600 rounded p-2 mt-2'>Save</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todaypage
