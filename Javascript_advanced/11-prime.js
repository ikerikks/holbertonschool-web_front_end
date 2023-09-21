const { performance } = require('node:perf_hooks');

let t0;
let t1;

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

function countPrimeNumbers() {
  let count = 0;
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      count++;
    }
  
  }
  return count;
}

for (let i = 0; i < 100; i++) {
  // countPrimeNumbers();
  t0 = performance.now();
  setTimeout(countPrimeNumbers, 0);
}

t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1- t0} milliseconds.`);
