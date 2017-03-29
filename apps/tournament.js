const {teams} = require('./data')

const input =
  `Allegoric Alaskans;Blithering Badgers;win
Devastating Donkeys;Courageous Californians;draw
Devastating Donkeys;Allegoric Alaskans;win
Courageous Californians;Blithering Badgers;loss
Blithering Badgers;Devastating Donkeys;loss
Allegoric Alaskans;Courageous Californians;win`

function mapInputToObject(input) {
  let arr1 = input.split('\n')
  let arr2 = arr1.map((value) => {
    return value.split(';')
  })
  return arr2
}

function searchTeams(name) {
  let keyIndex = 0
  teams.forEach((value, index) => {
    if (value.name === name) {
      return keyIndex = index
    }
  })
  return teams[keyIndex]
}

function calculating() {
  let info = mapInputToObject(input)
  info.forEach((value) => {
    if (value[2] === 'win') {
      updateTeams(searchTeams(value[0]), searchTeams(value[1]), 'w')
    } else if (value[2] === 'loss') {
      updateTeams(searchTeams(value[0]), searchTeams(value[1]), 'l')
    } else if (value[2] === 'draw') {
      updateTeams(searchTeams(value[0]), searchTeams(value[1]), 'd')
    } else {
      console.error('please check!')
    }
  })
  // console.log(info)
}

function updateTeams(team1, team2, status) {
  team1.mp += 1
  team2.mp += 1
  if (status === 'w') {
    team1.w += 1
    team2.l += 1
    team1.p += 3
  } else if (status === 'l') {
    team2.w += 1
    team1.l += 1
    team2.p += 3
  } else {
    team1.d += 1
    team2.d += 1
    team1.p += 1
    team2.p += 1
  }
}

calculating()

console.log('\n  Team                    | MP| W | D | L | P')
function output() {
  teams.map((value, index) => {
    let space = ['    ', '     ', '     ', '']
    console.log('  ' + value.name + space[index], '| ' + value.mp, '| ' + value.w, '| ' + value.d, '| ' + value.l, '| ' + value.p)
  })
}
output()
