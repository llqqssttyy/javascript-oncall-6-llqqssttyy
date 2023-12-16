import Validate from '../validators/Validate.js';

import { SYMBOLS } from '../../statics/constants.js';

class OnCall {
  #holidayOnCall;

  #weekOnCall;

  setWeekOnCall(input) {
    Validate.onCall(input);
    this.#weekOnCall = input.split(SYMBOLS.seperator);
  }

  setHolidayOnCall(input) {
    Validate.onCall(input);
    this.#holidayOnCall = input.split(SYMBOLS.seperator);
  }

  getAvailableProgrammer({ isHoliday, prev }) {
    const onCallList = isHoliday ? this.#holidayOnCall : this.#weekOnCall;
    return this.#processOnCallList({ prev, onCallList, isHoliday });
  }

  #processOnCallList({ prev, onCallList, isHoliday }) {
    const [current, next, ...rest] = onCallList;
    const availableProgrammer = prev === current ? next : current;
    const updatedList =
      prev === current ? [current, ...rest, next] : [next, ...rest, current];

    if (isHoliday) {
      this.#holidayOnCall = updatedList;
    } else {
      this.#weekOnCall = updatedList;
    }

    return availableProgrammer;
  }
}

export default OnCall;
