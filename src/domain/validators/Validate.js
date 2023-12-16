import { ERRORS } from '../../statics/messages.js';
import throwError from '../../utils/throwError.js';
import { isValidDateForm, isValidMonth } from './validators.js';

const Validate = {
  date(input) {
    if (!isValidDateForm(input)) throwError(ERRORS.invalidDateForm);

    if (!isValidMonth(input)) throwError(ERRORS.invalidMonth);

    // if (!isValidDay(input)) throwError(ERRORS.invalidDay);
  },
};

export default Validate;
