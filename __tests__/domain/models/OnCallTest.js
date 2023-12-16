import OnCall from '../../../src/domain/models/OnCall';

describe('OnCall 도메인 테스트', () => {
  test.each([
    '준팍/도밥/고니/수아/루루',
    '준팍,도밥,고니,수아',
    '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리,단,가가,나나,다다,라라,마마,바바,사사,아아,자자,차차,카카,타타,파파,하하,가,나,다,라,마,바,사,아,자,차',
    '준팍이는도밥이를좋아해,도밥,고니,수아,루루',
    '준팍,준팍,도밥,고니,수아',
  ])('validator 정상 작동 테스트', (input) => {
    const onCall = new OnCall();

    expect(() => onCall.setWeekOnCall(input)).toThrow('[ERROR]');
  });

  test('getAvailableProgrammer 기능 테스트', () => {
    const INPUTS = [
      { isHoliday: false, prev: '' },
      { isHoliday: true, prev: '슬링키' },
      { isHoliday: false, prev: '준팍' },
      { isHoliday: false, prev: '도밥' },
      { isHoliday: true, prev: '고니' },
    ];
    const RESULTS = ['슬링키', '준팍', '도밥', '준팍', '슬링키'];
    const WEEK_ON_CALL = '슬링키,준팍,도밥,고니,수아,루루';
    const HOLIDAY_ON_CALL = '슬링키,준팍,수아,고니,루루,도밥';

    const onCall = new OnCall();
    onCall.setWeekOnCall(WEEK_ON_CALL);
    onCall.setHolidayOnCall(HOLIDAY_ON_CALL);

    const result = [];
    INPUTS.forEach((input) => {
      result.push(onCall.getAvailableProgrammer(input));
    });
    expect(result).toEqual(RESULTS);
  });
});
