const express = require('express');
const ejs = require('ejs');

const server = express();

server.set('view engine', 'ejs')

server.get('/', function (request, response) {
    response.render('index')
});

server.listen(3030, function () {
    console.log('Server started on port 3030');
});
