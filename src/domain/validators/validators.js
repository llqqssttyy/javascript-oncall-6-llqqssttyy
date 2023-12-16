import { SYMBOLS } from '../../statics/constants.js';
import { LAST_MONTH, MONTHS, START_MONTH } from '../../statics/months.js';

export const isValidDateForm = (input) => {
  const regex = new RegExp(/^(\d+,[월|화|수|목|금|토|일])$/);
  return regex.test(input);
};

export const isValidMonth = (input) => {
  const [month, _] = input.split(SYMBOLS.seperator);
  return Number(month) >= START_MONTH && Number(month) <= LAST_MONTH;
};

// export const isValidDay = (input) => {
//   const [m, d] = input.split(SYMBOLS.seperator).map((v) => Number(v));
//   return MONTHS.filter(({ month }) => month === m).every(
//     ({ startDate, endDate }) => d >= startDate && d <= endDate,
//   );
// };
