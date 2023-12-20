import Validate from '../validators/Validate.js';

import { SYMBOLS } from '../../statics/constants.js';
import { DAYS, MONTHS } from '../../statics/months.js';

class Calendar {
  #month;

  #startDay;

  #endDate;

  #holidays;

  constructor(input) {
    Validate.date(input);

    const [month, startDay] = input.split(SYMBOLS.seperator);

    this.#month = Number(month);
    this.#endDate = Calendar.findEndDate(this.#month);
    this.#holidays = Calendar.findHolidays(this.#month);
    this.#startDay = Calendar.findStartDayIdx(startDay);
  }

  static findEndDate(month) {
    return MONTHS.find((mObj) => mObj.month === month).endDate;
  }

  static findHolidays(month) {
    return MONTHS.find((mObj) => mObj.month === month).holidays ?? [];
  }

  static findStartDayIdx(startDay) {
    return DAYS.indexOf(startDay);
  }

  get monthlyInfo() {
    return {
      month: this.#month,
      dates: this.#getDates(),
    };
  }

  get month() {
    return this.#month;
  }

  #getDates() {
    return Array.from({ length: this.#endDate }, (_, index) => {
      const date = index + 1;
      const curDayIdx = (date + this.#startDay - 1) % 7;
      return {
        date,
        day: DAYS[curDayIdx],
        isWeek: this.#isWeek(curDayIdx),
        isHoliday: this.#isHoliday(date, curDayIdx),
      };
    });
  }

  #isWeek(curDayIdx) {
    if (curDayIdx === 5 || curDayIdx === 6) return false;
    return true;
  }

  #isHoliday(date, curDayIdx) {
    if (curDayIdx === 5 || curDayIdx === 6) return true;
    if (this.#holidays.includes(date)) return true;

    return false;
  }
}

export default Calendar;
