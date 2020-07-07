function tallyCompetition(input) {
  const list = input.trim().split(/\n/);

  function buildMap(isDraw, win, loss) {
    if (!map[win]) map[win] = { mp: 0, w: 0, d: 0, l: 0, p: 0 };
    if (!map[loss]) map[loss] = { mp: 0, w: 0, d: 0, l: 0, p: 0 };

    if (isDraw) {
      map[win].d += 1;
      map[loss].d += 1;
      map[win].p += 1;
      map[loss].p += 1;
    } else {
      map[win].w += 1;
      map[loss].l += 1;
      map[win].p += 3;
    }
    map[win].mp += 1;
    map[loss].mp += 1;
  }

  const map = {};
  list.forEach(item => {
    const info = item.split(';').map(str => str.trim());
    if (info.length !== 3) return;
    if (!['win', 'loss', 'draw'].includes(info[2])) return;

    if (info[2] === 'win') {
      buildMap(false, info[0], info[1]);
    } else if (info[2] === 'loss') {
      buildMap(false, info[1], info[0]);
    } else {
      buildMap(true, info[0], info[1]);
    }
  });

  const result = Object.keys(map).map(key => [key, map[key]]);
  result.sort((a, b) => b[1].p - a[1].p);

  return result;
}

const input = `
Allegoric Alaskans;Blithering Badgers;win
Devastating Donkeys;Courageous Californians;draw
Devastating Donkeys;Allegoric Alaskans;win
Courageous Californians;Blithering Badgers;loss
Blithering Badgers;Devastating Donkeys;loss
Allegoric Alaskans;Courageous Californians;win
`;

const output = tallyCompetition(input);
console.log(output);
