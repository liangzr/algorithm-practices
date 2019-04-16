const fs = require('fs');

const random = () => Math.floor(Math.random() * 1000000);

const target = [];

for (let index = 0; target.length < 10000; index += 1) {
  const n = random();
  if (target.indexOf(n) === -1) {
    target.push(n);
  }
}

fs.writeFileSync('./source.json', JSON.stringify(target, null, 2));

console.log('done');
