// Step 1: Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by 0";
    }
    return number1 / number2;
}

// Step 2: Event listeners for each button
document.addEventListener("DOMContentLoaded", function () {
    const number1Input = document.getElementById("number1");
    const number2Input = document.getElementById("number2");
    const resultSpan = document.getElementById("calculation-result");

    // Addition
    document.getElementById("add").addEventListener("click", function () {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = add(number1, number2);
        resultSpan.textContent = result;
    });

    // Subtraction
    document.getElementById("subtract").addEventListener("click", function () {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = subtract(number1, number2);
        resultSpan.textContent = result;
    });

    // Multiplication
    document.getElementById("multiply").addEventListener("click", function () {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = multiply(number1, number2);
        resultSpan.textContent = result;
    });

    // Division
    document.getElementById("divide").addEventListener("click", function () {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = divide(number1, number2);
        resultSpan.textContent = result;
    });
});
