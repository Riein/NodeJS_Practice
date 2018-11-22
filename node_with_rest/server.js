// server.js

// BASE SETUP
// ==============================================

// call the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // setting our port

// ROUTES FOR OUR API
// ===============================================
var router = express.Router(); // get an instance of the express Router

// test route

router.get('/', function(req, res) {
    res.json({ message: 'The api is GETting correctly.'});
});

// Additional API routes here

// REGISTER OUR ROUTES
app.use('/api', router);

// START THE SERVER
// ================================================
app.listen(port);
console.log('Listening on port ' + port);

