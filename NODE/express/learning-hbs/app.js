const express = require('express');
const hbs = require('hbs');
const app = express();

const midlewares = require('./middlewares/appMiddleware')

// set views directory
app.set('views', __dirname + "/views");
// set view engine
app.set('view engine', 'hbs');

// registor partials dir with hbs
hbs.registerPartials(__dirname+'/views/partials');

// register static content directory
app.use(express.static(__dirname+'/static'))

// parse the body data
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(midlewares.logger)

app.get('/', function (req, res) {

    res.render('index', {
        title:'Home',
        layout:'layout',
        name: 'Fullstack Development',
        htmlContent: '<p>THis is HTML Content</p>',
        elegible: false,
        hobbies: ['Music', 'Reading', 'Coding', 'Riding'],
        description: {
            name: 'JS',
            age: 20,
            gender: 'Female'
        },
        friends: [
            {
                name: 'Ryan',
                gender: 'Male'
            },
            {
                name: 'Dhal',
                gender: 'Male'
            },
            {
                name: 'Ronnie',
                gender: 'Female'
            }
        ]
    });

});

app.get('/contact', function(req,res) {
    res.render('contact', {
        title:'Contact Us'
    })
})

app.get('/about', function(req,res) {
    res.render('about', {
        title:'About US'
    })
})

app.use(midlewares.pageNotFound);

app.use(midlewares.errorHandler);


app.listen(3002, () => console.log('Server running on port 3002'));