let calculation = localStorage.getItem("calculation") || "";

displayCalculation();

function updateCalculation(value) {
  calculation += value;
  displayCalculation();
  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation || ''
}
function clearCalculation() {
  calculation = '';
  console.log('Cleared');
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function evaluation() {
  calculation = eval(calculation);
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}