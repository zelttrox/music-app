const express = require('express');
const ejs = require('ejs');

function StartServer() {

// Initialize Express framework
const server = express();

// Setup server route
server.get('/', function(request, response) {
    response.render('index')
  });

// Set render engine
server.set('view engine', 'ejs')

// Listen to provided port
server.listen(3030, function() {
    console.log('Server started on port 3000');
  });
}

StartServer();
