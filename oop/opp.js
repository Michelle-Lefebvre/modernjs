/* object literals - fine when dealing with one object or one instance */
const bart = {
    name: 'Bart',
    age: 30
};

/* Constructors for multiple instances of an object.
 */
function Person(name, dob) {
    this.name = name;
    // this.age = calculateAge;
    this.birthday = new Date(dob);

    // method within a constructor
    this.calculatesAge = function () {
        // subtract time from dob
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
}
// instantiate an object from constructor
// const brad = new Person('Brad', '9-10-1981');
const john = new Person('John', '12-03-1982');
// console.log(john.calculateAge());

/* Built In Constructors - Not recommended */
// String
const name1 = 'Jeff';
const name2 = new String('Jeff');

//name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);

if (name2 === 'Jeff') {
    console.log('YES');
} else {
    console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function (x, y) {
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Object
const john1 = {
    name: "John"
};
const john2 = new Object({
    name: "John"
});
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);

/* PROTOTYPAL */
// Oobject.prototype
// Person.prototype
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

const joseph = new Person('Joseph', 'Jones', 'March 20 2000');
const mary = new Person('Mary', 'Johnson', '4-23-95');
console.log(joseph);

// Calculaate age is a prototype method
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};
console.log(joseph.calculateAge());

// Get full name
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
};

console.log(mary.getFullName());
mary.getsMarried('Waverly');
console.log(mary.getFullName());
console.log(mary.hasOwnProperty('getFullName'));


/* Prototypal Inheritance */
// Person constructor
function Persons(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// greeting
Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Doe');
console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
    Persons.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}
// Inherit the Person prototype
Customer.prototype = Object.create(Person.prototype);

// Make Customer.propotype return Customer()
Customer.prototype.constructor = Customer;

// Create a Customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);
// Customer greeting
Customer.prototype.greeting = function () {
    return `Hello ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());
/* Using Object.create */
const personProtoypes = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
};

const mary2 = Object.create(personProtoypes);
mary2.firstName = 'Mary';
mary2.lastName = 'Wilson';
mary2.age = 30;
mary2.getsMarried('Thompson');

console.log(mary2.greeting());

const matt = Object.create(personProtoypes, {
    firstName: {
        value: 'Matt'
    },
    lastName: {
        value: 'Jetson'
    },
    age: {
        value: 36
    }
});

console.log(matt);
console.log(matt.greeting());



/* ES6 Classes  */
class Person3 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hey there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    // static method
    static addNumbers(x, y) {
        return x + y;
    }
}
const mickey = new Person3('Mickey', 'Williams', '11-13-1980');
mickey.getsMarried('Travis');

console.log(mickey);
console.log(mickey.greeting());
console.log(mickey.calculateAge());

// A static method is one that you can use without instantiate an object. Instantiate is when we create an object from the class.
// to call a static method we need to use the class name to call it
console.log(Person3.addNumbers(5, 5));

/* Sub Class */

class Person4 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

// creating a Customer class that extends Person
class Customer4 extends Person4 {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName); // calls the parent class constructor
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const mike = new Customer4('Mike', 'Masson', '123-456-1234', 'Standard');

console.log(mike);
console.log(mike.greeting());
console.log(Customer4.getMembershipCost());