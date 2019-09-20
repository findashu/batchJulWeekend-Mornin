function Person (name, age) {
    
    this.name = name;
    this.age = age;
    this.desc = function() {
        console.log(this.name,this.age)
    }
    // console.log(this);
    // return {};
}

let js = new Person('JS',20);
let sahana = new Person('Sahana', 15);

console.log(js);

console.log(sahana);

sahana.desc();

// function is also an object
console.log(Person.length);

console.log(Person.constructor);

console.log(js.constructor);

console.log(Person.prototype);

console.log(typeof Person.prototype)



Person.prototype.gender = 'Male';


let mobile = new Person('nokia', 20);

console.log(mobile);

console.log(mobile.name);

console.log(mobile.gender);

console.log(js.gender);


console.log(js.hasOwnProperty('gender'));

// console.log(Person.length)
console.log(js.constructor.hasOwnProperty('gender'));

console.log(js.constructor.prototype.hasOwnProperty('gender'));



console.log(typeof js.age);

let ag = js.age.toString();

console.log(typeof ag);


console.log(js.hasOwnProperty('toString'));

console.log(js.constructor.hasOwnProperty('toString'));

console.log(js.constructor.prototype.hasOwnProperty('toString'));


// console.log(js.constructor.prototype.constructor);


// var str = 'hello';

// var str2 = new String('hello')

// console.log(str.length);

// Object

console.log(Object.hasOwnProperty('toString'));

console.log(Object.prototype.hasOwnProperty('toString'));
