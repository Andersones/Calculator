function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function calculate() {
    const expression = document.getElementById('display').value;
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key.match(/[0-9+\-*/.]/)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Backspace') {
      backspace();
  } else if (event.key === '=' || event.key === 'Enter') {
      calculate();
  } else if (event.key === 'Delete'){
      clearDisplay();
  } else if (event.key === '%'){
    calculatePercentage();
  }
});

// Evento para calculcar ao precionar Enter e =;
const calcul = document.getElementById('calcul');

calcul.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || '=') {
    calculate();
  }
});

// Função para calcular porcentagem
function calculatePercentage(){
  const expression = document.getElementById('display').value;
  try{
    const resultPorcentage = eval(expression) / 100;  
    document.getElementById('display').value = resultPorcentage;
  }
  catch{
    document.getElementById('display').value = 'Error';
  }
}


/* function calculatePercentage() {
  const displayValue = document.getElementById('display').value;
  if (displayValue.trim() !== '') {
    const num = parseFloat(displayValue.replace(',', '.'));
    const percentage = num / 100;
    document.getElementById('display').value = percentage.toString();
  }
} */

const percentage = document.getElementById('porcent');
percentage.addEventListener('click', calculatePercentage());

// const percentage = document.getElementById('porcent');
// percentage.addEventListener('keydown', (event) => {
//   if (event.key === '%'){
//     calculatePercentage();
//   }
// });



