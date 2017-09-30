// hello.js
var deployd = require('deployd')
  , options = {port: 3000};

var dpd = deployd(options);

dpd.listen();
