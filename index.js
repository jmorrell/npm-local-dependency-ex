const foo = require('foo');
const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(foo);
})

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
