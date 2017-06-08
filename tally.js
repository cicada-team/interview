const fs=require("fs");  

tally("./file.txt");

function tally(file_path) {
  const data=fs.readFileSync(file_path,"utf-8");  

  const play_list = data.split('\n');

  let obj = {}
  play_list.map((p)=>{
    const sp = p.split(';');
    const [ateam,bteam,result] = sp;
    calcResult(ateam, bteam, result, obj);
  })

  const table = Object.keys(obj).map((t)=>{
    const team = obj[t]
    const P = team.MP*3 + team.D
    return {
      name: t,
      MP: team.MP,
      W: team.W,
      D: team.D,
      L: team.L,
      P
    }
  })
  const output = formatTable(table);
  console.log(output);
  fs.writeFile('tally.txt', output , function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });

}


function formatTable(table) {
  const team_len = 30;
  const table_header = 'TEAM'+(new Array(team_len-4).splice('').join(' '))+'| MP| W | D | L | P\n'
  const tbody = table.sort((ta, tb)=> ta.P < tb.P)
    .sort((ta,tb)=> ta.P==tb.P && ta.name>tb.name)
    .map((t)=>{
      const offset_len = team_len - t.name.length;
      const name = t.name + (new Array(offset_len).splice('').join(' '))
      return `${name}| ${t.MP} | ${t.W} | ${t.D} | ${t.L} | ${t.P}`
    })
    .join('\n')
  return table_header+tbody;
}


function getTeam(name, obj) {
  if (!obj[name]) {
    obj[name] = {
      MP: 0,
      W: 0,
      D: 0,
      L: 0
    }
  }

  return obj[name]
}

function calcResult(ateam_name, bteam_name, result, obj) {
  let ateam = getTeam(ateam_name,obj), bteam = getTeam(bteam_name, obj);
  switch (result) {
    case 'win':
      ateam['W']++;
      bteam['L']++;
      break;
    case 'loss':
      ateam['L']++;
      bteam['W']++;
      break;
    case 'draw':
      ateam['D']++;
      bteam['D']++;
      break;
    default:
      break;
  }
  ateam['MP']++;
  bteam['MP']++;
}