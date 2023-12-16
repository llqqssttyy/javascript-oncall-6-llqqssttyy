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

    this.#scheduleService.calcOnCallList();

    this.#printResult();
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

  #printResult() {
    const { onCallList } = this.#scheduleService;
    this.#outputView.printOnCallList(onCallList);
  }
}

export default ScheduleController;
