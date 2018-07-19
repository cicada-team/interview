const input = `
Allegoric Alaskans;Blithering Badgers;win
Devastating Donkeys;Courageous Californians;draw
Devastating Donkeys;Allegoric Alaskans;win
Courageous Californians;Blithering Badgers;loss
Blithering Badgers;Devastating Donkeys;loss
Allegoric Alaskans;Courageous Californians;win
`;

function createDefaultTeamStats() {
  return  {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    p: 0,
  };
}

function calculate(input) {
  input = input.trim();
  const lines = input.split('\n');

  const teams = {};
  for (const line of lines) {
    const token = line.split(';');
    if (token.length === 3) {
      const team1 = token[0];
      const team2 = token[1];
      const res = token[2];
      if (!teams[team1]) teams[team1] = createDefaultTeamStats();
      if (!teams[team2]) teams[team2] = createDefaultTeamStats();

      teams[team1].mp++;
      teams[team2].mp++;

      // team1 wins team2
      if (res === 'win') {
        teams[team1].w++;
        teams[team1].p += 3;
      }
      if (res === 'draw') {
        teams[team1].d++;
        teams[team1].p += 1;
       }
      if (res === 'loss') teams[team1].l++;
    }
  }
  return teams;
}

function formatOutput(stats) {
  const arr = [];
  for (const stat of Object.entries(stats)) {
    arr.push(stat);
  }
  arr.sort((a, b) => {
    return b[1].p - a[1].p;
  });
  const tpl = [];
  tpl.push(`Team \t| MP \t| W \t| D \t| L \t|  P`)
  for (const t of arr) {
    const name = t[0];
    const st = t[1];
    tpl.push(`${name}\t| ${st.mp} |\t| ${st.w} |\t| ${st.d} |\t| ${st.l} |\t| ${st.p}`);
  }
  return tpl.join('\n');
}

const stats = calculate(input);
const output = formatOutput(stats);
console.log(output);
