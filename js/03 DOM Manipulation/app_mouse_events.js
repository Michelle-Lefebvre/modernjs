const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');
/*
// Click
clearBtn.addEventListener('click', runEvent);

// Doubleclick
clearBtn.addEventListener('dblclick', runEvent);

// Mousedown click+hold
clearBtn.addEventListener('mousedown', runEvent);

// Mouseup click+hold+release
clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter when mouse hovers over button
card.addEventListener('mouseenter', runEvent);

// Mouseleave 
card.addEventListener('mouseleave', runEvent);

// Mouseover
card.addEventListener('mouseover', runEvent);

// Mouseout
card.addEventListener('mouseout', runEvent);
*/

/* What's the difference between mouseenter vs mouseover & mouseleave vs mouseout?
mouseenter & mouseleave fire on parent 
mouseover & mouseout fire on child element
 */

// Mousemove
card.addEventListener('mousemove', runEvent); // really interactive, games




// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    // displays coordinates of the mousemove
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}