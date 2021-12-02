import path from 'path';

const fullpath = path.join(__dirname, 'first', 'second');
console.log(fullpath);

console.log('Parse path', path.parse(fullpath));
console.log('разделитель в ОС', path.sep);
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'));
console.log('Название файла', path.basename(fullpath));
console.log('расширение файла', path.extname(fullpath));

//---------------------------
const siteUrl = 'http://localhost:8000/users?id=5123';

const url = new URL(siteUrl);
console.log(url);

