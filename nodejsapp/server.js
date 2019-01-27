const os = require('os');
const express = require('express');

const server = express();
server.disable('x-powered-by');

server.get('/', function (req, res) {
    res.set('Content-Type', 'text/plain');
    res.set('X-Auth-User', req.headers['x-auth-user']);
    res.send('js-' + os.hostname());
});

server.listen(80);
