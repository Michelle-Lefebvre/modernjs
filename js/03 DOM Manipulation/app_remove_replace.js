// REPLACE ELEMENT

// Create element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List-MML'));
// Get old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');
// Replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);


// REMOVE ELEMENT 
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove specific list item
lis[0].remove();

// remove child
list.removeChild(lis[3]);

// CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList; // gives DOMTokenList
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
val = link.removeAttribute('title');
val = link;

console.log(val);