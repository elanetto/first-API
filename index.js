import http from "http";

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log('Request received: ', req.url);
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'GET') {
        switch(req.url) {
            case '/test':
                res.end('This is a test path');
                break;
            case '/hei': 
            case '/hola':   
            case '/hello':
                res.end('Hello path');
                break;
            case '/about':
                res.end('About path');
                break;
            case '/json':
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ first: 'Object' }));
                break;
            default:
                res.end('Hello World!');
                break;
        }
    } else if (req.method === 'POST') {
        res.end("From post request");

    } else if (req.method === 'PUT') {
        res.appendHeader('Access-Control-Allow-Methods', 'PUT');
        res.end("From put request");

    } else { 
        res.end('Something went horribly wrong');
    }
});

server.listen(3000, () => {
    console.log('The server has started: ', port);
});
