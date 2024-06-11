import React from 'react';
// import Tooltip from '@reach/tooltip';
// import '@reach/tooltip/styles.css'; // Make sure to include tooltip styles
import Tooltip from '@mui/material/Tooltip';

const Calendar = () => {
    const highlightedDates = [ 5, 6, 7];
    const tooltipText = [ "Jorney So Far","Love and Lies", "Its Hard"];
  
    const renderDays = () => {
      const daysInMonth = 30;
      const daysArray = [];
      const startDay = 1; // Assuming the month starts on Monday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  
      // Fill the first row to align with the start day of the month
      for (let i = 0; i < startDay; i++) {
        daysArray.push(<div key={`empty-${i}`} className="w-full h-10"></div>);
      }
  
      for (let i = 1; i <= daysInMonth; i++) {
        const isHighlighted = highlightedDates.includes(i);
        daysArray.push(
          <Tooltip title={isHighlighted ? tooltipText[i-5] : ''} key={i}>
            
            <div
              className={`w-full h-10 flex items-center justify-center rounded-full cursor-pointer ${
                isHighlighted ? 'bg-pink-500 text-white' : 'text-gray-700'
              }`}
            >
              {i}
            </div>
          </Tooltip>
        );
      }
  
      return daysArray;
    };
  
    return (
      <div className="h-full  p-4 flex flex-col items-center  bg-gray-100">
        <div className="flex justify-between items-center mb-4 w-full px-6">
          <button className="text-gray-700">&lt;</button>
          <div className="text-lg font-semibold">
            June <span className="text-gray-500">2024</span>
          </div>
          <button className="text-gray-700">&gt;</button>
        </div>
        <div className="w-full px-6">
          <div className="grid grid-cols-7 gap-2 text-center text-gray-500 mb-2 font-bold text-lg">
            <div className="w-full">M</div>
            <div className="w-full">T</div>
            <div className="w-full">W</div>
            <div className="w-full">T</div>
            <div className="w-full">F</div>
            <div className="w-full">S</div>
            <div className="w-full">S</div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {renderDays()}
          </div>
        </div>
      </div>
    );
  };
  
  export default Calendar;