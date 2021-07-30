// EVENT BUBBLING So event bubbling is the bubbling up of events through the DOM. When an event happens on a particular element in the dorm and actually will bubble up through its

parents.

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELGATION - is almost the opposite of event bubbling. It's where we put the listener on one of the parent elements and then we use logic inside of the event handler to target the element that we actually want that click for or whatever type of event it is. Use event delegation when you dynamically insert something, in a list to apply to all <li> tags

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //   console.log('delete item');
    // } The best way to do this is using .classList so that if a new class is added to one of the <li> it will still work

    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}