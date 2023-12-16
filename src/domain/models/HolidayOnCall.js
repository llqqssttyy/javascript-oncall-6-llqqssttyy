import { SYMBOLS } from '../../statics/constants.js';
import Validate from '../validators/Validate.js';

class HolidayOnCall {
  #programmers;

  constructor(input) {
    Validate.onCall(input);
    this.#programmers = input.split(SYMBOLS.seperator);
  }
}

export default HolidayOnCall;
