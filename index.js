var port = process.env.PORT || 1337;
var MONGODB_URI = process.env.MONGODB_URI;
var deployd;
if (MONGODB_URI === undefined) {
  deployd = require('deployd')
    , options = {
    "port": port,
    "env": "development"
  };
  console.log("MONGODB_URI is undefined");
} else {
  deployd = require('deployd')
    , options = {
    "port": port,
    "db": {
      connectionString: MONGODB_URI,
    },
    "env": "development"
  };
  console.log("MONGODB_URI is defined: " + MONGODB_URI);
}
var dpd = deployd(options);
dpd.listen();
console.log("Server running at http://localhost:%d", port);
