var http = require('http');
var querystring = require('querystring');
//侦听服务器的request事件
http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    var postData = '这是来自node服务器的数据';
    req.setEncoding('utf8');
    //侦听请求的data事件
    req.on('data', function(trunk) {
        postData += trunk;
    });
    //侦听请求的end事件
    req.on('end', function() {
        res.end(postData);
    });
}).listen(8080);
console.log('服务器启动完成');