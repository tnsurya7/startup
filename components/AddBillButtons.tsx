import React from 'react';
import { addBill } from '../services/api';
import { BillType } from '../types';

const AddBillButtons: React.FC<{ onAdded?: () => void }> = ({ onAdded }) => {
  const handleAdd = async (type: BillType) => {
    await addBill(type);
    if (onAdded) onAdded();
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <button
        className="w-full py-6 text-2xl bg-green-600 text-white rounded-xl shadow-lg active:scale-95 transition"
        onClick={() => handleAdd(BillType.TRANSPORT)}
      >
        + Transport ₹100
      </button>
      <button
        className="w-full py-6 text-2xl bg-blue-600 text-white rounded-xl shadow-lg active:scale-95 transition"
        onClick={() => handleAdd(BillType.PARKING)}
      >
        + Parking ₹50
      </button>
    </div>
  );
};

export default AddBillButtons;
