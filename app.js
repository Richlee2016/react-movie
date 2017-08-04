var express = require('express');
var path = require('path');
var proxyMiddleware = require('http-proxy-middleware')
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(proxyMiddleware([
    '/api/v0/users',
    '/api/v0/movies',
    '/api/v0/session'
], {
    target: 'http://192.168.2.249:3006/',
    changeOrigin: true
}));

app.get('/', function(req, res) {
    res.sendfile('./dist/index.html');
})


app.listen(3002);