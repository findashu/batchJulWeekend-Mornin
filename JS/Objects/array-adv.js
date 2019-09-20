const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];


// Q. Give array of inventors ' first and last name '
// ['Albert Einstein', 'Issac Newton',]

// let fullName = [];

// for(let i =0; i < inventors.length; i++) {
//     let name = inventors[i].first +' '+ inventors[i].last;
//     fullName.push(name);
// }



// let fullName = inventors.map(function(ele,ind,arr) {
   
//     return `${ele.first} ${ele.last}`
   
// });

let fullName = inventors.map(ele =>  `${ele.first} ${ele.last}`)



Array.prototype.myMap = function(cb){
    // storage
    let storage = [];
    for(let i = 0; i< this.length; i++) {
        let val = cb(this[i], i, this);
        storage.push(val);
    }
    return storage;

}

let fN = inventors.myMap(function(ele,ind,arr) {
    return `${ele.first} ${ele.last}`
});

console.log(fullName);

console.log('MyMap', fN);


// Q. Filter the list of inventors for those who were born in the 1500's;


// let fifteen = [];

// for(let i =0; i< inventors.length; i++) {

//     if(inventors[i].year >=1500 && inventors[i].year < 1600) {
//         fifteen.push(inventors[i]);
//     }

// }




// let fifteen = inventors.filter(function(ele,ind,arr) {
//     return ele.year >= 1500 && ele.year < 1600
// })

let fifteen = inventors.filter(ele => ele.year >= 1500 && ele.year < 1600)







Array.prototype.myFilter = function(cb) {

    // need a storage to store filtered item

    let storage = [];

    // need to loop the array

    for(let i = 0; i< this.length; i++) {

        // call cb fn if it returns true then add the element in storage otherwise ignore

        if(cb(this[i], i, this)) {

            storage.push(this[i]);
        }
    }

    // return the storage
    return storage;
}


let fif = inventors.myFilter(ele => ele.year >= 1500 && ele.year < 1600);

console.log('Myfilter', fif)


console.log(fifteen);


// 3. Sort the inventors by birthdate, oldest to youngest;


// let sorted = inventors.sort(function(a,b) {
//     if(a.year > b.year) {
//         return -1
//     }else {
//         return 1;
//     }
// })

let sorted = inventors.sort((a,b) => a.year > b.year ? -1 : 1)

console.log('Sorted', sorted);




// Q. How many years did all the inventors live?


// let totalYearLived = 0;


// for(let i = 0; i< inventors.length; i++) {

//     totalYearLived = totalYearLived + inventors[i].passed - inventors[i].year;


// }



// let totalYearLived = inventors.reduce(function(total, ele) {
//     return total + ele.passed - ele.year;
// }, 0)

let totalYearLived = inventors.reduce((total, ele) => total + ele.passed - ele.year, 0);

console.log(totalYearLived);


let str = 'JS'

console.log(Array.isArray(inventors));

console.log(Array.isArray(str))




















