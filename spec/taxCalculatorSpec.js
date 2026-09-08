const { calculateTax } = require('../src/taxCalculator');

describe('calculateTax', function() {
  it('calculates tax for a positive income and rate', function() {
    expect(calculateTax(1000, 0.1)).toBe(100);
  });
  it('returns 0 when income is 0', function() {
    expect(calculateTax(0, 0.2)).toBe(0);
  });
  it('returns 0 when rate is 0', function() {
    expect(calculateTax(500, 0)).toBe(0);
  });
  it('calculates tax correctly for decimal rate', function() {
    expect(calculateTax(2500, 0.15)).toBe(375);
  });
  it('handles large income values', function() {
    expect(calculateTax(1000000, 0.3)).toBe(300000);
  });
  it('throws an error when income is not a number', function() {
    expect(function() { calculateTax('abc', 0.1); }).toThrowError('Income and rate must be numbers');
  });
  it('throws an error when rate is not a number', function() {
    expect(function() { calculateTax(1000, 'abc'); }).toThrowError('Income and rate must be numbers');
  });
});
