var http = require('http')
// npm package for http

var PORT = process.env.PORT || 7000

// localhost === 127.0.0.1

function handleRequest(request, response) {
  response.end('You have beautiful eyes! ;)' + request.url)

}

var server = http.createServer(handleRequest)

server.listen(PORT, function() {
  console.log('Listen on port: ' , PORT)

})

var PORT2 = process.env.PORT2 || 7500

// localhost === 127.0.0.1

function handleRequest2(request, response) {
  response.end('You smell like dirty socks! ;)' + request.url)

}

var server2 = http.createServer(handleRequest2)

server2.listen(PORT2, function() {
  console.log('Listen on port: ' , PORT2)

})