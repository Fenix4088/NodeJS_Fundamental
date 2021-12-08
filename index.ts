import http from 'http';

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {

      res.end('Server working');
      
});

server.listen(PORT, () => {
      debugger;
      console.log(`Server started ${PORT}`);
      
});