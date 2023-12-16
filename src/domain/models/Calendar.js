import { SYMBOLS } from '../../statics/constants.js';
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
    this.#month = month;
    this.#startDay = startDay;
  }
}

export default Calendar;
