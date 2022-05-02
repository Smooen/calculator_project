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
    if(num2 === 0){
        return "YOU CAN'T DO THAT";
    }
    else{
        return num1 / num2;
    }
}

function operate(num1, op, num2){
    //input needs to be char/string to work in browser console
    num1 = Number(num1);
    num2 = Number(num2);
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


let numberButtons = document.querySelectorAll('.keys');
let opButtons = document.querySelectorAll('.op');
let equalsButton = document.getElementById('equals');
let clearButton = document.getElementById('clear');
let dotbutton = document.getElementById('dotbutton');


equalsButton.addEventListener('click', () => {
    let result = operate(parseFloat(firstNumber), operant, parseFloat(secondNumber));
    console.log(result);
    document.querySelector(".message").innerHTML = result;
    dotbutton.removeAttribute('disabled');
});

clearButton.addEventListener('click', () => {
    firstNumber = 0;
    secondNumber = 0;
    operant = '';
    document.querySelector(".message").innerHTML = '';
    dotbutton.removeAttribute('disabled');
});

numberButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(operant !== '' && firstNumber !== ''){
            secondNumber += btn.innerHTML;
        }
        else{
            firstNumber += btn.innerHTML;
        }
        document.querySelector(".message").innerHTML += btn.innerHTML;
        console.log("first number: " + firstNumber);
        console.log("second num: " + secondNumber);
    });
});

opButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(operant !== ''){
            firstNumber = operate(parseFloat(firstNumber), operant, parseFloat(secondNumber));
            document.querySelector(".message").innerHTML = firstNumber;
            secondNumber = 0;
            operant ='';
        }
        operant = btn.innerHTML;
        document.querySelector(".message").innerHTML += btn.innerHTML;
        console.log(operant);
        dotbutton.removeAttribute('disabled');
    });
});


document.getElementById('dotbutton').onclick = function() {
    this.disabled = true;
}