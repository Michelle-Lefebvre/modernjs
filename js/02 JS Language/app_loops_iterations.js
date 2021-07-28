/* loops run the same block of code using different values each time.
 */

// FOR LOOPS - use a for loop when you know how many iterations it will have
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// break out  & continue of a loop
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('2 is my favorite.');
        continue;
    }

    if (i === 5) {
        break;
    }
    console.log(i);
}

// WHILE LOOP - use a while loop when you don't know the number of iterations\
let i = 0;
while (i < 10) {
    console.log('Number ' + i);
    i++;
};

// DO WHILE LOOP - Do while loop is different because it runs once before checking condition

let d = 0;

do {
    console.log('Number in do while loop ' + d);
    d++;
}

while (d < 10);

// LOOPING THROUGH ARRAYS 
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// for (let i = 0; i < cars.length; i++) {
//     console.log(i);
// }
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// better to use the forEach to loop through an array
cars.forEach(function (car) {
    console.log(car);
});

cars.forEach(function (car, index) {
    console.log(`${index} : ${car}`);
});

cars.forEach(function (car, index, array) {
    console.log(`${index} : ${car}`);
    console.log(array);

});

// MAP - The MAP method can work in a few different ways. Basically used to return something different
// to return a different array
const users = [{
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Jimbo'
    },
    {
        id: 3,
        name: 'Jacob'
    },
];

//create an array of ids from the users
const ids = users.map(function (user) {
    return user.id;
});

console.log(ids);

// FOR IN
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40,
};

for (let x in user) {
    console.log(x); // displays the keys
}

for (let x in user) {
    console.log(user); // displays the object
}

for (let x in user) {
    console.log(user[x]); // displays the values
}
for (let x in user) {
    console.log(x + ": " + user[x]);
}

for (let x in user) {
    console.log(`${x} : ${user[x]}`); // displays the keys & values // firstName : John
}