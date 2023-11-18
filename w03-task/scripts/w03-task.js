/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
  }

function addNumbers() {
    let number1 = document.getElementById("add1").value;
    let number2 = document.getElementById("add2").value;
    add(number1, number2);
}

function addNumbers() {
    let number1 = document.getElementById("add1").value;
    let number2 = document.getElementById("add2").value;
    let result = add (Number(number1), Number(number2));
    document.getElementById("sum").value = result;
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
    return number1 - number2;
    }

function subtractNumbers() {
    let number1 = document.getElementById("subtract1").value;
    let number2 = document.getElementById("subtract2").value;
    subtract(number1, number2);
}
    
function subtractNumbers() {
    let number1 = document.getElementById("subtract1").value;
    let number2 = document.getElementById("subtract2").value;
    let result = subtract (Number(number1), Number(number2));
    document.getElementById("difference").value = result;
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers  */

const multiply = (number1, number2) => {
    return number1 * number2;
    }

function multiplyNumbers() {
    let number1 = document.getElementById("factor1").value;
    let number2 = document.getElementById("factor2").value;
    multiply(number1, number2);
}

function multiplyNumbers() {
    let number1 = document.getElementById("factor1").value;
    let number2 = document.getElementById("factor2").value;
    let result = multiply (Number(number1), Number(number2));
    document.getElementById("product").value = result;
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
    }

function divideNumbers() {
    let number1 = document.getElementById("dividend").value;
    let number2 = document.getElementById("divisor").value;
    divide(number1, number2);
}

function divideNumbers() {
    let number1 = document.getElementById("dividend").value;
    let number2 = document.getElementById("divisor").value;
    let result = divide (Number(number1), Number(number2));
    document.getElementById("quotient").value = result;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

document.getElementById("getTotal").addEventListener("click", function() {
    
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let isMember = document.getElementById("member").checked;
    let total = isMember ? subtotal * 0.8 : subtotal; // Apply 20% discount if member
    
    document.getElementById("total").textContent = '$ ' + total.toFixed(2);
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = numbers;

/* Output Odds Only Array */

let odds = numbers.filter(function(number) {
    return number % 2;
});

document.getElementById("odds").innerHTML = odds;

/* Output Evens Only Array */

let evens = numbers.filter(function(number) {
    return !(number % 2);
});

document.getElementById("evens").innerHTML = evens;

/* Output Sum of Org. Array */

let sum = numbers.reduce(function(total, number) {
    return total + number;
});

document.getElementById("sumOfArray").innerHTML = sum;

/* Output Multiplied by 2 Array */

let multiplied = numbers.map(function(number) {
    return number * 2;
}); 

document.getElementById("multiplied").innerHTML = multiplied;

/* Output Sum of Multiplied by 2 Array */
/* Array: Map and Reduce */

let multipliedSum = numbers.map(function(number) {
    return number * 2;  // multiply each number by 2
}).reduce(function(total, number) {
    return total + number;  // add them all together
});

document.getElementById("sumOfMultiplied").innerHTML = multipliedSum;