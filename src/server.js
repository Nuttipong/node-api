const express = require('express');
const app = express();
const router = require('./api/route');

// setup the app middleware
require('./middleware/appMiddleware')(app);

// setup the app api
app.use('/api', router);

// export the app for testing
module.exports = app;