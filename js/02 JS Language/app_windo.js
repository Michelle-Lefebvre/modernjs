// WINDOW METHODS / OBJECTS / PROPERTIES

/* Alert
window.alert('Hello World');
alert('Hello World'); // don't need to add window for alert to work
*/
/* Prompt
const input = prompt();
alert(input);
*/
/* Confirm 
if (confirm('Are you sure')) {
    console.log('YES');
} else {
    console.log('NO');
}
 */

// get hieght & width of window

let val;

val = window.outerHeight;
val = window.outerWidth;
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;

// location
val = window.location;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = 'http://google.com';
// Reload
// window.location.reload();

// History Object - gets your browser history
// window.history.go(-1);

// Navigator Object - deals with browser itself chrome, firefox
val = window.navigator;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;





console.log(val);