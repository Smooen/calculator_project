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

function operate(op, num1, num2){
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

let buttons = document.querySelectorAll('button');

buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
        //sets message html content to html content of btn
        document.querySelector(".message").innerHTML = btn.innerHTML;
    });
});