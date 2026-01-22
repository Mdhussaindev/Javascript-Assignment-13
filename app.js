
var display = document.getElementById("display");
let num1 = "";
let num2 = "";
let operator = "";

function pressNumber(n){
    if(operator ===""){
        num1 += n;
        display.value = num1;
    }else{
        num2 += n;
        display.value = num1 + operator + num2;
    }
}

function pressOperator(op){
    if(num1 === "")return;
    operator = op;
    display.value = num1 + operator;
}

function calculate(){
    let result = 0;

    if(operator === "+"){
        result = Number(num1) + Number(num2)
    }else if(operator === "-"){
        result = Number(num1) - Number(num2)
    }else if(operator === "*"){
        result = Number(num1) * Number(num2)
    }else if(operator === "/"){
        result = Number(num1) / Number(num2)
    }
    display.value = result;
    num1 = result.toString();
    num2 = "";
    operator = "";
}

function clearDisplay(){
    num1 = "";
    num2 = "";
    operator = "";
    display.value = "";
}
