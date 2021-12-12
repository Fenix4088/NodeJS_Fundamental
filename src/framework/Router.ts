import EventEmitter from "events";
import { IEndpoints, IEndpointsContent, TCrudTitles, TRequestHandler } from "./types";

//create event emmiter
const emitter = new EventEmitter();

// ! Create Router for routing endpoints
export default class Router {
      endpoints: IEndpoints;
    
      constructor() {
        this.endpoints = {};
      }
    
      private request = (method: TCrudTitles = 'GET', path: keyof IEndpoints, handler: TRequestHandler) => {
        if (!this.endpoints[path]) {
          this.endpoints[path] = {} as IEndpointsContent;
        }
    
        const endpoint = this.endpoints[path];
    
        if (endpoint[method]) {
          throw new Error(`Method ${method} alredy exciste in ${path}`);
        }
    
        endpoint[method] = handler;
    
        // emitter.on(`[${path}]:[${method}]`, (req: IncomingMessage, res: ServerResponse) => {
        //   handler(req, res);
        // });
      };
    
      public get(path: keyof IEndpoints, handler: TRequestHandler) {
        this.request('GET', path, handler);
      }
    
      public post(path: keyof IEndpoints, handler: TRequestHandler) {
        this.request('POST', path, handler);
      }
    
      public delete(path: keyof IEndpoints, handler: TRequestHandler) {
        this.request('DELETE', path, handler);
      }
    
      public put(path: keyof IEndpoints, handler: TRequestHandler) {
        this.request('PUT', path, handler);
      }
    }