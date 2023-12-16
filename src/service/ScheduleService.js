import Calendar from '../domain/models/Calendar.js';
import HolidayOnCall from '../domain/models/HolidayOnCall.js';
import WeekOnCall from '../domain/models/WeekOnCall.js';

class ScheduleService {
  #calendar;

  #weekOnCall;

  #holidayOnCall;

  #onCallList = [];

  setDate(input) {
    this.#calendar = new Calendar(input);
  }

  setWeekOnCall(input) {
    this.#weekOnCall = new WeekOnCall(input);
  }

  setHolidayOnCall(input) {
    this.#holidayOnCall = new HolidayOnCall(input);
  }

  calcOnCallList() {
    const { month, dates } = this.#calendar.monthlyInfo;
    this.#onCallList = dates.reduce((list, dateInfo) => {
      const prev = list.length !== 0 ? list[list.length - 1].programmer : '';
      const { isHoliday, isWeek, day, date } = dateInfo;

      let programmer = '';
      if (isHoliday) {
        programmer = this.#holidayOnCall.getAvailableProgrammer(prev);
      } else {
        programmer = this.#weekOnCall.getAvailableProgrammer(prev);
      }
      list.push({ month, date, isHoliday, isWeek, day, programmer });
      return list;
    }, this.#onCallList);
  }

  get onCallList() {
    return this.#onCallList;
  }
}

export default ScheduleService;
