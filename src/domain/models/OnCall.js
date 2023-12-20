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
    const { availableProgrammer, updatedList } = this.#getNextOnCall({
      prev,
      onCallList,
    });

    if (isHoliday) {
      this.#holidayOnCall = updatedList;
    } else {
      this.#weekOnCall = updatedList;
    }

    return availableProgrammer;
  }

  #getNextOnCall({ prev, onCallList }) {
    const [cur, next, ...rest] = onCallList;
    const isContinuos = prev === cur;

    const availableProgrammer = isContinuos ? next : cur;
    const updatedList = isContinuos
      ? [cur, ...rest, next]
      : [next, ...rest, cur];

    return { availableProgrammer, updatedList };
  }
}

export default OnCall;
