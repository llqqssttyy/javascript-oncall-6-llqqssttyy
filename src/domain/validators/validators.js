import { CONDITIONS, SYMBOLS } from '../../statics/constants.js';
import { LAST_MONTH, START_MONTH } from '../../statics/months.js';

export const isValidDateForm = (input) => {
  const regex = new RegExp(/^(\d+,[월|화|수|목|금|토|일])$/);
  return regex.test(input);
};

export const isValidMonth = (input) => {
  const [month, _] = input.split(SYMBOLS.seperator);
  return Number(month) >= START_MONTH && Number(month) <= LAST_MONTH;
};

export const isValidOnCallForm = (input) => {
  const regex = new RegExp(
    /^([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]+,)*([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]+)$/,
  );
  return regex.test(input);
};

export const isValidNumOfProgrammers = (input) => {
  const programmers = input.split(SYMBOLS.seperator);
  const numOfProgrammers = programmers.length;
  return (
    numOfProgrammers >= CONDITIONS.minNumOfProgrammers &&
    numOfProgrammers <= CONDITIONS.maxNumOfProgrammers
  );
};

export const isValidCharsOfId = (input) => {
  const programmers = input.split(SYMBOLS.seperator);
  return programmers.every(
    (nickname) => nickname.length <= CONDITIONS.maxNumOfChars,
  );
};

export const hasDuplicated = (input) => {
  const elements = input.split(SYMBOLS.seperator);
  const set = new Set(elements);
  return set.size !== elements.length;
};
