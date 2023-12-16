import { Console } from '@woowacourse/mission-utils';
import { INPUTS } from '../statics/messages.js';

class InputView {
  async getDate() {
    const date = await Console.readLineAsync(INPUTS.date);
    return date;
  }

  async getWeek() {
    const week = await Console.readLineAsync(INPUTS.week);
    return week;
  }

  async getHoliday() {
    const holiday = await Console.readLineAsync(INPUTS.holiday);
    return holiday;
  }
}

export default InputView;
