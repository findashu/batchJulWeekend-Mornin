// var abc = 10;

var name = "abc";

console.log(name);

console.log(typeof name);

// Escape Characters

var sent = "I'm learning \"javascript\" ";

console.log(sent);

var para = "Hello, Learning FullStack Development.\nThat includes JS HTML CSS"

console.log(para);

// \t => tab
// \u => unicode character;


var un = 'THis is unicode char \u221E'

console.log(un);



var firstName = "Java";

var lastName = " Script";

var age = 26;

var fullName = firstName + lastName;

console.log(fullName);


var intro = "Hello I'm " + firstName + " " + lastName + " I'm " +age+ " year old."

console.log(intro);


var strNum  =  "Hi " + 10;

console.log(strNum);

console.log(typeof strNum)


var strBool = 'Hello' + true;

console.log(strBool);
console.log(typeof strBool);

var boolNum = 10 + true;

console.log(boolNum);

console.log(typeof boolNum);




// String Literal

var lit = `This is " "a ' string`;

console.log(lit);

console.log(typeof lit);

var literalWay = `Hello I'm ${firstName} ${lastName} and 
I'm ${age} years old.`;


console.log(literalWay);


var s = new String('JS');