import { SYMBOLS } from '../../statics/constants.js';
import Validate from '../validators/Validate.js';

class WeekOnCall {
  #programmers;

  constructor(input) {
    Validate.onCall(input);
    this.#programmers = input.split(SYMBOLS.seperator);
  }

  /**
   * 이전 근무자를 인자로 받아 근무 가능한 프로그래머를 반환
   * @param {string} prev
   */
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

export default WeekOnCall;
