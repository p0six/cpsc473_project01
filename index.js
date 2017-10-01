var port = process.env.PORT || 1337;
var deployd = require('deployd')
  , options = {"port": port};

var dpd = deployd(options);

dpd.listen();




//var http = require('http');
//var server = http.createServer(function(request, response) {
    //response.writeHead(200, {"Content-Type": "text/plain"});
    //response.end("Hello World!");
//});
//var port = process.env.PORT || 1337;
//server.listen(port);
console.log("Server running at http://localhost:%d", port);
