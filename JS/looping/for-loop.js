// for(var i = 1; i <= 10; i++) {

//     // console.log("2 x "+i+" = "+2*i);

//     console.log(`3 x ${i} = ${3*i}`)

    
// }


// for(var i = 2 ; i<= 10; i++) {

//     for(var j = 1; j<=10; j++) {
        
//         // console.log(i + " x " + j + " = "+ i*j)

//         console.log(`${i} x ${j} = ${i*j}`)

//     }

// }


// WAP to count all even numbers b/w 1-100

// var counter = 0

// for (var i = 1 ; i <=100 ; i++) {

//     if(i %2 == 0) {

//         console.log(i);
//         counter++;

//     }
// }

// console.log(counter)


var arr = [10,20,30,40,50];

// [20,40,60,80,100]


var arr2 = [];

// for(var i = 0; i < arr.length; i++) {

//     // console.log(arr[i]);

//     var newVal = arr[i]*2;

//     // arr2.push(newVal);

//     arr2[i] = arr[i]*2;

// }

// console.log(arr2);


// Reverse a array;


for(var i = arr.length-1; i >=0; i--) {
    arr2.push(arr[i]);

    // arr2[i] = arr[i];
}

console.log(arr2);