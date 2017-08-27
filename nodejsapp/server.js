const os = require('os');
const express = require('express');
const server = express();

server.use(function (req, res, next) {
    console.log(os.hostname(), req.method, req.url);
    next();
});

server.get('/me', function (req, res) {
    res.set('Content-Type', 'text/plain');
    res.set('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
    res.send(os.hostname());
});

server.listen(80);
