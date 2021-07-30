const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// submit
loadEventListeners();

// load all functions
function loadEventListeners() {

    // DOM load event
    // document.loadxEventListeners('DOMContentLoaded', getTasks);
    document.addEventListener('DOMContentLoaded', getTasks);

    //add task
    form.addEventListener('submit', addTask);

    //remove task event with delegation
    taskList.addEventListener('click', removeTask);

    // clear all tasks
    clearBtn.addEventListener('click', clearTasks);

    // filter tasks
    filter.addEventListener('keyup', filterTasks);
}

// add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }
    // create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node
    li.appendChild(document.createTextNode(taskInput.value));

    // create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.style.cursor = 'pointer';

    // add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    // Append the li to the ul
    taskList.appendChild(li);

    // Store in local storage
    storeTaskInLocalStorage(taskInput.value);




    // Clear input
    taskInput.value = '';

    e.preventDefault();
}

// store task in local storage
function storeTaskInLocalStorage(task) {
    let tasks;
    // check local storage to see if there are any tasks stored
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// add stored tasks in local storage to display in taskList
function getTasks() {
    let tasks;
    // check local storage to see if there are any tasks stored
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task) {
        // just like addTask
        // create li element
        const li = document.createElement('li');
        // add class
        li.className = 'collection-item';
        // create text node
        li.appendChild(document.createTextNode(task));

        // create new link element
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.style.cursor = 'pointer';

        // add icon
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);

        // Append the li to the ul
        taskList.appendChild(li);
    })
}

/// remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you Sure you want to delete?')) {
            e.target.parentElement.parentElement.remove();

            // Remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
    // 1. Check local storage 2. Put in local var 3. Loop 4. If statement see if textContent matches task splice array by index to remove task.  5.Set local storage tasks as a string
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear all tasks
function clearTasks(e) {
    // one way to  clear
    // taskList.innerHTML = '';

    // faster: clear with while loop
    if (confirm('You will delete all your tasks. \n Are you certain you want to do this?')) {
        while (taskList.firstChild) {
            // while there is still something in the list
            taskList.removeChild(taskList.firstChild);
        }
        // Clear from local storage
        clearTasksFromLocalStorage();
    }
}

// Clear tasks from local storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

// filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}