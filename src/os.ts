import os from 'os';
import cluster from 'cluster';

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.cpus().length);

const cpus = os.cpus();

if (cluster.isPrimary) {
  for (let i = 0; i < cpus.length - 2; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker with pid ${worker.process.pid} died`);

    cluster.fork();
  });
} else {
  console.log(process.pid);

  setTimeout(() => {
    console.log(`Process ${process.pid} still working`);
  }, 5000);
}
