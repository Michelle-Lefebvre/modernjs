/* Functions are blocks of code that can be defined and then called at a later time or in some cases
defined and called at the same time.
*/

//FUNCTION DECLARATIONS
function greet(firstName = 'John', lastName = 'Doe') {
    // console.log('Hello');
    return 'Hello ' + firstName;
}
// greet();
console.log(greet('Michelle, Jones'));

// FUNCTION EXPRESSIONS A function expression is basically putting a function as a variable assignment. The function is usually anonymous

const square = function (x) {
    return x * x;
};

console.log(square(8));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IFFEs
(function () {
    console.log(`IFFE ran..`)
})();
(function (name) {
    console.log(`Hello ` + name);
})('Brad');

// Functions inside object is called a method
const todo = {
    add: function () {
        console.log('Add todo...');
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`)
    }
};

todo.delete = function () {
    console.log('Delete todo...');
};

todo.add();
todo.edit(23);
todo.delete();