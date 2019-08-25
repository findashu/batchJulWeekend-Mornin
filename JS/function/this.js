
// this keyword points to current object

// Globally
// console.log(this);

var myName = 'ashu';

console.log(myName);

console.log(this.myName);


function foo() {
    console.log('from function',this);
}

// function call points to global obj
foo();



var obj = {
    name: 'JavaScript',
    desc: function() {
        console.log(this);
    }
}

// method call points to current obj
obj.desc();