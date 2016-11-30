//benchmark是一个测试JS运行效率的库

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

function test1(num) {
    return num++;
}

function test2(num) {
    return parseInt(num + 1);
}

suite
    .add('test1 speed', function() {
        test1(500);
    })
    .add('test2 speed', function() {
        test2(500);
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({async: true});