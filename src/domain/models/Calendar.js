import { SYMBOLS } from '../../statics/constants.js';
import { MONTHS } from '../../statics/months.js';
import Validate from '../validators/Validate.js';

class Calendar {
  #month;

  #startDay;

  #startDate = 1;

  #endDate;

  #holidays = [];

  constructor(input) {
    Validate.date(input);

    const [month, startDay] = input.split(SYMBOLS.seperator);
    this.#month = Number(month);
    this.#startDay = startDay;
    this.#endDate = MONTHS.find(
      (monthObj) => monthObj.month === Number(month),
    ).endDate;
    this.#holidays = MONTHS.find(
      (monthObj) => monthObj.month === Number(month),
    ).holidays;
  }
}

export default Calendar;
