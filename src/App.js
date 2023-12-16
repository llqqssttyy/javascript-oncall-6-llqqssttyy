import ScheduleController from './service/ScheduleController.js';
import ScheduleService from './service/ScheduleService.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputVIew.js';

class App {
  async run() {
    const controller = new ScheduleController(
      new InputView(),
      new OutputView(),
      new ScheduleService(),
    );
    await controller.start();
  }
}

export default App;
