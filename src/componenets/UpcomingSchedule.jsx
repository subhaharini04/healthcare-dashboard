import React from 'react';
import { schedule, Schedule2 } from '../data/schedule';

export const UpcomingSchedule = () => {
    return (
        <div>
            <h1 className='text-blue-900 text-2xl font-bold'>The Upcoming Schedule</h1>
            <div className='mt-3'>
                <p className='text-gray-400'>On Thurshday</p>
                <div className="mt-2 flex space-x-4">
                    {schedule.map((upcoming, i) => (
                        <div key={i} className="px-5 py-2 rounded-2xl bg-blue-100 text-blue-900">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold">{upcoming.title}</h3>
                                <img src={upcoming.icon} alt="icon" className="w-8 h-8 mx-4" />
                            </div>
                            <p>{upcoming.time}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-3'>
                <p className='text-gray-400'>On Saturday</p>
                <div className="mt-2 flex space-x-4">
                    {Schedule2.map((upcoming, i) => (
                        <div key={i} className="px-5 py-2 rounded-2xl bg-blue-100 text-blue-900">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold">{upcoming.title}</h3>
                                <img src={upcoming.icon} alt="icon" className="w-8 h-8 mx-4" />
                            </div>
                            <p >{upcoming.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
