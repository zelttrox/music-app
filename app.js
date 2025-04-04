const express = require('express')
const server = express()

function StartServer() {

server.get('/', (request, response) => {
    response.send('Hello World!');
  });

server.listen(3030, () => {
    console.log('Server started on port 3000');
  });

}

StartServer()
