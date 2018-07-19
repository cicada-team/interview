const input = [
  [1, 2], [5, 3], [3, 1], [1, 2], [2, 4], [1, 6], [2, 3], [3, 4], [5, 6]
  // [2,1],[2,3],[1,3],
  // [1,2],[3,4],[2,3],[4,1]
];

function solve(input) {
  const cache = {};
  for (const cur of input) {
    if (!cache[cur[0]]) cache[cur[0]] = [];
    if (!cache[cur[1]]) cache[cur[1]] = [];
    cache[cur[0]].push(cur.slice());
    cache[cur[1]].push(cur.slice().reverse());
  }

  const result = [];
  for (const cur of input) {
    const curRes= [];
    dfs(input, cache, cur, [cur], curRes);

    const curRes2 = [];
    dfs(input, cache, cur.slice().reverse(), [cur.slice().reverse()], curRes2);
    result.push(curRes);
    if (curRes.length > 0) result.concat(curRes);
    if (curRes2.length > 0) result.concat(curRes2);
  }
  return result;
}

function includes(arr, pair) {
  return arr.find((a) => a[0] === pair[0] && a[1] === pair[1]);
}

function dfs(input, cache, pair, sol, result) {
  if (sol.length === input.length) {
    if (sol[0][0] === sol[sol.length-1][1]) {
      const n = [];
      for (const s of sol) {
        n.push(s.join(''));
      }
      result.push(n);
    }
    return;
  }
  const next = cache[pair[1]];
  if (next) {
    for (const p of next) {
      // if (!includes(sol, p) && !includes(sol, p.slice().reverse())) {
        sol.push(p);
        dfs(input, cache, p, sol, result);
        sol.pop();
      // }
    }
  }
}

const ret = solve(input);
console.log(ret);
