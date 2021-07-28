const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 40,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        no: 23,
        street: 'Cindy Drive',
        city: 'Georgetown',
        province: 'ON',
        postalCode: 'L3M 8L4'
    },
    getBirthYear: function () {
        return 2021 - this.age;
    }
};

let val;

val = person;

// Get Specific value
val = person.firstName; // typically this way
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address;
val = person.address.city;
val = person.getBirthYear();

// array of objects
const people = [{
        name: 'Mike',
        age: 30
    },
    {
        name: 'Sarah',
        age: 32
    },
    {
        name: 'Bow',
        age: 22
    },
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}

console.log(people);