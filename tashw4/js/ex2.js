// Homework 4, Exercise 2: Calculator
function calculator(number1, number2, operation) {
  let result;
  switch (operation) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
  }
  return `${number1} ${operation} ${number2} = ${result}`;
}

const number1 = Number(prompt("Enter Number1:"));
const number2 = Number(prompt("Enter Number2:"));
const operation = prompt("Enter the operation (+, -, *, /):");
console.log(calculator(number1, number2, operation));
