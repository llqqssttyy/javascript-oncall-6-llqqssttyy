import { FIRST_ELEMENT, LAST_ELEMENT } from './constants.js';

export const MONTHS = [
  { month: 1, endDate: 31, holidays: [1] },
  { month: 2, endDate: 28 },
  { month: 3, endDate: 31, holidays: [1] },
  { month: 4, endDate: 30 },
  { month: 5, endDate: 31, holidays: [5] },
  { month: 6, endDate: 30, holidays: [6] },
  { month: 7, endDate: 31 },
  { month: 8, endDate: 31, holidays: [15] },
  { month: 9, endDate: 30 },
  { month: 10, endDate: 31, holidays: [3, 9] },
  { month: 11, endDate: 30 },
  { month: 12, endDate: 31, holidays: [25] },
];

export const START_MONTH = MONTHS.at(FIRST_ELEMENT).month;
export const LAST_MONTH = MONTHS.at(LAST_ELEMENT).month;

export const DAYS = ['월', '화', '수', '목', '금', '토', '일'];
