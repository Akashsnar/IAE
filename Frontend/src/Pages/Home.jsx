import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { add, eachDayOfInterval, endOfMonth, endOfWeek, format, getDay, isSameMonth, isToday, parse, startOfToday, startOfWeek } from "date-fns";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Home = () => {
  const today = startOfToday();
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const colStartClasses = ["", "col-start-2", "col-start-3", "col-start-4", "col-start-5", "col-start-6", "col-start-7"];

  const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
  let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfWeek(endOfMonth(firstDayOfMonth)),
  });

  const getPrevMonth = (event) => {
    event.preventDefault();
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
    setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
  };

  const getNextMonth = (event) => {
    event.preventDefault();
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };

  return (
    <>
      <div className="grid grid-cols-4 p-4 bg-blend-lighten h-screen">
        <Sidebar />

        {/* Right Component */}
        <div className="col-span-3 bg-green-200 h-full px-2 rounded-lg flex flex-col">
          <div className='h-[8rem] w-full my-2 bg-slate-200 flex justify-center items-center'>
          <i class="fa-regular fa-calendar text-7xl pr-2"></i>
            <p className='font-bold text-7xl '>
              All Entries
            </p>
          </div>
          <div className='flex flex-1 w-full my-2 bg-slate-200'>
            <div className="p-8 flex flex-col h-screen w-full">
              <div className="flex items-center justify-between mb-6">
                <p className="font-bold text-xl">{format(firstDayOfMonth, "MMMM yyyy")}</p>
                <div className="flex items-center gap-6 sm:gap-12">
                  <ChevronLeftIcon className="w-6 h-6 cursor-pointer" onClick={getPrevMonth} />
                  <ChevronRightIcon className="w-6 h-6 cursor-pointer" onClick={getNextMonth} />
                </div>
              </div>
              <hr />
              <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
                {days.map((day, idx) => (
                  <div key={idx} className="font-semibold">{capitalizeFirstLetter(day)}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-6 sm:gap-12 mt-8 place-items-center">
                {daysInMonth.map((day, idx) => (
                  <div key={idx} className={colStartClasses[getDay(day)]}>
                    <p
                      className={`cursor-pointer flex items-center justify-center font-semibold h-8 w-8 rounded-full hover:text-white ${isSameMonth(day, today) ? "text-gray-900" : "bg-[#BDBEC4]"} ${!isToday(day) && "hover:bg-blue-500"} ${isToday(day) ? "bg-[#6F0B80] text-white" : ""}`}
                    >
                      {format(day, "d")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/3 p-8 flex flex-col">
              <div className='text-center'>
              <p>Enteries on:</p>
              <h2 className="text-xl font-bold mb-1">{format(firstDayOfMonth, "dd MMMM yyyy")}</h2>
              </div>
              <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Header 1</th>
                    <th className="border px-4 py-2">Header 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Data 1</td>
                    <td className="border px-4 py-2">Data 2</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Data 4</td>
                    <td className="border px-4 py-2">Data 5</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
