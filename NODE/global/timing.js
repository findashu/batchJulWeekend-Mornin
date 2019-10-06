setTimeout(function() {
    console.log('Set timeout in 2 sec')
}, 2000);

var i = 0

setInterval(function(){
    console.log('Every Sec');
    if(i == 4) {
        clearInterval(this);
    }

    i++
}, 1000);

// console.log(id);

setImmediate(function() {
    console.log('Hey execute immediate')
})

setTimeout(function() {
    console.log('timeout at 0')
}, 0)