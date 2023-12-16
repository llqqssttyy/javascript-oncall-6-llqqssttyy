import Calendar from '../domain/models/Calendar.js';
import OnCall from '../domain/models/OnCall.js';
import { LAST } from '../statics/constants.js';

class ScheduleService {
  #calendar;

  #onCall;

  #onCallList = [];

  constructor() {
    this.#onCall = new OnCall();
  }

  setDate(input) {
    this.#calendar = new Calendar(input);
  }

  setWeekOnCall(input) {
    this.#onCall.setWeekOnCall(input);
  }

  setHolidayOnCall(input) {
    this.#onCall.setHolidayOnCall(input);
  }

  calcOnCallList() {
    const { month, dates } = this.#calendar.monthlyInfo;

    this.#onCallList = dates.reduce((list, dateInfo) => {
      const { isHoliday, isWeek, day, date } = dateInfo;

      const prev = list.length !== 0 ? list.at(LAST).programmer : '';
      const programmer = this.#onCall.getAvailableProgrammer({
        isHoliday,
        prev,
      });

      list.push({ month, date, isHoliday, isWeek, day, programmer });
      return list;
    }, this.#onCallList);
  }

  get onCallList() {
    return this.#onCallList;
  }
}

export default ScheduleService;
