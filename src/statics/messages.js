import { CONDITIONS } from './constants';

const ERRORS = Object.freeze({
  prefix: '[ERROR]',
  invalidDateForm: '입력 형식을 다시 확인해 주세요.',
  invalidMonth: '유효하지 않은 월입니다.',
  invalidDay: '유효하지 않은 일입니다.',
  invalidOnCallForm: '입력 형식을 다시 확인해 주세요.',
  invalidNumOfProgrammers: `근무자는 최소 ${CONDITIONS.minNumOfProgrammers}명, 최대 ${CONDITIONS.maxNumOfProgrammers}명 입력 가능합니다.`,
  invalidCharsOfId: `닉네임은 최대 ${CONDITIONS.maxNumOfChars}글자까지 가능합니다.`,
  hasDuplicated: '중복된 닉네임은 입력 불가능합니다',
});

const INPUTS = Object.freeze({
  date: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  weekOnCall: '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
  holidayOnCall: '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
});

const OUTPUTS = Object.freeze({
  onCallProgrammer({ month, date, day, isHoliday, isWeek, programmer }) {
    return `${month}월 ${date}일 ${day}${
      isHoliday && isWeek ? '(휴일)' : ''
    } ${programmer}`;
  },
});

export { ERRORS, INPUTS, OUTPUTS };
