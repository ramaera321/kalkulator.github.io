const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const calculatorScreen = document.querySelector(".calculator-screen");
const equalSign = document.querySelector(".equal-sign");
const clearButton = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
const persentage = document.querySelector(".percentage");

let prevNumber = "" ;
let calculationOperator = "" ;
let currentNumber = "0" ;

const inputNumber = (number) => {
    if(currentNumber === "0"){
        currentNumber = number;
    }
    else{
        currentNumber += number;
    }
}

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "";
}

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const calculate = () => {
    let result = "";
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;

        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;

        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;

        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
    
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

const persentageNumber = () => {
    currentNumber /= 100 ;
}

const clearAll = () => {
    prevNumber = "" ;
    calculationOperator = "" ;
    currentNumber = "0" ;
}

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot;
}

persentage.addEventListener("click", () => {
    persentageNumber();
    updateScreen(currentNumber)
});

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber)
});

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber)
});

clearButton.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber)
});

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber);
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    });
});

