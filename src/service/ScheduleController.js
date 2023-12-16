import { handleException } from '../utils/handleException.js';

class ScheduleController {
  #inputView;

  #outputView;

  #scheduleService;

  constructor(inputView, outputView, scheduleService) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#scheduleService = scheduleService;
  }

  async start() {
    await handleException(() => this.#getDate());
    await handleException(() => this.#getOnCalls());
  }

  async #getDate() {
    const input = await this.#inputView.getDate();
    this.#scheduleService.setDate(input);
  }

  async #getOnCalls() {
    const week = await this.#inputView.getWeekOnCall();
    this.#scheduleService.setWeekOnCall(week);
    const holiday = await this.#inputView.getHolidayOnCall();
    this.#scheduleService.setHolidayOnCall(holiday);
  }
}

export default ScheduleController;
