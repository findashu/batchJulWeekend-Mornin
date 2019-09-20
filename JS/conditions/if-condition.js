console.log('Program Starts')

var totalPurchase = 50;

var discount = 20;

var biggerDiscount = 1000;


var finalAmount = totalPurchase;

// 

// if (totalPurchase > 500) {
//     // if block
//     console.log('If Block')
//     finalAmount = totalPurchase - discount;
// } else {
//     console.log('Else block')
//     finalAmount = totalPurchase;
// }


if (totalPurchase > 50 && totalPurchase <=5000) {
    console.log('If block ');

    finalAmount = totalPurchase - discount;

}else if(totalPurchase > 5000) {

    console.log('Else if Block');

    finalAmount = totalPurchase - biggerDiscount;
    console.log('Insde elseif ', finalAmount)
} 



console.log(finalAmount)

console.log('Program Ends')