const express = require('express');
const hbs = require('hbs');
const app = express();

const midlewares = require('./middlewares/appMiddleware')


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(midlewares.logger)

app.get('/', function(req,res) {
    res.send('Welcome to my app');
});


app.use(midlewares.pageNotFound);

app.use(midlewares.errorHandler);


app.listen(3002, () => console.log('Server running on port 3002'));