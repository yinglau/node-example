/**
 * 本实例简单的爬虫程序，抓取某资源页面的内容，返回后分析内容标签，组合成需要的数据对象
 * node ./example/reptile.js, 在浏览器输入localhost:3001访问可看到返回的内容
 */

var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/', function(req, res, next) {
    superagent
        .get('https://cnodejs.org/')
        .end(function(err, sres) {
            if(err) {
                return next(err);
            }
            var data = [];
            var $ = cheerio.load(sres.text);
            var $cell = $('#topic_list .topic_title');
            $cell.each(function(key, item) {
               data.push({
                   title: $(item).attr('title'),
                   href: $(item).attr('href')
               });
            });
            res.send(data);
        });

}).listen('3001');
