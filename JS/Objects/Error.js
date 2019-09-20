let myError = new Error('Bad Error');

let syntaxError = new SyntaxError('Please include semicolon');

let refError = new ReferenceError('Something went wrong');


// EvalError
// InternalError
// RangeError
// TypeError
// URIError


console.log(myError);
console.log(syntaxError);

console.log(refError);



// function foo() {
//     console.log(n);
// }


// function bar() {
//     joe();
// }

// function joe() {
//     foo();
// }

// bar();