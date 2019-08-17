
// function expression
var add = function (a,b){
    return a+b;
}

console.log(add(12,2));


add = 20;

console.log(add);

// Named Function Expresstion
// sum(12,2);


// Anonymous Function
//  1. Self Executing Function
// 2. Callback

// Self Executing Function
(function (a,b){
    console.log(a,b)
    console.log('Self Executing Function')
})(12,3);


function foo() {
    console.log('I m foo')
};

function printFoo(cb,a) {
    cb();
}

printFoo(foo)

// Passing a anonymous function (callback) to function
printFoo(function() {
    console.log('I m anonymous')
},10)


foo();

