/* TYPE CONVERSION */
let val;
// CHANGING TYPE TO STRING - 5 ways
// Number to string
val = 5;
val = String(5);
val = String(4 + 4);

// Boolean to String
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = (true).toString();

// CHANGING TYPE TO NUMBER
// String to Number
val = Number('5');
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number('hello'); // NaN
val = Number([1, 2, 3]); // NaN
val = Number({
    a: 1,
    b: 3
}); // NaN

// Parse
val = parseInt('100.30'); // doesn't give decimals use parseFloat for decimal values
val = parseFloat('100.77')

console.log(val);
console.log(typeof val);
// console.log(val.length); // only works on strings
console.log(val.toFixed(2)); // only works on numbers

// TYPE COHERSION - js does the conversion
const val1 = 6;
const val2 = '5';
// const sum = val1 + val2;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);