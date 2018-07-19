const input = [
  [1, 2], [5, 3], [3, 1], [1, 2], [2, 4], [1, 6], [2, 3], [3, 4], [5, 6]
];

function solve(input) {
  const cache = {};
  for (const cur of input) {
    if (!cache[cur[0]]) cache[cur[0]] = [];
    if (!cache[cur[1]]) cache[cur[1]] = [];
    console.log(cur[0])
    console.log(cur[1])
    cache[cur[0]].push(cur);
    cache[cur[1]].push(cur.reverse());
  }

  console.log(cache);
  for (const cur of input) {
    console.log(cur);
  }
}

const ret = solve(input);
console.log(ret);
