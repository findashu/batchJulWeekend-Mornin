let obj = {
    name:'JS',
    version:'ES6'
}

let obj2 = obj;

obj2.version = 'ES5';

console.log(obj.version); //ES5
console.log(obj2.version); // ES5


let obj3 = {};

Object.assign(obj3, obj);

console.log(obj3);

obj3.version = 'ES7';

console.log(obj.version);
console.log(obj3.version);


let person1 = {
    name:'bottle',
    color:'blue'
}

let person2 = {
    name:'bottle',
    color:'blue'
}


console.log(JSON.stringify(person1) == JSON.stringify(person2));