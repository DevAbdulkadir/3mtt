    let currentInput = '';
    let previousInput = '';
    let operation = null;

function appendNumber(number) {
      currentInput += number;
      updateDisplay();
}

function chooseOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        compute();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function compute() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
    case '+':
        result = prev + current;
        break;
    case '-':
        result = prev - current;
        break;
    case '*':
        result = prev * current;
        break;
    case '/':
        result = current !== 0 ? prev / current : 'Error';
        break;
    default:
        return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateDisplay();
}

    function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
    }

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}