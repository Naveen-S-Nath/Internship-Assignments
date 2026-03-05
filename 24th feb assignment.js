console.log("=== Console Calculator Initialized ===");

// Basic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

// Main calculator function
function calculator(a, b, operator) {

    switch(operator) {
        case "+":
            console.log(`Result: ${a} + ${b} = ${add(a,b)}`);
            break;

        case "-":
            console.log(`Result: ${a} - ${b} = ${subtract(a,b)}`);
            break;

        case "*":
            console.log(`Result: ${a} * ${b} = ${multiply(a,b)}`);
            break;

        case "/":
            console.log(`Result: ${a} / ${b} = ${divide(a,b)}`);
            break;

        case "%":
            console.log(`Result: ${a} % ${b} = ${modulus(a,b)}`);
            break;

        default:
            console.log("Invalid operator. Use +, -, *, /, %");
    }
}``