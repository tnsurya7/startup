import React from 'react';
import { Summary } from '../types';

const SummaryCard: React.FC<{ summary: Summary }> = ({ summary }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Today: ₹{summary.today}</h2>
      <div className="flex justify-around text-lg">
        <div className="flex flex-col">
          <span className="font-semibold">Weekly</span>
          <span>₹{summary.thisWeek}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Monthly</span>
          <span>₹{summary.thisMonth}</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
