const http = require('http')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('X-Foo', 'foo')
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('ok')
})