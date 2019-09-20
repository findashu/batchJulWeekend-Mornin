let primitive = "THis is a primitive string";


let strObj = new String('THis is obj');


console.log(typeof primitive);

console.log(typeof strObj);


console.log(strObj.length);

console.log(primitive.length);


console.log(primitive[2]);



// console.log(new Boolean(''));

// console.log(new Boolean(new String('')))


// toUpperCase

console.log(primitive.toUpperCase());

console.log(primitive.toLowerCase());


// charAt();


console.log(primitive.charAt(3));

// indexOf();


console.log(primitive.indexOf('i', 3));


// lastIndexOf()


console.log(primitive.lastIndexOf('i'));


// substring();


console.log(primitive.substring(1,6));


// split();


console.log(primitive.split(' '));

// concat();

console.log(primitive.concat(' This is concated value'));

// Q. WAP to shorten your string to 5 chars

function shorten (str) {
    return str.substring(0,6)
}

console.log(shorten('Hellothisisabigstring'))


// primitive.shorten()

String.prototype.shorten = function() {
    console.log('this is shorten function')
    console.log(this)

    return this.substring(0,6)
}


// overriding lastIndexOf function behaviour
String.prototype.lastIndexOf = function() {
    return 'Overrideen diff value'
}

let sht = primitive.shorten();

console.log('shorten value',sht);

let anotherStr = 'I am learning JS';


console.log(anotherStr.shorten());


console.log(anotherStr.lastIndexOf())