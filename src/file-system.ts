import fs, { appendFile, readFile } from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

// fs.mkdir(path.join(__dirname, 'testDir'), (error) => {
//       if(error) {
//             console.log(error);
//             return;
//       }

//       console.log('Folder created');

// });

// fs.rmdir(path.join(__dirname, 'testDir'), (error) => {
//       if(error) {
//             console.log(error);
//             return;
//       }

//       console.log('Folder deleted');

// });

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'some text content', (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('File created');
// });

// fs.appendFile(path.resolve(__dirname, 'test.txt'), ' append new text', (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('File updated');
// });

// ---------------------

const writeFileAsync = async (path: string, data: string): Promise<string> => {
  return new Promise((res, rej) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        return rej(err);
      }
      res(path);
    });
  });
};

const appendFileAsync = async (path: string, data: string): Promise<string> => {
  return new Promise((res, rej) => {
    fs.appendFile(path, data, (err) => {
      if (err) {
        return rej(err);
      }
      res(path);
    });
  });
};

const readFileAsync = async (path: string): Promise<string> => {
  return new Promise((res, rej) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return rej(err);
      }
      res(data);
    });
  });
};

const removeFileAsync = async (path: string): Promise<string> => {
  return new Promise((res, rej) => {
    fs.rm(path, (err) => {
      if (err) {
        return rej(err);
      }
      res('File deleted');
    });
  });
};

// writeFileAsync(path.resolve(__dirname, 'test2.txt'), '1')
//   .then((path) => appendFileAsync(path, '2'))
//   .then((path) => appendFileAsync(path, '3'))
//   .then((path) => appendFileAsync(path, '4'))
//   .then((path) => readFileAsync(path))
//   .then((data) => console.log(data))
//   .then(() => removeFileAsync(path.resolve(__dirname, 'test2.txt')))
//   .catch((err) => console.log(err));

// Через переменную окружения передать строку, записать ее в файл
// прочитать файл, посчитать кол-во слов в файле и записать
// их в новый файл count.txt, затем удалить первый файл

const text = process.env.TEXT || '';
console.log(text);

writeFileAsync(path.resolve(__dirname, 'test2.txt'), text)
  .then((path) => readFileAsync(path))
  .then((data) => writeFileAsync(path.resolve(__dirname, 'count.txt'), `${data.split(' ').length}`))
  .then(() => removeFileAsync(path.resolve(__dirname, 'test2.txt')));
