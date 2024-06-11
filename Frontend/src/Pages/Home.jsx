import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { add, eachDayOfInterval, endOfMonth, endOfWeek, format, getDay, isSameMonth, isToday, parse, startOfToday, startOfWeek } from "date-fns";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Calendar from '../components/Calender';
import BattleCard from '../components/BattleCard';

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
      <div className="grid grid-cols-4 h-screen">
        <Sidebar />

        {/* Right Component */}
        <div className="col-span-3 bg-green-200 h-full px-2 rounded-lg flex flex-col">
          <div className='h-32 w-full my-2 bg-slate-200 flex justify-center items-center'>
            <i className="fa-regular fa-calendar text-7xl pr-2"></i>
            <p className='font-bold text-7xl'>
              All Entries
            </p>
          </div>
          <div className='flex flex-1 w-full my-2 bg-slate-200 overflow-hidden'>
            <div className="p-8 flex flex-col w-full overflow-hidden">
              <Calendar/>
            </div>
            <div className='p-2 m-2 flex flex-col justify-evenly'>
            <BattleCard heading="Journey SO Far" date="5th June"/>
         <BattleCard heading="Love and Lies" date="6th June"/>
         <BattleCard heading="Its Hard" date="7th June"/>
                   </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
