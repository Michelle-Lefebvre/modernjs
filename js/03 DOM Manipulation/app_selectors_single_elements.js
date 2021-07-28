// SINGLE ELEMENT SELECTOR grabs the first element
// document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').className);

// Change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.visibility = 'hidden';

// Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'MML\'s Task List ';
document.getElementById('task-title').innerHTML = '<span style="color:red"> Task ToDo List </span>';

// OR better way is to assign task-title to a variable
const taskTitle = document.getElementById('task-title');
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'MML\'s Task List ';
taskTitle.innerHTML = '<span style="color:red"> Task ToDo List </span>';

// querySelector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'orange';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'lime';
document.querySelector('li:nth-child(4)').textContent = 'Hello';
document.querySelector('li:last-child').style.color = 'magenta';
document.querySelector('li:nth-child(odd)').style.background = 'grey';
document.querySelector('li:nth-child(even)').style.background = 'lightGrey';