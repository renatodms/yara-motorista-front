//imports
var express = require('express'),
    app = express(),
    http = require('http').Server(app);

//config
app.use(express.static(__dirname + '/view'));

//listen
var port = process.env.PORT || 8882;
http.listen(port, () => {
    console.log('FRONT');
    console.log('port: %d', port);
});