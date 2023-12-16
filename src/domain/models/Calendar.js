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
        console.log(date, this.#startDay, ((date + this.#startDay) % 7) - 1);
        return {
          date: date,
          day: DAYS[(date + this.#startDay - 1) % 7],
          isWeek: this.#isWeek(date),
          isHoliday: this.#isHoliday(date),
        };
      }),
    };
  }

  #isHoliday(date) {
    const curDayIdx = (date + this.#startDay - 1) % 7;
    if (curDayIdx === 5 || curDayIdx === 6) return true;
    if (this.#holidays.includes(date)) return true;

    return false;
  }

  #isWeek(date) {
    const curDayIdx = (date + this.#startDay - 1) % 7;
    if (curDayIdx === 5 || curDayIdx === 6) return false;
    return true;
  }
}

export default Calendar;
