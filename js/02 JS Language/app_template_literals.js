const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';

function hello() {
    return 'hello'
}
let html;

// without template strings ES5
html = '<ul><li>Name: ' + name +
    ' </li><li>Age: ' + age +
    ' </li><li>Job: ' + job +
    ' </li><li>City: ' + city +
    ' </li></ul>';


// with template strings AKA template literals
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Expressions: ${ 4 +4 }</li>
        <li>Functions: ${hello()}</li>
        <li>Ternary Operator: ${age >30 ? 'Over 30' : 'Under 30'}</li>
        <li></li>
`;


document.body.innerHTML = html;