function add (x, y) {
	return x + y;
};

function subtract (x, y) {
	return x - y;
};

function divide (x, y) {
    return x / y;
};

function multiply (x, y) {
    return x * y;
};

function operate (operator, x, y) {
    if( operator == '+') return add (x, y);
    if( operator == '-') return subtract (x, y);
    if( operator == '*') return multiply (x, y);
    if( operator == '/') return divide (x, y);
};

var display  = "";
var operation = "";
var firstNum;
var result;


function addNumber (number) {
    display += number;
    document.querySelector('.display').innerHTML = display;
}

function addOperator (operator) {
    if (firstNum == null) firstNum = parseInt(display);
    operation = operator; 
    display = "";
    document.querySelector('.display').innerHTML = display;
}

function clearDisplay () {
    display   = "";
    operation = "";
    firstNum  = null;
    result = null;
    document.querySelector('.display').innerHTML = display;
}

function performOperation() {
    result = operate(operation, firstNum, parseInt(display));
    display  = result;
    firstNum = result;
    document.querySelector('.display').innerHTML = display;
}