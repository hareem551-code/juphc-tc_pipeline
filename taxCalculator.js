function calculateTax(income, rate) {
  if (typeof income !== 'number' || typeof rate !== 'number') {
    throw new Error('Income and rate must be numbers');
  }
  return income * rate;
}
