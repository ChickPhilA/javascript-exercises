const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Phillipe', () => {
    expect(values.firstName).toEqual('Phillipe');
  });
  test('lastName is Stevenson', () => {
    expect(values.lastName).toEqual('Manio');
  });
  test('thisYear is 1965', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1947', () => {
    expect(values.birthYear).toEqual(2003);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Phillipe Manio and I am 22 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Carlos Stevenson', () => {
    expect(values.fullName).toEqual('Phillipe Manio');
  });
  test('age is 22', () => {
    expect(values.age).toEqual(22);
  });
});
