import { Console } from '@woowacourse/mission-utils';
import { INPUTS } from '../statics/messages.js';

class InputView {
  async getDate() {
    const date = await Console.readLineAsync(INPUTS.date);
    return date;
  }

  async getWeekOnCall() {
    const week = await Console.readLineAsync(INPUTS.weekOnCall);
    return week;
  }

  async getHolidayOnCall() {
    const holiday = await Console.readLineAsync(INPUTS.holidayOnCall);
    return holiday;
  }
}

export default InputView;
