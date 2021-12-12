//@ts-nocheck
import { TRequestHandler } from "./types";


export const parseUrl: (baseUrl: string) => TRequestHandler = (baseUrl: string) => (req, res) => {
      if(!req.url) return;

      const parsedUrl = new URL(req.url, baseUrl);
      const params = {}

      parsedUrl.searchParams.forEach((value, key) => params[key] = value);

      //@ts-ignore
      req.pathname = parsedUrl.pathname;
      req.params = params;
      
      
}