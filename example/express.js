//node环境的后端小型服务器

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.writeHeader('200');
    res.end('asdfasdfsadf');
});

app.listen('3001', function() {
    console.log('has listen port %s', '3001');
});