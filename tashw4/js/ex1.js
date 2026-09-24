// Homework 4, Exercise 1: Validate Input
const input = prompt("Enter a number between 1 and 100:");
const number = Number(input);

if (!isNaN(number) && number >= 1 && number <= 100) {
  console.log(`Thank you! You entered ${input}, a valid number.`);
} else {
  console.log(`Sorry, ${input} is not a valid entry.`);
}
