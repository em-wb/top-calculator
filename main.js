// operations

function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};


//****add positive & negative option****

function posneg (a, b) {
    return 
};

console.log("add", add(5,3));
console.log("subtract", subtract(5,3));
console.log("multiply", multiply(5,3));
console.log("divide", divide(5,3));


// input variables 

let firstNumber = " ";
const operator = "-";
const secondNumber = 0;


// call correct operation

function operate(a,b) {
    if (operator=="+") return add(a,b);
    if (operator=="-") return subtract(a,b);
    if (operator=="*") return multiply(a,b);
    else if (operator=="/") return divide(a,b);
};

console.log("operate", operate(5,3));

// populate calculator display with numbers 

const calcScreen = document.getElementById('calc-screen');
const buttons  = document.querySelectorAll('#buttons-container');

buttons.forEach(button => button.addEventListener("click", (e) =>{
    firstNumber = e.target.innerText;
    console.log(firstNumber)
    screenOutput();
}))

const screenOutput = () => {
    calcScreen.textContent += firstNumber
}

