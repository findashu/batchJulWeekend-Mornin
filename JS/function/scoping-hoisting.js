var a = 10;

console.log(a);


if(true) {
    var b = 50;
    console.log('Inside if ',a);
    console.log(b);
}

console.log('Accessing b in global ', b);

function foo(arg1, arg2) {

    var insideFn = 'I am fntion scoped';
    bottle = 'green'

    console.log('Argument',arg1)

    console.log(bottle);
    console.log('Access b inside function', b)
    console.log('Inside Function ', a);


    console.log(insideFn);
}


foo('val1', 'val2');

// console.log(arg1);


console.log('Outside', bottle)

// console.log(insideFn)


function outer() {
    var outVar = 50;
    console.log('Outer fun body', a);

    function inner() {
        var innerVar = 100;

        console.log('Outer scope fn', outVar)

        console.log('Inner fun body', a)
    }

    inner();

    console.log('Outer scope fn', innerVar);


}


outer();