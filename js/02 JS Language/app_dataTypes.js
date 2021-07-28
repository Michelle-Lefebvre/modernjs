/* PRIMATIVE TYPES */
// String
const name = 'John Doe';
// Number
const age = 23.4;
//Boolean
const hasKids = true;
// Null
const car = null; // Note that Null typeof is a bug that returns object
// Undefined
let testy;
// Symbol
const sym = Symbol();

console.log(typeof name + ': ' + name);
console.log(typeof age + ': ' + age);
console.log(typeof hasKids + ': ' + hasKids);
console.log(typeof car + ': ' + car);
console.log(typeof testy + ': ' + testy);
console.log(typeof sym);

/* REFERENCE TYPES - OBJECTS */
// Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

// Object Literals 
const address = {
    city: 'Boston',
    state: 'MA'
}
console.log(typeof address);

// date
const today = new Date();
console.log(typeof today + ': ' + today);


// console.log(typeof hobbies);
// console.log(typeof);
// console.log(typeof);
// console.log(typeof);