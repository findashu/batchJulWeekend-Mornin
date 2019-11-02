const express = require('express');

const app = express();



app.get('/', function(req,res) {
    res.send('Welcome to my Web')
});

app.get('/contact', (req,res) => {
    
    console.log('Query Object', req.query)

    let qName = req.query.name;

    console.log(qName)

    res.send('My Contact Page')
});

app.post('/contact', (req,res) => {
    // 
    res.send('Thanks for contacting us');
});


app.delete('/test-delete', (req,res) => {
    res.send('Success delete route');
})

app.put('/test-put', (req,res) => {
    res.send('Sucess put route')
})



app.get('/myname/:names/:last', function(req,res) {

    let param = req.params.names

    // parameters object
    console.log(req.params);

    console.log(param);

    res.send('Dynamic route '+param)
});

app.get('/:product', function(req,res) {
    res.send('THis is my product')
})

app.listen(3000, () => console.log('App up n running'));