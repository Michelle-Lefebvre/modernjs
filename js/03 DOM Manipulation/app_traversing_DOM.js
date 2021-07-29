// traverse the dom means move up & down parent & children of selection

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get CHILD NODES of ul
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;
// the text nodes are the line breaks
/* Explaination of nodeType numbers:
1 - Element
2 - Attribute (deprecated) 
3 - Text node
8 - Comment
9 - Document itself
10 - Doctype
*/

// Get CHILDREN element nodes
val = list.children;
val = list.children[0];
val = list.children[0].textContent = 'Hello';
// gets a HTML collection, not a node list.


// CHILDREN OF CHILDREN
val = list.children[3].children;
val = list.children[3].children[0].id = 'test-link';

// first child
val = list.firstChild;
val = list.firstElementChild; // doesn't give text nodes which is typically what you want.

//last child
val = list.lastChild;
val = list.lastElementChild; // doesn't give text nodes which is typically what you want.

// count the child elements
val = list.childElementCount;

// Get PARENT node
val = listItem.parentNode;
val = listItem.parentElement; // In most cases you get the same as paarentNode

// Get PARENTS OF PARENT
val = listItem.parentElement.parentElement;

// Get next SIBLING
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous SIBLING
val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);