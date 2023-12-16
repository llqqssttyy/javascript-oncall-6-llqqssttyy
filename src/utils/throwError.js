import { ERRORS } from '../statics/messages.js';

const throwError = (errMsg) => {
  throw new Error(`${ERRORS.prefix} ${errMsg}\n`);
};

export default throwError;
