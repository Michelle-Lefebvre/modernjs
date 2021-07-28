// alert('Hello World')

// log to console
console.log('Hello MML');
console.log(123);
console.log(false);
var greeting = 'Hello';
console.log(greeting);

// log arrays
console.log([1, 2, 3, 4, 'logs array']);

// log objects
console.log({
    a: 1,
    b: 2,
    c: 3
});

// log objects in a table
console.table({
    a: 1,
    b: 2,
    c: 3
});
console.error('This is an error');
console.warn('This is a warning');

// To find out how long something takes to run
console.time('Start timer'); // .time & timeEnd must be the same text
console.log('Checking');
console.log('To');
console.log('See');
console.log('how');
console.log('long');
console.log('will');
console.log('this');
console.log('take');
console.log('to ');
console.log('run');
console.timeEnd('Start timer');

// declare a variable: var, let, const

var name = 'John Doe';
var greeting = 'Hello';
console.log(name);
console.log(greeting);

/*
Where people get confused is that we can take an object and we can mutate it.
Same for Arrays: they can be mutated but not reassigned.
*/

const person = {
    name: 'John',
    age: '32'
}
console.log(person);

// change the values of an object keys
person.name = 'Michelle';
person.age = '23';
console.log(person);

// add key:value to the person object
person.sex = 'female';
console.log(person);

const numbers = [3, 6, 9, 13, 23];
numbers.push(32, 36);
numbers.pop();
// numbers = [1, 2, 3, 4] // const arrays can NOT be reassigned
console.log(numbers);