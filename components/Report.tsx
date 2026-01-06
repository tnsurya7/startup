import React from 'react';
import { ReportDataPoint } from '../types';

interface Props {
  data: ReportDataPoint[];
  title: string;
}

const Report: React.FC<Props> = ({ data, title }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow active:scale-95 transition"
        >
          Print
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Date</th>
            <th className="border p-2 text-right">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border p-2">{row.label}</td>
              <td className="border p-2 text-right">₹{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
