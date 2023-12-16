const ERRORS = Object.freeze({
  prefix: '[ERROR]',
  invalidDateForm: '입력 형식을 다시 확인해 주세요.',
  invalidMonth: '유효하지 않은 월입니다.',
  invalidDay: '유효하지 않은 일입니다.',
});

const INPUTS = Object.freeze({
  date: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  week: '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
  holiday: '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
});

const OUTPUTS = Object.freeze({});

export { ERRORS, INPUTS, OUTPUTS };
