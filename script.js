let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = null;

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function appendDecimal() {
    if (currentNumber.includes('.')) return;
    currentNumber += '.';
    updateDisplay();
}

function setOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculateResult();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    updateDisplay();
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    if (previousNumber === '' || currentNumber === '' || operator === null) return;
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    switch (operator) {
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
            result = prev / current;
            break;
        default:
            return;
    }
    currentNumber = result.toString();
    operator = null;
    previousNumber = '';
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentNumber || '0';
}
