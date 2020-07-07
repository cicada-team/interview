function createDominoes(input) {
  if (!input || !input.length) return [];
  const xor = input.reduce((xor, curr) => {
    return xor ^ curr[0] ^ curr[1];
  }, 0);
  if (xor) return [];

  function findPair(num, fromLeft) {
    for (let i = 0, len = input.length; i < len; i++) {
      let pair = input[i];
      if (num === pair[0]) {
        fromLeft && pair.reverse();
        input.splice(i, 1);
        return pair;
      } else if (num === pair[1]) {
        !fromLeft && pair.reverse();
        input.splice(i, 1);
        return pair;
      }
    }
  }

  const ret = [input.pop()];

  while (input.length) {
    const left = ret[0][0];
    const right = ret[ret.length - 1][1];
    let curr;
    if ((curr = findPair(left, true))) {
      ret.unshift(curr);
    } else if ((curr = findPair(right))) {
      ret.push(curr);
    } else {
      return [];
    }
  }

  if (ret[0][0] !== ret[ret.length - 1][1]) return [];

  return ret;
}

const input = [
  [1, 2],
  [5, 3],
  [3, 1],
  [1, 2],
  [2, 4],
  [1, 6],
  [2, 3],
  [3, 4],
  [5, 6],
];

const output = createDominoes(input);
console.log(output);
