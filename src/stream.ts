// Readale - чтение
// Writable - запись
// Duplex - Для чтения и записи Readale + Writable
// Transform - такой же как Duplex, но может изменить данные по мере чтения

import fs from 'fs';
import path from 'path';
import http from 'http';

// * Read file with FS module
// fs.readFile(path.resolve(__dirname, 'test2.txt'), 'utf8', (err, data) => {
//   if (err) {
//     console.trace(err.message);
//     return;
//   }
//   console.log(data);
// });

//* Read file with stream
// const stream = fs.createReadStream(path.resolve(__dirname, 'test2.txt'), 'utf-8');
// // * event DATA give us a possibility to read file
// stream.on('data', (chunk) => {
//   console.log(chunk);
// });

// stream.on('end', () => console.log('End reading'));
// stream.on('open', () => console.log('Start reading'));
// stream.on('error', (e) => console.log(e));

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'));

// for (let i = 0; i < 20; i++) {
//   writableStream.write(i + '\n');
// }

// writableStream.end();
// writableStream.close();
// writableStream.destroy();
// writableStream.on('error');

http.createServer((req, res) => {
  //req - readable stream
  //res - writable stream
  const stream = fs.createReadStream(path.resolve(__dirname, 'test2.txt'));

  // * Stream закончит читать раньше чем пользователь скачает
  // stream.on('data', (chunk) => res.write(chunk));
  // stream.on('data', (chunk) => res.write(chunk));

  stream.pipe(res)
});
