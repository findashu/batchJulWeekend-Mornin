var result = {
    math:20,
    science: 30,
    history: 50,
    english: 60,
   "social science" : 90
}


console.log(result);

console.log(typeof result);


// Dot notation and Bracket Notation

// read a property
console.log(result.math);

// update a property value
result.math = 50;

console.log(result);

console.log(result.physics);


// add a new property
result.physics = 30;

console.log(result);

// delete a property
delete result.math;

console.log(result);


// console.log(result.social science')

// bracket Notation



console.log(result['social science'])

var ashuMath = 'physics';


console.log(result[ashuMath]);

result[ashuMath] = 50;

console.log(result);



var person = {
    name: 'Thor',
    age : 30,
    gender : 'Male',
    married : false,
    hobbies: ['smashing', 'booz', 'playing with lights'],
    address: {
        street: 102,
        place : 'ashgaurd'
    }, 

    education : [
        {
            degree : 'graduation ',
            yearOfPassing: 2010,
            honor: false
        },
        {
            degree: 'masters',
            yearOfPassing: 2015,
            honor: true
        },
        {
            degree : 'phd',
            yearOfPassing: 2020,
            honor: false
        }
    ],

    freinds : [
        {
            name : 'Iron Man',
            hobbies: ['gadgets', 'science', 'computers']
        }
    ]
}


console.log(person.hobbies[0]);

console.log(person.address.street);

console.log(person.education[0].degree);

console.log(person['address']['street']);

person.education[0].studyField = 'CS';

console.log(person)

