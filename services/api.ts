// Fix: Implement a mock API to handle data operations.
import { Bill, BillType, DailyReport, MonthlyReport, Summary, WeeklyReport, ReportDataPoint } from '../types';
import {
  format,
  startOfToday,
  endOfToday,
  subDays,
  eachDayOfInterval,
  parseISO,
  isWithinInterval,
  startOfWeek,
  endOfWeek,
  getWeek,
  getYear,
  startOfMonth,
  endOfMonth,
  getMonth,
  eachWeekOfInterval,
  eachMonthOfInterval,
  subMonths
} from 'date-fns';

const BILLS_STORAGE_KEY = 'transport-app-bills';

const getBills = (): Bill[] => {
  try {
    const billsJson = localStorage.getItem(BILLS_STORAGE_KEY);
    return billsJson ? JSON.parse(billsJson).map((b: any) => ({...b, dateCreated: b.dateCreated})) : [];
  } catch (error) {
    console.error("Failed to parse bills from localStorage", error);
    return [];
  }
};

const saveBills = (bills: Bill[]) => {
  try {
    localStorage.setItem(BILLS_STORAGE_KEY, JSON.stringify(bills));
  } catch (error) {
    console.error("Failed to save bills to localStorage", error);
  }
};

// Simulate async API calls
const simulateApiCall = <T>(data: T, delay = 500): Promise<T> =>
  new Promise(resolve => setTimeout(() => resolve(data), delay));

const addBill = async (type: BillType): Promise<Bill> => {
  const bills = getBills();
  const newBill: Bill = {
    id: crypto.randomUUID(),
    type,
    amount: type === BillType.TRANSPORT ? 100 : 50,
    dateCreated: new Date().toISOString(),
  };
  const updatedBills = [newBill, ...bills];
  saveBills(updatedBills);
  return simulateApiCall(newBill);
};

const updateBill = async (billId: string, updates: Partial<Pick<Bill, 'type' | 'dateCreated'>>): Promise<Bill> => {
  const bills = getBills();
  let billToUpdate = bills.find(b => b.id === billId);

  if (!billToUpdate) {
    throw new Error("Bill not found");
  }

  // Apply updates
  billToUpdate = { ...billToUpdate, ...updates };

  // If type is updated, amount should be updated as well
  if (updates.type) {
    billToUpdate.amount = updates.type === BillType.TRANSPORT ? 100 : 50;
  }

  const updatedBills = bills.map(b => (b.id === billId ? billToUpdate! : b));
  saveBills(updatedBills);
  return simulateApiCall(billToUpdate);
};

const deleteBill = async (billId: string): Promise<void> => {
  const bills = getBills();
  const updatedBills = bills.filter(b => b.id !== billId);
  saveBills(updatedBills);
  return simulateApiCall(undefined, 300);
};


const getSummary = async (): Promise<Summary> => {
  const bills = getBills();
  const summary: Summary = bills.reduce(
    (acc, bill) => {
      acc.totalIncome += bill.amount;
      acc.totalBills += 1;
      if (bill.type === BillType.TRANSPORT) {
        acc.transportIncome += bill.amount;
        acc.transportBills += 1;
      } else {
        acc.parkingIncome += bill.amount;
        acc.parkingBills += 1;
      }
      return acc;
    },
    {
      totalIncome: 0,
      transportIncome: 0,
      parkingIncome: 0,
      totalBills: 0,
      transportBills: 0,
      parkingBills: 0,
    }
  );
  return simulateApiCall(summary);
};

const getDailyReport = async (): Promise<DailyReport> => {
    const allBills = getBills();
    const today = new Date();
    const last7Days = eachDayOfInterval({
        start: subDays(today, 6),
        end: today,
    });

    const chartData: ReportDataPoint[] = last7Days.map(day => {
        const billsOnDay = allBills.filter(bill => format(parseISO(bill.dateCreated), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'));
        const transport = billsOnDay.filter(b => b.type === BillType.TRANSPORT).reduce((sum, b) => sum + b.amount, 0);
        const parking = billsOnDay.filter(b => b.type === BillType.PARKING).reduce((sum, b) => sum + b.amount, 0);
        return {
            name: format(day, 'EEE'), // e.g., 'Mon'
            transport,
            parking,
        };
    });

    const billsToday = allBills
      .filter(bill => isWithinInterval(parseISO(bill.dateCreated), { start: startOfToday(), end: endOfToday() }))
      .sort((a,b) => parseISO(b.dateCreated).getTime() - parseISO(a.dateCreated).getTime());
      
    const transportIncome = billsToday.filter(b => b.type === BillType.TRANSPORT).reduce((sum, b) => sum + b.amount, 0);
    const parkingIncome = billsToday.filter(b => b.type === BillType.PARKING).reduce((sum, b) => sum + b.amount, 0);

    const report: DailyReport = {
        bills: billsToday,
        chartData,
        totalIncome: transportIncome + parkingIncome,
        transportIncome,
        parkingIncome,
    };
    return simulateApiCall(report);
};


const getWeeklyReport = async (): Promise<WeeklyReport> => {
    const allBills = getBills();
    const today = new Date();
    const last4WeeksInterval = {
        start: startOfWeek(subMonths(today, 1), { weekStartsOn: 1 }),
        end: endOfWeek(today, { weekStartsOn: 1 }),
    };

    const weeks = eachWeekOfInterval(last4WeeksInterval, { weekStartsOn: 1 }); // Monday start

    const chartData = weeks.map(weekStart => {
        const weekEnd = endOfWeek(weekStart, { weekStartsOn: 1 });
        const billsInWeek = allBills.filter(bill => isWithinInterval(parseISO(bill.dateCreated), { start: weekStart, end: weekEnd }));
        const transport = billsInWeek.filter(b => b.type === BillType.TRANSPORT).reduce((sum, b) => sum + b.amount, 0);
        const parking = billsInWeek.filter(b => b.type === BillType.PARKING).reduce((sum, b) => sum + b.amount, 0);
        return {
            name: `W${getWeek(weekStart, { weekStartsOn: 1 })}`,
            transport,
            parking
        };
    });

    const billsGroupedByWeek = allBills.reduce((acc, bill) => {
        const date = parseISO(bill.dateCreated);
        const weekKey = `Week ${getWeek(date, { weekStartsOn: 1 })}, ${getYear(date)}`;
        if (!acc[weekKey]) {
            acc[weekKey] = [];
        }
        acc[weekKey].push(bill);
        return acc;
    }, {} as Record<string, Bill[]>);

    const bills = Object.entries(billsGroupedByWeek).map(([week, bills]) => ({ week, bills: bills.sort((a,b) => parseISO(b.dateCreated).getTime() - parseISO(a.dateCreated).getTime())})).sort((a,b) => {
        // Sort groups by the date of the newest bill in each group
        return parseISO(b.bills[0].dateCreated).getTime() - parseISO(a.bills[0].dateCreated).getTime();
    });

    return simulateApiCall({ chartData, bills });
};


const getMonthlyReport = async (): Promise<MonthlyReport> => {
    const allBills = getBills();
    const today = new Date();
    const last6MonthsInterval = {
        start: startOfMonth(subMonths(today, 5)),
        end: endOfMonth(today)
    };
    const months = eachMonthOfInterval(last6MonthsInterval);

    const chartData = months.map(monthStart => {
        const monthEnd = endOfMonth(monthStart);
        const billsInMonth = allBills.filter(bill => isWithinInterval(parseISO(bill.dateCreated), { start: monthStart, end: monthEnd }));

        const transport = billsInMonth.filter(b => b.type === BillType.TRANSPORT).reduce((sum, b) => sum + b.amount, 0);
        const parking = billsInMonth.filter(b => b.type === BillType.PARKING).reduce((sum, b) => sum + b.amount, 0);
        return {
            name: format(monthStart, 'MMM'), // e.g., 'Jan'
            transport,
            parking
        };
    });

    const billsGroupedByMonth = allBills.reduce((acc, bill) => {
        const monthKey = format(parseISO(bill.dateCreated), 'MMMM yyyy');
        if (!acc[monthKey]) {
            acc[monthKey] = [];
        }
        acc[monthKey].push(bill);
        return acc;
    }, {} as Record<string, Bill[]>);
    
    const bills = Object.entries(billsGroupedByMonth).map(([month, bills]) => ({ month, bills: bills.sort((a,b) => parseISO(b.dateCreated).getTime() - parseISO(a.dateCreated).getTime())})).sort((a,b) => {
        // Sort groups by the date of the newest bill in each group
        return parseISO(b.bills[0].dateCreated).getTime() - parseISO(a.bills[0].dateCreated).getTime();
    });

    return simulateApiCall({ chartData, bills });
};


export const api = {
  addBill,
  updateBill,
  deleteBill,
  getSummary,
  getDailyReport,
  getWeeklyReport,
  getMonthlyReport,
};