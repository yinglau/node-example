/**
 * 测试用例
 * 本例需要用到的库
 * mocha 测试框架
 * should 断言库 (类似的还有chai, expect等等)
 * istanbul 测试覆盖率
 * (命令行使用)$ istanbul cover --hook-run-in-content node_modules/mocha/bin/_mocha  注意：mocha需要安装在项目里
 * api使用 node --harmony ./node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha  注意：mocha, istanbul安装在项目里
 */

var fibonacci = function(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (typeof n !== 'number') {
        throw new Error('argv must be aaaa number');
    }
    if (n < 0) {
        throw new Error('argv must be gt 0');
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

//exports.fibonacci = fibonacci;
//module.exports  = fibonacci;
module.exports = fibonacci;