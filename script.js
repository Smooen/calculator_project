let firstNumber = 0;
let secondNumber = 0;
let operant = '';

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, op, num2){
    //input needs to be char/string to work in browser console
    switch(op){
        case '+': return add(num1, num2);
        break;
        case '-': return subtract(num1, num2);
        break;
        case '*': return multiply(num1, num2);
        break;
        case '/': return divide(num1, num2);
        break;
    }
}

// let button1 = document.getElementById(1);

// button1.addEventListener('click', () => console.log("ONE"));

let numberButtons = document.querySelectorAll('.keys');
let opButtons = document.querySelectorAll('.op');
let equalsButton = document.getElementById('equals');
let clearButton = document.getElementById('clear');


equalsButton.addEventListener('click', () => {
    let result = operate(firstNumber, operant, secondNumber);
    console.log(result);
});

clearButton.addEventListener('click', () => {
    firstNumber = 0;
    secondNumber = 0;
    operant = '';
    document.querySelector(".message").innerHTML = '';
});

numberButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(operant === ''){
            firstNumber += btn.innerHTML;
        }
        else{
            secondNumber += btn.innerHTML;
        }
        document.querySelector(".message").innerHTML += btn.innerHTML;
        console.log("first number: " + firstNumber);
        console.log("second num: " + secondNumber);
    });
});

opButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
        operant = btn.innerHTML;
        document.querySelector(".message").innerHTML += btn.innerHTML;
        console.log(operant);
    });
});