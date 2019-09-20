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
};


let keys = Object.keys(person);

console.log(keys);

for(var i =0; i< keys.length; i++) {
    console.log(person[keys[i]]);
}


Object.keys(person).forEach(function(ele,ind,arr) {
    console.log(ele, person[ele])
});


for(var key of Object.keys(person) ) {
    console.log(person[key])
};

// for in loop


for (var prop in person) {
    if(person.hasOwnProperty(prop)) {
        console.log('for in', person[prop])
    }
}