const data = [true, 'hello', 5, 12, -200, false, false, 'word', null, 7n, {}, 'x'];
const counts = { number: 0, string: 0, boolean: 0, bigint: 0, object: 0 };
for (const item of data) counts[typeof item]++;
console.dir(counts);

const dyn = {};
for (const item of data) {
  const t = typeof item;
  dyn[t] = (dyn[t] || 0) + 1;
}
console.dir(dyn);
