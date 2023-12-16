import Calendar from '../../../src/domain/models/Calendar.js';

describe('Calendar 클래스 테스트', () => {
  test.each(['0,월', '12,킄'])('validator 정상 작동 테스트', (input) => {
    expect(() => new Calendar(input)).toThrow('[ERROR]');
  });

  test('monthlyInfo 프로퍼티 정상 작동 테스트', () => {
    const INPUT = '2,월';
    const MONTH = 2;
    const FEB_DATES = [
      { date: 1, day: '월', isWeek: true, isHoliday: false },
      { date: 2, day: '화', isWeek: true, isHoliday: false },
      { date: 3, day: '수', isWeek: true, isHoliday: false },
      { date: 4, day: '목', isWeek: true, isHoliday: false },
      { date: 5, day: '금', isWeek: true, isHoliday: false },
      { date: 6, day: '토', isWeek: false, isHoliday: true },
      { date: 7, day: '일', isWeek: false, isHoliday: true },
      { date: 8, day: '월', isWeek: true, isHoliday: false },
      { date: 9, day: '화', isWeek: true, isHoliday: false },
      { date: 10, day: '수', isWeek: true, isHoliday: false },
      { date: 11, day: '목', isWeek: true, isHoliday: false },
      { date: 12, day: '금', isWeek: true, isHoliday: false },
      { date: 13, day: '토', isWeek: false, isHoliday: true },
      { date: 14, day: '일', isWeek: false, isHoliday: true },
      { date: 15, day: '월', isWeek: true, isHoliday: false },
      { date: 16, day: '화', isWeek: true, isHoliday: false },
      { date: 17, day: '수', isWeek: true, isHoliday: false },
      { date: 18, day: '목', isWeek: true, isHoliday: false },
      { date: 19, day: '금', isWeek: true, isHoliday: false },
      { date: 20, day: '토', isWeek: false, isHoliday: true },
      { date: 21, day: '일', isWeek: false, isHoliday: true },
      { date: 22, day: '월', isWeek: true, isHoliday: false },
      { date: 23, day: '화', isWeek: true, isHoliday: false },
      { date: 24, day: '수', isWeek: true, isHoliday: false },
      { date: 25, day: '목', isWeek: true, isHoliday: false },
      { date: 26, day: '금', isWeek: true, isHoliday: false },
      { date: 27, day: '토', isWeek: false, isHoliday: true },
      { date: 28, day: '일', isWeek: false, isHoliday: true },
    ];
    const RESULT = {
      month: MONTH,
      dates: FEB_DATES,
    };

    const calendar = new Calendar(INPUT);

    expect(calendar.monthlyInfo).toEqual(RESULT);
  });
});
