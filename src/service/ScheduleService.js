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
    const { dates } = this.#calendar.monthlyInfo;
    this.#onCallList = dates.reduce((list, dateInfo) => {
      const { isHoliday, isWeek, day } = dateInfo;

      let programmer = '';
      if (isHoliday) {
        programmer = this.#holidayOnCall.getAvailableProgrammer(
          list[list.length],
        );
      } else {
        programmer = this.#weekOnCall.getAvailableProgrammer(list[list.length]);
      }
      list.push({ isHoliday, isWeek, day, programmer });
      return list;
    }, this.#onCallList);
  }
}

export default ScheduleService;
