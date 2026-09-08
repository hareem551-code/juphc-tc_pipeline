function showTax() {
  var income = parseFloat(document.getElementById('income').value);
  var rate = parseFloat(document.getElementById('rate').value);
  var tax = calculateTax(income, rate);
  document.getElementById('result').innerText = 'Tax Due: ' + tax;
}
