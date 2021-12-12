import { EventEmitter } from 'events';
import http, { IncomingMessage, Server, ServerResponse } from 'http';
import Router from './Router';
import { IEndpoints, IEndpointsContent, TCrudTitles, TRequestHandler } from './types';

export default class Application {
  emitter: EventEmitter;
  server: Server;
  middlewares: TRequestHandler[];

  constructor() {
    this.emitter = new EventEmitter();
    this.server = this.createServer();
    this.middlewares = [];
  }

  public use = (middleware: TRequestHandler) => {
    this.middlewares.push(middleware);
  };

  public listen = (port: number | string, callback: () => void) => {
    this.server.listen(port, callback);
  };

  public addRouter = (router: Router) => {
    const endpointsKeys = Object.keys(router.endpoints) as (keyof IEndpoints)[];

    endpointsKeys.forEach((path) => {
      const endpoint = router.endpoints[path];

      const endpointKeys = Object.keys(endpoint) as (keyof IEndpointsContent)[];

      endpointKeys.forEach((method) => {
        const handler = endpoint[method];

        this.emitter.on(this.getRouteMask(path, method), (req: IncomingMessage, res: ServerResponse) => {
          handler && handler(req, res);
        });
      });
    });
  };

  private createServer = () => {
    return http.createServer((req, res) => {
      let body = '';

      req.on('data', (chunk) => {
        body += chunk;
      });

      req.on('end', () => {
        if (body) {
          //@ts-ignore
          req.body = JSON.parse(body);
        }

        this.middlewares.forEach((middleware) => middleware(req, res));


        //@ts-ignore
        this.emitter.emit(this.getRouteMask(req.pathname as keyof IEndpoints, req.method as TCrudTitles), req, res);
      });
    });
  };

  private getRouteMask = (path: keyof IEndpoints, method: TCrudTitles) => {
    return `[${path}]:[${method}]`;
  };
}
