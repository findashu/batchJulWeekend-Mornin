// Function Declaration


// function add (a,b) {
//     console.log('Executing add Function');

//     console.log('Value of a is', a);

//     console.log('Value of b is ', b);

//     var sum = a + b ;

//     console.log('Result is ', sum);
   
//     return sum;

//     console.log('Hello after return keyword')

// }


function add(a,b) {

    if(typeof a !== 'number' || typeof b !== 'number'){
        // let sum = a+b;
        return ;
    }

    console.log('Executing body')
    return a+b;


}


add(1,2);

add(5,5);

add(2);

add(1,2,3,4)

// console.log(sum)

var x = 10;
var y = 20;

var z = x;


// If you are not returning a value from function, function will always return a 'undefined' value;

var addition = add('x',y);

console.log('Addition is ', addition);


function sum() {
    console.log(arguments);

    var add = 0;

    for(var i =0; i<arguments.length; i++){
        add += arguments[i];
        // add = add + arguments[i];
    }

    return add;
}

console.log(sum(3,4,3,4));

// 
console.log(sum(6,6));

console.log(sum(9,6,5,8,4,3,2));
