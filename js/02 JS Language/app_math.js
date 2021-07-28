const num1 = 100;
const num2 = 50;
let val;

// simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// MATH OBJECTS
val = Math.PI; // 3.141592653589793
val = Math.E; // 2.718281828459045

val = Math.round(2.4); // round up or down
val = Math.ceil(2.4); // round up 
val = Math.floor(2.4); // round down
val = Math.sqrt(2.4); // square root
val = Math.abs(-2.4); // absolute number: will turn a negative number into a positive
val = Math.pow(2, 4); // power of
val = Math.min(2, 4, 4, 32, 1); // returns lowest number
val = Math.max(2, 4, 4, 32, 1); // returns lowest number
val = Math.random(); // returns random number between 0 aand 1
val = Math.random() * 20; // returns random number between 0 and 19
val = Math.random() * 20 + 1; // returns random number between 0 and 20 with decimals
val = Math.floor(Math.random() * 20 + 1); // returns random number between 0 and 20 without decimals

console.log(val);