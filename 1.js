const readline = require('readline');

const input = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * 使用方法
 * 
 * >- node ./1.js
 * 
 * 输入
 * 
 * Allegoric Alaskans;Blithering Badgers;win
    Devastating Donkeys;Courageous Californians;draw
    Devastating Donkeys;Allegoric Alaskans;win
    Courageous Californians;Blithering Badgers;loss
    Blithering Badgers;Devastating Donkeys;loss
    Allegoric Alaskans;Courageous Californians;win

    等数据并回车

    ctrl+c退出后进行合计
 */

function initData(obj = {}, team) {
  if (!(team in obj)) {
    obj[team] = {
      W: 0,
      D: 0,
      L: 0,
      P: 0
    };
  }
}

function sumObjKey(key, ...objs) {
  return objs.reduce((sum, obj) => {
    return sum + (obj[key] || 0)
  }, 0)
}

function sumResult(oldRes, addRes) {

  return {
    W: sumObjKey('W', oldRes, addRes),
    D: sumObjKey('D', oldRes, addRes),
    L: sumObjKey('L', oldRes, addRes),
    P: sumObjKey('P', oldRes, addRes)
  }
}

function dependResultGetPoint(result = '') {
  const win = {
    W: 1,
    D: 0,
    L: 0,
    P: 3
  };

  const draw = {
    W: 0,
    D: 1,
    L: 0,
    P: 1
  };

  const loss = {
    W: 0,
    D: 0,
    L: 0,
    P: 0
  };

  switch (result) {
    case 'win':
      return [win, loss];
    case 'draw':
      return [draw, draw];
    }
  return [loss, win];
}

function handleRaceInfo(infos = '') {
  const races = infos.split('\n');
  const raceObj = {};
  races.forEach((race) => {
    // TODO: 值的校验可以考虑下
    const [
      firstTeam,
      secondTeam,
      result
    ] = race.split(';');
    

    initData(raceObj, firstTeam);
    initData(raceObj, secondTeam);

    const [
      firstTeamResult,
      secondTeamResult
    ] = dependResultGetPoint(result);
    raceObj[firstTeam] = sumResult(raceObj[firstTeam], firstTeamResult)
    raceObj[secondTeam] = sumResult(raceObj[secondTeam], secondTeamResult)
  });

  return raceObj;
}

function printData() {

  const result = handleRaceInfo(input.filter(e => !!e).join('\n'));
  const prints = [
    ['Team', 'W', 'D', 'L', 'P'].join('|')
  ];
  
  Object.keys(result).forEach((key) => {
    prints.push([
      key,
      ...Object.values(result[key])
    ].join('|'))
  });


  console.log(prints.join('\n'));
}

rl.prompt();

rl.on('line', function (cmd) {
  if (cmd) {
    if (cmd.split('').filter(e => e === ';').length !== '2') {
      console.log('格式错误: [1队];[2队];[结果]');
      return;
    }

    input.push(cmd);
  } else {
    console.log('退出(ctrl+c)后进行合计')
  }
});

rl.on('close', function (cmd) {
    printData();
    process.exit(0);
});