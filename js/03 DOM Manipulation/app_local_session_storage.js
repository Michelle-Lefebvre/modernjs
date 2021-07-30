// LOCAL & SESSION STORAGE
/* 
Local storage is part of the window. 
All values must be saved as a string.
Arrays & object can be turned into a string by using JSON.stringify()

*/

// set local storage item 
// Go to console: Console/Application/Storage/Local Storage
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// set session storage item
// Console/Application/Storage/Session Storage
sessionStorage.setItem('name', 'Beth');

// remove from storage
localStorage.removeItem('name');

// get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// // clear local storage
localStorage.clear();

console.log(name, age);

document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value;

  let tasks;

  //save multiple tasks to local storage
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify('tasks'));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
  console.log(task);
});