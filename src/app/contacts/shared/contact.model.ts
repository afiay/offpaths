export interface IContact {
  id: string;
  token: string;
  summary: string;
  message: string;
  idea: string;
  date?: Date;
  name: string;
  gender: Gender;
  email?: string;
  phone?: string;
  country?: string;
  location?: string;
  targetCustomer: string;
  problemSolving: string;
  whyou: string;
  competitor: string;
  employees: number;
  nextYearSells: string;
  investor: string;
  investement: string;
  partners: string;
  goods: string;
  network: string;
  contributors: string;
  salaries: string;
  taxe: number;
  currency: symbol;
}

export enum Gender {
  Male = 'male',
  Female = 'female'
}
