const numberChecker = require('./numberChecker')

describe('numberChecker', () => {
  test('returns true when number is 1000', () => {
    expect(numberChecker(1000)).toEqual(true);
  });
});
