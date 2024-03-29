﻿const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const jwt = require('./Helpers/jwt')
const errorHandler = require('./Helpers/error-handler')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// use JWT auth to secure the api
app.use(jwt())
// api routes
app.use('/accounts', require('./Controllers/AccountController'))
app.use('/surveys', require('./Controllers/SurveyController'))

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
