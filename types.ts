// Fix: Define the data structures and enums used throughout the application.
export enum BillType {
  TRANSPORT = 'TRANSPORT',
  PARKING = 'PARKING',
}

export interface Bill {
  id: string;
  type: BillType;
  amount: number;
  dateCreated: string; // ISO string
}

export interface ReportDataPoint {
  name: string;
  transport: number;
  parking: number;
}

export interface DailyReport {
  bills: Bill[];
  chartData: ReportDataPoint[];
  totalIncome: number;
  transportIncome: number;
  parkingIncome: number;
}

export interface WeeklyReport {
  bills: { week: string; bills: Bill[] }[];
  chartData: ReportDataPoint[];
}

export interface MonthlyReport {
  bills: { month: string; bills: Bill[] }[];
  chartData: ReportDataPoint[];
}

export interface Summary {
  totalIncome: number;
  transportIncome: number;
  parkingIncome: number;
  totalBills: number;
  transportBills: number;
  parkingBills: number;
}
