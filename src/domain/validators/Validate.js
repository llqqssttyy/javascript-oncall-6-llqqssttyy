import { ERRORS } from '../../statics/messages.js';
import throwError from '../../utils/throwError.js';
import {
  hasDuplicated,
  isValidCharsOfId,
  isValidDateForm,
  isValidMonth,
  isValidNumOfProgrammers,
  isValidOnCallForm,
} from './validators.js';

const Validate = {
  date(input) {
    if (!isValidDateForm(input)) throwError(ERRORS.invalidDateForm);

    if (!isValidMonth(input)) throwError(ERRORS.invalidMonth);
  },

  onCall(input) {
    if (!isValidOnCallForm(input)) throwError(ERRORS.invalidOnCallForm);

    if (!isValidNumOfProgrammers(input))
      throwError(ERRORS.invalidNumOfProgrammers);

    if (!isValidCharsOfId(input)) throwError(ERRORS.invalidCharsOfId);

    if (hasDuplicated(input)) throwError(ERRORS.hasDuplicated);
  },
};

export default Validate;
