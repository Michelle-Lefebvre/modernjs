let id = 111;

// to check if a variable is defined
if (typeof id !== 'undefined') {
    console.log(`The ID is ${id}`);
} else {
    console.log('NO ID');
}

// if else
const color = 'yellow';
if (color === 'red') {
    console.log('Color is red');
} else if (color === 'blue') {
    console.log('Color is blue');
} else {
    console.log('Color is not red or blue.');
}

// logical operators test more than one thing && ||
const name = 'Steve';
const age = 54;
if (age > 0 && age < 12) {
    console.log(`${name} is a child.`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager.`);
} else {
    console.log(`${name} is an adult.`);
}

if (age < 16 || age > 65) {
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} can run in the race.`);
}

// ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

// In javascript braces are optional

// SWITCHES
// const color = 'red';

switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);