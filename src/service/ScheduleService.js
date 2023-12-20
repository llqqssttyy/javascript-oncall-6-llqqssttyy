import Calendar from '../domain/models/Calendar.js';
import OnCall from '../domain/models/OnCall.js';

import { LAST_ELEMENT } from '../statics/constants.js';

class ScheduleService {
  #calendar;

  #onCall;

  #onCallList = [];

  constructor() {
    this.#onCall = new OnCall();
  }

  get onCallList() {
    return this.#onCallList;
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
    const { dates, month } = this.#calendar.monthlyInfo;
    this.#onCallList = dates.map((dateInfo) =>
      this.#createDateSchedule(dateInfo, month),
    );
  }

  #createDateSchedule({ isHoliday, isWeek, day, date }, month) {
    const programmer = this.#getProgrammer(isHoliday);

    return { isHoliday, isWeek, day, date, programmer, month };
  }

  #getProgrammer(isHoliday) {
    const prev =
      this.#onCallList.length !== 0
        ? this.#onCallList.at(LAST_ELEMENT).programmer
        : '';

    return this.#onCall.getAvailableProgrammer({ isHoliday, prev });
  }
}

export default ScheduleService;
