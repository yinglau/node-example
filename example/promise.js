var promise = (function(str) {
    return new Promise(function(resolve, reject) {
        //console.log('aa');
        //resolve(str);
        setTimeout(function() {
            resolve(str)
        }, 4000);
    });
})('aaa');

promise
    .then(function(fulfilled) {
        console.log('fulfilled', fulfilled);
        return promise;
    }, function(reject) {
        console.log('reject');
    })
    .then(function(fulfilled) {
        console.log('fulfilled', fulfilled);
    })
    .then(function(fulfilled) {
        console.log('fulfilled', fulfilled);
    })