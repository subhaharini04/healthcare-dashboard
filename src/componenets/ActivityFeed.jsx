import React from 'react';
import { activity } from '../data/activity';

export const ActivityFeed = () => {

  return (
        <div className="mt-5 p-6 pl-10 ">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-blue-900">Activity</h3>
        <p className="text-sm text-gray-400">3 appointments on this week</p>
      </div>

      <div className="flex justify-between items-end h-40">
        {activity.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <div className="flex items-end gap-1">
              {item.bars.map((bar, i) => (
                <div key={i} className={`w-1 rounded-sm ${bar}`}></div>
              ))}
            </div>
            <span className="text-xs text-gray-500 mt-1">{item.day}</span>
          </div>
        ))}
      </div>
    </div>

  );
};
