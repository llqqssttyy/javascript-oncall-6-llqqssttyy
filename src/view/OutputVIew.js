import { Console } from '@woowacourse/mission-utils';
import { OUTPUTS } from '../statics/messages.js';

class OutputView {
  printOnCallList(onCallList) {
    onCallList.forEach((onCall) => {
      Console.print(OUTPUTS.onCallProgrammer(onCall));
    });
  }
}

export default OutputView;
