// create arrays
const numbers = [43, 23, 32, 25, 52, 113, 13];
const numbers2 = new Array(3, 13, 9, 23, 32, 12);
const fruit = ['Apple', 'Banana', 'Kiwi', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {
    a: 1,
    b: 2
}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if it's an array
val = Array.isArray(numbers);

// Get a single value
val = numbers[3];

// Modify array
// Insert into array reassigns that index value
numbers[2] = 100;

// find index of value
val = numbers.indexOf(23);

// MUTATING ARRAYS
// add to end of array
numbers.push(250);

// add to start of array
numbers.unshift(120);

//remove from end of array
numbers.pop();

// take off from start of array
numbers.shift();

// Splice values
numbers.splice(1, 3);

// Reverse values
numbers.reverse();

// Concatenate arrays
val = numbers.concat(numbers2);


// Sort 
val = fruit.sort();
val = numbers.sort(); // sorts by the first number by default

// Use the compare function to sort numbers low to high
val = numbers.concat(numbers2).sort(function (x, y) {
    return x - y;
});

// reverse sort from high to low
val = numbers.concat(numbers2).sort(function (x, y) {
    return x + y;
});

// Find first number under 50
function under50(num) {
    return num < 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);