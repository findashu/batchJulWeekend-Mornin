const express = require('express');
const fs = require('fs');
const app = express();


// middlewares
// to parse body Data (express uses bodyparser module)
app.use(express.json());
app.use(express.urlencoded({extended:false}));



function logger(req,res,next) {
   console.log(req.method, req.url)
    next();
}

app.use(logger);

function routeMiddleware(req,res,next) {
    console.log('Route Level Middleware');
    next();
}


// app.use(function(req,res,next) {
//     next(new Error('My error object'))
// });



app.get('/',  function(req,res) {

    // console.log(__dirname)
    console.log('Query name ',req.query.name);


    fs.readFile(__dirname+'/view/index.html', {encoding:'utf8'}, function(err,data) {
        if(err) {
            res.send('Something went wrong')
        }else {
            res.write(data);
            res.end();
        }
    })
});


app.get('/contact', routeMiddleware, function(req,res,next) {
    
    fs.readFile(__dirname+'/view/contct.html', {encoding:'utf8'}, function(err,data) {
        if(err) {
            next(err)
        }else {
            res.status(200).write(data);
            res.end();
        }
    });
});


app.post('/contact', (req,res) => {

    let data = req.body;

    console.log(data)
   
    res.send('Thanks for contacting us')
});

// handle 404
app.use(function(req,res,next) {
    res.status(404).send('Page not found');
})

// handle global error
app.use(function(err,req,res,next) {
    console.log(err);
    res.status(500).send('Something went wrong')
})


app.listen(3000, () => console.log('Server up and running on port 3000'))