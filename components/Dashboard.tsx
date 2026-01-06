// Fix: Create the main Dashboard component to structure the application layout.
import React, { useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';
import { Bill, BillType, Summary } from '../types';
import AddBillButtons from './AddBillButtons';
import Report from './Report';
import SummaryCard from './SummaryCard';
import { CashIcon, DocumentTextIcon, TicketIcon } from './icons';

interface DashboardProps {
  theme: 'light' | 'dark';
}

const Dashboard: React.FC<DashboardProps> = ({ theme }) => {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // This state is to trigger a re-render in the Report component when data changes
  const [reportKey, setReportKey] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      // Don't set loading to true on refetch to avoid UI flicker
      // setLoading(true); 
      setError(null);
      const summaryData = await api.getSummary();
      setSummary(summaryData);
    } catch (err) {
      console.error("Failed to fetch dashboard data", err);
      setError("Failed to load data. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAddBill = async (type: BillType) => {
    try {
      await api.addBill(type);
      // After adding a bill, refresh summary data
      await fetchData();
      // Change key to force Report component to re-fetch its own data
      setReportKey(prevKey => prevKey + 1); 
    } catch (err) {
      console.error(`Failed to add ${type} bill`, err);
      // Optionally show an error to the user
    }
  };
  
  const handleUpdateBill = async (billId: string, updates: Partial<Pick<Bill, 'type' | 'dateCreated'>>) => {
    try {
      await api.updateBill(billId, updates);
      await fetchData();
      setReportKey(prevKey => prevKey + 1);
    } catch (err) {
      console.error(`Failed to update bill`, err);
    }
  };
  
  const handleDeleteBill = async (billId: string) => {
    try {
      await api.deleteBill(billId);
      await fetchData();
      setReportKey(prevKey => prevKey + 1);
    } catch (err) {
      console.error(`Failed to delete bill`, err);
    }
  };

  if (loading && !summary) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg text-gray-500 dark:text-gray-400">Loading dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-10 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-500 rounded-lg">
        <p className="text-red-700 dark:text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="Total Income"
          value={`₹${summary?.totalIncome.toLocaleString('en-IN') ?? '0'}`}
          icon={<CashIcon className="h-6 w-6 text-white" />}
          color="bg-green-500"
          count={summary?.totalBills}
          countLabel="Total Bills"
        />
        <SummaryCard
          title="Transport Income"
          value={`₹${summary?.transportIncome.toLocaleString('en-IN') ?? '0'}`}
          icon={<TicketIcon className="h-6 w-6 text-white" />}
          color="bg-indigo-500"
          count={summary?.transportBills}
          countLabel="Transport Bills"
        />
        <SummaryCard
          title="Parking Income"
          value={`₹${summary?.parkingIncome.toLocaleString('en-IN') ?? '0'}`}
          icon={<DocumentTextIcon className="h-6 w-6 text-white" />}
          color="bg-teal-500"
          count={summary?.parkingBills}
          countLabel="Parking Bills"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <AddBillButtons onAddBill={handleAddBill} />
        </div>
        <div className="lg:col-span-2">
          <Report 
            key={reportKey}
            theme={theme}
            onUpdateBill={handleUpdateBill}
            onDeleteBill={handleDeleteBill}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;