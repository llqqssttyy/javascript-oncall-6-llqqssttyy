import { SYMBOLS } from '../../statics/constants.js';
import Validate from '../validators/Validate.js';

class WeekOnCall {
  #programmers;

  constructor(input) {
    Validate.onCall(input);
    this.#programmers = input.split(SYMBOLS.seperator);

    console.log('week', this.#programmers);
  }
}

export default WeekOnCall;
