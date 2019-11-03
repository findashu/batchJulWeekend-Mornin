const express = require('express');
const hbs = require('hbs')
const errorHandler = require('./middlewares/errorHandler');
const appMiddleware = require('./middlewares/appMiddleware');
const app = express();

app.set('views', __dirname+'/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials')

app.use(express.static(__dirname+'/static'))

app.use(appMiddleware.logger);

app.get('/', function(req,res) {
    res.render('index')
});


app.get('/projects', function(req,res) {
    res.render('project')
})

app.use(errorHandler.notFound);
app.use(errorHandler.handleError);

app.listen(3000, () => console.log('Server up n running'));