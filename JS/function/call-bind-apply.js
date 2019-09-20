let person1 = {
    name: 'JS',
    age : 23
    // description: function() {
    //     console.log(this.name, this.age);
    // }
}


let person2 = {
    name:'foo',
    age : 35
    // description: function() {
    //     console.log(this.name,this.age)
    // }
}

function description(gender,married) {
    console.log(this.name, this.age,gender,married)
}

// person1.description();
// person2.description();
// call();
description.call(person1,'Female',false);

description.call(person2, 'Male',true);


// apply()


description.apply(person1,['Female', false])


// bind();

let desc = description.bind(person2, 'male',true);

desc();


function add (a,b) {

    console.log(arguments);

    Array.prototype.push.call(arguments,8);

    console.log(arguments)
    // arguments.push(6);
    return a+b
}


let sum = add(2,3,4);

console.log(sum)