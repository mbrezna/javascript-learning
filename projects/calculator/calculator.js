let calculation = localStorage.getItem("calculation") || "";

displayCalculation();

function updateCalculation(value) {
  calculation += value;
  sixseven = document.querySelector('.js-calculation');
  sixseven.classList.remove('js-extra-calculation');
  displayCalculation();
  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation || ''
    if (calculation === 67) {
    sixseven = document.querySelector('.js-calculation');
    sixseven.classList.add('js-extra-calculation');
  }
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

function backSpace() {
  calculation = String(calculation).slice(0, -1);
  console.log(calculation.slice(0, -1));
  displayCalculation();
}
