//require('./api.data.db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost:27017/microblog';



// Define the port to listed on
app.set('port', 3000);

// Log every request
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
})

// Set static directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// Enable parsing of post forms
app.use(bodyParser.urlencoded({ extended: false }));

// Configure routing
//app.use('api', routes);

// listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Server listening on port', port);
});