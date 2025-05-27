import React from 'react';
import { healthCards } from '../data/healthData';
const colorClasses = {
  red: 'bg-red-500',
  orange: 'bg-orange-500',
  green: 'bg-green-500',
};
export const HealthSectionCards = () => {
  return (
    <div className="space-y-4">
      {healthCards.map((card, index) => (
        <div
          key={index}
          className={`p-4 rounded-md shadow  `}
        >
          <div className="flex items-center mb-2 gap-2">
            <img src={card.icon} alt={card.part} className='w-10 h-10' />
            <h3 className="font-bold">{card.part}</h3>
          </div>
          
          <p className="text-sm text-gray-600">Date: {card.date}</p>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
            <div
              className={`h-full rounded-full ${colorClasses[card.color]}`}
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};
