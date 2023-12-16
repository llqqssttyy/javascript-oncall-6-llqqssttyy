import Calendar from '../domain/models/Calendar.js';
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
}

export default ScheduleService;
