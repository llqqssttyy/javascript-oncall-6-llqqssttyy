import Validate from '../validators/Validate.js';

class WeekOnCall {
  #programmers;

  constructor(input) {
    Validate.weekOnCall(input);
    // this.#programmers = programmers;
  }
}

export default WeekOnCall;
