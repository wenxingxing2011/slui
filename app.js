var http = require('http');
var express = require('express');
var app = express();
app.use("/dist", express.static(__dirname + '/dist'));

// 创建服务端
http.createServer(app).listen('8080', function() {
	console.log('启动服务器完成');
});