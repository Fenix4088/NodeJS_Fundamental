import { IncomingMessage, ServerResponse } from "http";

export type IEndpoints = {
  [k in `/${string}`]: IEndpointsContent;
};

export type IEndpointsContent = {
  [k in TCrudTitles]?: TRequestHandler;
};

export type TRequestHandler = (req: IncomingMessage, res: ServerResponse) => void;

export type TCrudTitles = 'GET' | 'POST' | 'DELETE' | 'PUT';

export interface IRouter {
  //  request(method: TCrudTitles, path: keyof IEndpoints, handler: Function): void;
}
