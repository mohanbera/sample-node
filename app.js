// it contains the normal node http module 
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api') {
    res.end('Hello World!');
  } else {
    res.end('HELLO WORLD!!!');
  }
});

//server.listen(3000);
