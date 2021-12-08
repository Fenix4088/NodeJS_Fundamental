import http from 'http';

const PORT = process.env.PORT || 5000;

type IEndpoints = {
      [k in `/${string}`]: IEndpointsContent
}

type IEndpointsContent = {
      [k in TCrudTitles]: () => void
}

type TCrudTitles = 'GET' | 'POST' | 'DELETE';


class Router {
      readonly endpoints: IEndpoints
      constructor() {
            this.endpoints = {
                  '/users': {
                        'GET': () => {},
                        'POST': () => {},
                        'DELETE': () => {}
                  }
            } 
      }

      request: () => {

      }
}


const server = http.createServer((req, res) => {

      res.writeHead(200, {
            'Content-type': 'application/json'
      })
      
      if(req.url === '/users') {
            return res.end(JSON.stringify({
                  id: 1,
                  name: 'User'
            }))
      }

      if(req.url === '/posts') {
            return res.end('POSTS')
      }
      
});

server.listen(PORT, () => {
      console.log(`Server started ${PORT}`);
});