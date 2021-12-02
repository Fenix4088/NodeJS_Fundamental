import os from 'os';
import cluster from 'cluster';

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.cpus().length);

const cpus = os.cpus();

for (let i = 0; i < cpus.length - 2; i++) {
  const CPUcore = cpus[i];
}
