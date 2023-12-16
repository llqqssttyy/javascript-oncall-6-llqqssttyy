import Calendar from '../domain/models/Calendar.js';

class ScheduleService {
  #calendar;

  #weekOnCall;

  #holidayOnCall;

  setDate(input) {
    this.#calendar = new Calendar(input);
  }
}

export default ScheduleService;
