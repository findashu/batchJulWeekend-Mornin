function add (a,b, cb) {
    if(typeof a != 'number') {
        cb('Pass a number', null)
    }else {
        cb(null, a+b);
    }
}

function square(x, cb) {
    if(typeof x != 'number') {
        cb('Square acepts a number', null)
    }else {
        cb(null, x*x);
    }
}

// 
add(2,3, function(err, data) {
    if(err) {
        console.log(err)
    }else {
        console.log(data);

        square(data, function (err, data) {
            if(err) {
                console.log(err)
            }else {
                console.log('Square is ', data)
            }
        });
    }
});