const express = require('express');

const app = express();

app.get('/', function(req,res) {
    res.send('Welcome to my Web')
});

app.get('/contact', (req,res) => {
    
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

app.listen(3000, () => console.log('App up n running'));