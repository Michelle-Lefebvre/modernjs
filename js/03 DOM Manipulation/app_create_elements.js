// CREATE ELEMENTS
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'NewItem');

// Create text node & append
// Step 1 - .createTextNode()
li.appendChild(document.createTextNode('Hello World'));
// another way to do this is to put the createTextNode in a var
const greet = document.createTextNode('MML');
li.appendChild(greet);

// Step 1 - Create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
// Step 1 - Add icon html
link.innerHTML = `<i class="fa fa-remove"></i>`;


// Step 2 - .appendChild() append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// Step 2 - Append li as child to ul
li.appendChild(link);


console.log(li);