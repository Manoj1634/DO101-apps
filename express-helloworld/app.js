var express = require('express');
var app = express(); // Initialize the express app

var response; // Declare the response variable

// Define the first route for '/'
app.get('/', function (req, res) {
    response = 'This is version 3 of the app.\n'; 
    res.send(response); // Send response for version 2
});

// Define a second route for '/hello'
app.get('/hello', function (req, res) {
    res.send('Hello World!\n'); // Send response for hello route
});

// Start the server on port 8080
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
