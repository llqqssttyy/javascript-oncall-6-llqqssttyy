import { SYMBOLS } from '../../statics/constants.js';
import { DAYS, MONTHS } from '../../statics/months.js';
import Validate from '../validators/Validate.js';

class Calendar {
  #month;

  #startDay;

  #endDate;

  #holidays = [];

  constructor(input) {
    Validate.date(input);

    const [month, startDay] = input.split(SYMBOLS.seperator);
    this.#month = Number(month);
    this.#startDay = DAYS.indexOf(startDay);
    this.#endDate = MONTHS.find(
      (monthObj) => monthObj.month === Number(month),
    ).endDate;
    this.#holidays = MONTHS.find(
      (monthObj) => monthObj.month === Number(month),
    ).holidays;
  }

  get monthlyInfo() {
    const dates = Array.from(
      { length: this.#endDate },
      (_, index) => index + 1,
    );
    return {
      month: this.#month,
      dates: dates.map((date) => {
        const curDayIdx = (date + this.#startDay - 1) % 7;
        return {
          date: date,
          day: DAYS[curDayIdx],
          isWeek: this.#isWeek(curDayIdx),
          isHoliday: this.#isHoliday(date, curDayIdx),
        };
      }),
    };
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
