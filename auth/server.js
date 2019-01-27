const http = require('http');
const port = 3000;

const AUTH_SCHEME = 'Bearer';

const server = http.createServer((req, res) => {
    res.setHeader('Cache-Control', 'private, no-cache, no-store');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Content-Length', '0');

    const authorization = req.headers['authorization'];
    if (!authorization ||
        !authorization.startsWith(AUTH_SCHEME) ||
        authorization.length < AUTH_SCHEME.length + 2) {
        res.setHeader('WWW-Authenticate', AUTH_SCHEME);
        res.writeHead(401); // Unauthorized
        res.end();
        return;
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') {
        res.writeHead(405); // Method Not Allowed
        res.end();
        return;
    }

    const originalUri = req.headers['x-original-uri'];
    const bearerToken = authorization.slice(7);
    if (originalUri && bearerToken.startsWith('Hello') && bearerToken.length > 5) {
        res.setHeader('X-Auth-User', bearerToken.slice(5));
        res.writeHead(204); // No Content (Success)
        res.end();
        return;
    }

    res.writeHead(403); // Forbidden
    res.end();
})

server.listen(port, (err) => {
    if (!err) {
        console.log(`auth server listening on ${port}`);
    }
})