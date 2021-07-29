// EVENT LISTENER & EVENT OBJECT
document.querySelector('.btn').addEventListener('click',
    function (e) {
        console.log('Hello World');
        e.preventDefault();
    });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    // console.log('Clicked');
    let val;
    val = e;
    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // e.target.innerText = 'Hello';

    // Event Type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coordinates of event relative to the window
    val = e.clientY; // from the top
    val = e.clientX; // from the left

    // Coordinates of event relative to the element
    val = e.offsetY; // from the top of element
    val = e.offsetX; // from the left of element



    console.log(val);
}