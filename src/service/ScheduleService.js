import Calendar from '../domain/models/Calendar.js';
import HolidayOnCall from '../domain/models/HolidayOnCall.js';
import WeekOnCall from '../domain/models/WeekOnCall.js';

class ScheduleService {
  #calendar;

  #weekOnCall;

  #holidayOnCall;

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
    const { monthlyInfo } = this.#calendar;
    console.log(monthlyInfo);
  }
}

export default ScheduleService;
