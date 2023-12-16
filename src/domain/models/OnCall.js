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
    if (isHoliday) return this.#getAvailableProgrammerInHoliday(prev);
    else return this.#getAvailableProgrammerInWeek(prev);
  }

  #getAvailableProgrammerInHoliday(prev) {
    const [cur, next, ...rest] = this.#holidayOnCall;

    let availableProgrammer = '';
    if (prev === cur) {
      availableProgrammer = next;
      this.#holidayOnCall = [cur, ...rest, next];
    } else {
      availableProgrammer = cur;
      this.#holidayOnCall = [next, ...rest, cur];
    }
    return availableProgrammer;
  }

  #getAvailableProgrammerInWeek(prev) {
    const [cur, next, ...rest] = this.#weekOnCall;

    let availableProgrammer = '';
    if (prev === cur) {
      availableProgrammer = next;
      this.#weekOnCall = [cur, ...rest, next];
    } else {
      availableProgrammer = cur;
      this.#weekOnCall = [next, ...rest, cur];
    }
    return availableProgrammer;
  }
}

export default OnCall;
