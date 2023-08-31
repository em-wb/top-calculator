// input and output variables 

const calcScreen = document.getElementById('calc-screen');
const numbers  = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equals = document.querySelector('#equals');
const allClear = document.querySelector('#all-clear');
const clearLast = document.querySelector('#clear-last');
const posNeg = document.querySelector('#pos-neg');

let firstNumber = "";
let operator = "";
let secondNumber = "";
let screenNumber;
let newValue = false;
let maxLength= 10;
let changePosNeg;
let finalResult;


// operations

function add (a,b) {
    let result = parseFloat(a) + parseFloat(b); 
    return checkLength (result)
};

function subtract (a,b) {
    let result = parseFloat(a) - parseFloat(b);
    return checkLength (result)
};

function multiply (a,b) {
    let result = parseFloat(a) * parseFloat(b);
    return checkLength (result)
};

function divide (a,b) {
    if (secondNumber=="0") return "no can do, hun";
    else {let result = parseFloat(a) / parseFloat(b);
    return checkLength (result)
}
};


// check length of final value - fit to calculator screen 

 function checkLength (result) {
    if (result>9999999999) {
        finalResult = result.toExponential(0)
        return finalResult;
    } else finalResult = result.toString().slice(0,maxLength);
        return finalResult
    };


// call an operation function

function operate(a,b) {
    if (operator=="+") return add(a,b)
    if (operator=="-") return subtract(a,b);
    if (operator=="x") return multiply(a,b);
    else if (operator=="/") return divide(a,b);
};


// populate calculator display with values input by user 

numbers.forEach(number => number.addEventListener("click", (e) =>{
    if (newValue == true) calcScreen.innerText="";
    if (operator=="" && calcScreen.innerText.length < maxLength) {
        if (calcScreen.innerText.includes(".")==true && e.target.innerText.includes(".")==true)
            return calcScreen.innerText;
        else {calcScreen.innerText += e.target.innerText;
        newValue = false
    };
    } else if (operator!=="" && calcScreen.innerText.length < maxLength) {
        if (calcScreen.innerText.includes(".")==true && e.target.innerText.includes(".")==true)
            return calcScreen.innerText;
        else { calcScreen.innerText += e.target.innerText;
        newValue = false;
        }
    }    
}));


// log which operator is called, log first and second numbers, call operate function

operators.forEach(operatorSelection => operatorSelection.addEventListener("click", (e) => {
    if (firstNumber=="" && secondNumber=="") {
        operator = e.target.innerText;
        firstNumber= calcScreen.innerText;
        newValue=true;
    } else if (firstNumber!=="" && secondNumber=="") {
        secondNumber = calcScreen.innerText;
        calcScreen.innerText = operate(firstNumber,secondNumber);
        firstNumber = operate (firstNumber, secondNumber);
        operator = e.target.innerText;
        secondNumber = "";
        newValue=true;
    }
}));


// function for equals button 

equals.addEventListener("click", (e) => {
    if (firstNumber!=="" && operator!=="" && newValue==false) {
        secondNumber = calcScreen.innerText;
        calcScreen.innerText = operate(firstNumber,secondNumber);
        firstNumber="";
        secondNumber="";  
        newValue = true
    };  
}); 


// perform 'all clear' calculator function

allClear.addEventListener("click", (e) => {
    e.target.innerText == "AC";
    calcScreen.innerText="";
    firstNumber="";
    secondNumber="";
    operator="";

});


// perform 'clear' calculator function (last number entered)
clearLast.addEventListener("click",(e) => {
    return calcScreen.innerText = calcScreen.innerText.slice(0,-1);
}); 


// make input value positive or negative

posNeg.addEventListener("click", () => {   
    if (calcScreen.innerHTML!=="")
    return    calcScreen.innerText = parseFloat(calcScreen.innerText) * -1;

});