import { TRequestHandler } from './types';
export const parseJson: TRequestHandler = (req, res) => {
  //@ts-ignore
  res.send = (data) => {
    res.writeHead(200, {
      'Content-type': 'application/json',
    });

    res.end(JSON.stringify(data));
  };
};
