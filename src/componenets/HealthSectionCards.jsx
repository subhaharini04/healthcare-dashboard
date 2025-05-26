import React from 'react';
import { healthCards } from '../data/healthData';

const colorClasses = {
  red: 'bg-red-500 text-red-500',
  blue: 'bg-blue-500 text-blue-500',
  green: 'bg-green-500 text-green-500',
};

export const HealthSectionCards = () => {
  return (
    <div className="space-y-4">
      {healthCards.map((card, index) => (
        <div
          key={index}
          className={`p-4 rounded-md shadow  `}
        >
          <h3 className="font-bold">{card.part}</h3>
          <p className="text-sm text-gray-600">Checked: {card.date}</p>
          <p className={`text-${card.color}-500 font-semibold`}>{card.status}</p>
        </div>
      ))}
    </div>
  );
};
