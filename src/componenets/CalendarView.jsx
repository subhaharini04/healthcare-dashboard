import React from 'react';
import { calendarData } from '../data/calendarData';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const CalendarView = () => {
  return (
    <div className="p-6 bg-white rounded-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-blue-900">{calendarData.month}</h2>
        <div className="flex space-x-2 text-blue-900">
          <FaArrowLeft className="cursor-pointer" />
          <FaArrowRight className="cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {calendarData.week.map((day, i) => (
          <div key={i} className="bg-gray-100 p-2 rounded-md">
            <div className={`font-bold ${day.highlight ? 'bg-blue-100 rounded-full py-1' : ''}`}>
              {day.day} {day.date}
            </div>
            <div className="mt-2 space-y-1">
              {day.times.map((time, j) => (
                <div
                  key={j}
                  className={`text-xs rounded-full px-2 py-1 w-fit mx-auto ${
                    day.highlight === time
                      ? 'bg-blue-900 text-white font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex space-x-4">
        {calendarData.appointments.map((appt, i) => (
          <div key={i} className="bg-indigo-100 p-4 rounded-xl flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-blue-900 font-bold">{appt.title}</h3>
              <span className="text-xl">{appt.icon}</span>
            </div>
            <p className="text-sm text-gray-700">{appt.time}</p>
            <p className="text-sm text-gray-600">{appt.doctor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
