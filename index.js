// BEGIN: Provided by Azure Hello World App
var http = require('http');
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});
var port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
// END: Provided by Azure Hello World App
// BEGIN: Provided by deployd - see nots here:
// Deployd mounts its server on process.server. This means you can only run one Deployd server in a process.
// Deployd loads resources from the process.cwd. Add this to ensure you are in the right directory: process.chdir(__dirname).
// In order to access the /dashboard without a key you must run Deployd with the env option set to development.
var deployd = require('deployd')
  , options = {port: 3000};
var dpd = deployd(options);
dpd.listen();
