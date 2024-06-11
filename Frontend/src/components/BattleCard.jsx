import React from 'react';

const BattleCard = ({heading,date}) => {
  return (
    <div className="p-4 flex justify-center items-center h-full bg-gray-100">
      <div className="border border-gray-300 rounded-lg p-4 w-full bg-white">
        <div className="flex items-start mb-4">
          <div className="bg-purple-500 text-white rounded-full p-2 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 5v14M8 5v14M3 10h18M3 14h18" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-xl">{heading}</h2>
            <div className="h-0.5 bg-gray-300 my-1"></div>
            <div className="flex items-center">
              <span className="font-bold text-lg mr-2">{date}</span>
              <span className="flex items-center">
                Buddy's Summary <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 text-purple-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.75V19.25M8 4.75H16M4.75 8V16M19.25 8V16" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-700">
          This was the start of your battle against your inner demons.
          Here began a journey of a thousand miles, a journey to conquer yourself.
          A Journey to rid yourself of the habit of procrastination.
        </p>
      </div>
    </div>
  );
};

export default BattleCard;
