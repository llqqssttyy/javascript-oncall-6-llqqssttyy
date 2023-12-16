import { SYMBOLS } from '../../statics/constants.js';
import Validate from '../validators/Validate.js';

class HolidayOnCall {
  #programmers;

  constructor(input) {
    Validate.onCall(input);
    this.#programmers = input.split(SYMBOLS.seperator);
  }

  getAvailableProgrammer(prev) {
    const [cur, next, ...rest] = this.#programmers;

    let availableProgrammer = '';
    if (prev === cur) {
      availableProgrammer = next;
      this.#programmers = [cur, ...rest, next];
    } else {
      availableProgrammer = cur;
      this.#programmers = [next, ...rest, cur];
    }
    return availableProgrammer;
  }
}

export default HolidayOnCall;
