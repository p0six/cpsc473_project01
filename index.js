var port = process.env.PORT || 1337;
var deployd = require('deployd')
  , options = {"port": port};

var dpd = deployd(options);
dpd.listen();
console.log("Server running at http://localhost:%d", port);
