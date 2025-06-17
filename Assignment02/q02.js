/*
2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function. */
function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error: Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operator";
    }

    return result;
}
console.log(calculate(10, 5, '+')); 
console.log(calculate(10, 5, '-')); 
console.log(calculate(10, 5, '*')); 
console.log(calculate(10, 5, '/')); 
