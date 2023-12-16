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
  }

  async #getDate() {
    const input = await this.#inputView.getDate();
    this.#scheduleService.setDate(input);
  }
}

export default ScheduleController;
