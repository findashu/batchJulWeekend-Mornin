let today = new Date();


console.log(today);


// getter and setter methods


// getDate()


console.log(today.getDate());
console.log(today.getFullYear());
console.log(today.getDay());


console.log(today.getMonth());

console.log(today.getTime());


console.log(today.getMinutes());

console.log(today.getHours());


let epochTime = new Date(0);

console.log(epochTime);

let dt = '08/31/2019'

let date = new Date(dt);

console.log(date);


// setter methods


let tmrw = today.setDate(9);

console.log(new Date(tmrw));

let mnth = today.setMonth(9);

console.log(new Date(mnth));


