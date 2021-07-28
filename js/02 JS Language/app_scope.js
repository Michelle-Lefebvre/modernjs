var a = 'var 1';
let b = 'let 2';
const c = 'const 3';

console.log('Global Scope: ', a, b, c);

function test() {
    var a = 'var 4';
    let b = 'let 5';
    const c = 'const 6';
    console.log('Function Scope: ', a, b, c);
}

test();


if (true) {
    var a = 'var 7';
    let b = 'let 8';
    const c = 'const 9';
    console.log('If Block Scope: ', a, b, c);
}

for (var a = 0; a < 10; a++) {
    console.log(`Loop: var ${a}`);
}

console.log('Global Scope: ', a, b, c);

// var changes globally when used in loops & blocks scope

// let & const has a block level scope.