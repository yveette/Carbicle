// [x] initialize and configure Express app
// [x] initialize templating library
// [x] create home controller
// [x] bind routing
// [x] create layout
// create data service
// - [x] read all
// - [x] read one by Id
// - [x] create
// - [x] search
// - [x] edit
// - [x] delete
// - [ ] accessory read
// - [ ] accessory create
// - [ ] attach accessory
// implement controllers
// - [x] home (catalog)
// - [x] about
// - [x] details
// - [x] create
// - [x] improved home (search)
// - [x] edit
// - [ ] create accessory
// - [ ] attach accessory to car
// - [ ] update details to include accessory
// [x] add front-end code
// [x] add database connection
// [x] create Car model
// [x] upgrade car service to use Car model
// [x] add validation rules to Car model
// [x] create Accessory model


const express = require('express');
const hbs = require('express-handlebars');

const initDb = require('./models/index');

const carsService = require('./services/cars');

const { home } = require('./controllers/home');
const { about } = require('./controllers/about');
const create = require('./controllers/create');
const { details } = require('./controllers/details');
const { notFound } = require('./controllers/notFound');
const edit = require('./controllers/edit');
const deleteCar = require('./controllers/delete');

start();

async function start() {
    await initDb();

    const app = express();

    app.engine('hbs', hbs.create({
        extname: '.hbs'
    }).engine);
    app.set('view engine', 'hbs'); // render => add '.hbs' to searched file

    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(carsService())

    app.get('/', home);
    app.get('/about', about);
    app.get('/details/:id', details);

    app.route('/create')
        .get(create.get)
        .post(create.post);
    // or:
    // app.get('/create', create.get);
    // app.post('/create', create.post);

    app.route('/delete/:id')
        .get(deleteCar.get)
        .post(deleteCar.post);

    app.route('/edit/:id')
        .get(edit.get)
        .post(edit.post);

    app.all('*', notFound);


    app.listen(3000, () => console.log('Server started on port 3000'));
}