const http = require('http');
const Tailor = require('node-tailor');
const TEMPLATE_PATH = __dirname + '/templates/';

const tailor = new Tailor({
//  templatesPath: TEMPLATE_PATH,
});


const server = http.createServer((req, res) => {
  if (req.url === '/') {
    req.url += 'index'; 
  }

  return tailor.requestHandler(req, res);
});

server.listen(process.env.PORT || 8080, () => {
  console.log(' -> Layout Service running on localhost:8080');
});
