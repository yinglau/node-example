/**
 * request,http example
 */

var http = require('http');
var request = require('request');

var promise = new Promise(function(resolve, reject) {
    request('https://cnodejs.org/', function(err, res, body) {
        if(err) {
            reject(err);
        }else {
            resolve(body);
        }
    });

});

//request('https://cnodejs.org/', function(err, res, body) {
//    if(err) {
//        console.log(err);
//    }else {
//        console.log(body);
//    }
//});


var server = http.createServer(function(req, res) {
    promise.then(function(v) {
        res.end(v);
    }, function(e) {
        res.end(e);
    })
});

server.listen("8080", function(err) {
    if(!err) {
        console.log('port:8080 has listening');
    }
})

