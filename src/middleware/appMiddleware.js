const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// setup global middleware here
module.exports = function(app) {
    app.use(morgan('dev'));
    app.use(express.static('src'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
};