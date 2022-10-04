const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our homepage');
    }
    if(req.url === '/about'){
        res.end('Here is our short history');
    }
    else {
         res.end(`
            <h1>Ooops!!!</h1>
            <a href='/'>back </a>
         `);
    }
   
    
})

server.listen(5000);