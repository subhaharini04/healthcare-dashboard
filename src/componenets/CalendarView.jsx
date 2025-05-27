import React from 'react';
import { calendarData } from '../data/calendarData';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const CalendarView = () => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-6 px-5">
        <h2 className="text-xl font-bold text-blue-900">{calendarData.month}</h2>
        <div className="flex space-x-2 text-blue-900">
          <FaArrowLeft className="cursor-pointer" />
          <FaArrowRight className="cursor-pointer" />
        </div>
      </div>
      <div className={"grid grid-cols-7 gap-2 text-center text-blue-900"}>
        {calendarData.week.map((day, i) => (
          <div key={i} className="p-2 rounded-md">
            <div className={`font-bold ${day.isToday ? 'bg-blue-100 text-blue-900 rounded-lg' : ''}`}>
              {day.day}<br />{day.date}
            </div>
            <div className={`mt-2 space-y-1 ${day.isToday ? 'bg-blue-100 text-blue-900 rounded-lg' : ''}`}>
              {day.times.map((time, j) => (
                <div
                  key={j}
                  className={`rounded-full px-2 py-1 w-fit mx-auto ${day.highlight === time
                      ? 'bg-blue-900 text-white font-semibold'
                      : 'text-blue-900'
                    }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-2 ">
        {calendarData.appointments.map((appt, i) => (
          <div key={i} className={`px-5 py-4 rounded-2xl ${appt.isToday ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-900'}`}>
            <div className="flex justify-between items-center mb-2">
              <h3 className=" font-bold">{appt.title}</h3>
              <img src={appt.icon} alt="icon" className='w-10 h-10 mx-4'/>
            </div>
            <p >{appt.time}</p>
            <p >{appt.doctor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
