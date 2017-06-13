const fs = require('fs')
const readline = require('readline')

function readLines (file, callback) {
    const lines = []
    const rl = readline.createInterface({
        input: fs.createReadStream(file)
    })
    rl.on('line', (l) => lines.push(l))
    rl.on('close', () => callback(lines))
    rl.on('error', (e) => console.log(e))
}


function getTeam (teamName, teamMap) {
    return teamMap[teamName] || (teamMap[teamName] = {
            MP: 0,
            W: 0,
            D: 0,
            L: 0
        })
}

function space (len) {
    return new Array(len).join(' ')
}

function print (teamList) {
    const maxTeamLen = teamList.reduce((t1, t2) => Math.max(t1, t2.name.length), 0) + 7
    const tbody = teamList.map(t => `${t.name}${space(maxTeamLen - t.name.length)}|  ${t.MP} | ${t.W} | ${t.D} | ${t.L} | ${t.P}`).join('\n')

    console.log(`Team${space(maxTeamLen - 4)}| MP | W | D | L | P\n${tbody}`)
}

function main () {
    readLines('./file.txt', (lines) => {
        const teamMap = {}
        lines.forEach(l => {
            const [team1, team2, stat] = l.split(';')
            const [teamA, teamB] = [getTeam(team1, teamMap), getTeam(team2, teamMap)]
            teamA.MP++
            teamB.MP++
            switch (stat) {
                case 'win':
                    teamA.W++
                    teamB.L++
                    break
                case 'loss':
                    teamA.L++
                    teamB.W++
                    break
                case 'draw':
                    teamA.D++
                    teamB.D++
                    break
            }
        })

        const teamList = Object.keys(teamMap).map(teamName => {
            const team = teamMap[teamName]
            team.P = team.W * 3 + team.D
            team.name = teamName
            return team
        })
        teamList.sort((t1, t2) => t1.P < t2.P)
        print(teamList)
    })
}

main()