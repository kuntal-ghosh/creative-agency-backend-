const express = require('express');
const bodyParser = require('body-parser');
const orders = require('../routes/Orders');
const services = require('../routes/Services');
const reviews = require('../routes/Reviews');
const admins = require('../routes/Admins');

const fileUpload = require('express-fileupload');

// const genres = require('../routes/genres');
// const customers = require('../routes/customers');
// const movies = require('../routes/movies');
// const rentals = require('../routes/rentals');
// const users = require('../routes/users');
// const auth = require('../routes/auth');
// const returns = require('../routes/returns');
// const error = require('../middleware/error');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(fileUpload());
    app.use('/api/orders',orders);
    app.use('/api/services',services);
    app.use('/api/reviews',reviews);
    app.use('/api/admins',admins);

//   app.use('/api/genres', genres);
//   app.use('/api/customers', customers);
//   app.use('/api/movies', movies);
//   app.use('/api/rentals', rentals);
//   app.use('/api/users', users);
//   app.use('/api/auth', auth);
//   app.use('/api/returns', returns);
//   app.use(error);
}