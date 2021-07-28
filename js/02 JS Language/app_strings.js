const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello my name is Don Donovan';
const tags = 'web design, web development, web flow';

let val;

// concatenation
val = firstName + ' ' + lastName;

/// append add onto a variable
val = 'Brad';
val += ' Traversy';

// escaping
val = 'That\'s awesome, I can\'t wait';
val = "That's awesome, I can't wait";

// length
val = firstName.length;
/* Now since this is a property in a method we don't need, parentheses, parentheses are four methods which are basically just functions */

//concat
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName[2].toUpperCase();

// index to 
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
// Note: if character is not there the default value is -1


// charAt()
val = firstName.charAt('2');

// Get last character of string
val = firstName.charAt(firstName.length - 1);

// Get substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3); // negative number starts from the end of the string

// Note: slice() is similar to substring(). It you put a negative number it will take from the end of the string the number specified.

// split() takes an string and makes an array based on it's specified separator. In this case a space.
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes() gives a boolean value
val = str.includes('Hello');

console.log(val);