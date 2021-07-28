let val;
const today = new Date();
let birthday = new Date('9-10-1981');
birthday = new Date('September 10 1981');


val = today;
// Convert Date to String
val = today.toString();
// val = today.toString().indexOf(':');

val = birthday;
val = today.getMonth();
val = today.getDate(); // day number
val = today.getDay(); // day of the week sun = 0
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getMilliseconds();
val = today.getTime(); // gets timestamp from Jan 1st 1970

birthday.setMonth(2);
birthday.setDate(22);
birthday.setFullYear(1982);
birthday.setHours(4);
birthday.setMinutes(22);
birthday.setSeconds(58);


console.log(val);
console.log(birthday);