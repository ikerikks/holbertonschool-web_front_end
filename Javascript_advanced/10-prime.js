const { performance } = require('node:perf_hooks');

let t0;

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
  t0 = performance.now();
  countPrimeNumbers();
}

console.log(`Execution time of printing countPrimeNumbers was ${t0} milliseconds.`);
