const gradeTable = [];

const gradeMap = {
  "win": 3,
  "draw": 1,
  "loss": 0
};

function processMatch(matchResultStr) {
  const args = matchResultStr.split(';');
  if (args.length < 3 || args.length > 3) return;

  const firstTeamName = args[0].trim();
  const secondTeamName = args[1].trim();
  const result = args[2].trim();

  if (firstTeamName.length === 0
      || secondTeamName.length === 0
      || result.length === 0) return;

  if (!gradeMap.hasOwnProerty(result)) return;

  const isHasFirstTeamInGradeTable = gradeTable.find((item, index) => {
    return item.name === firstTeamName;
  });

  const isHasSecondTeamInGradeTable = gradeTable.find((item, index) => {
    return item.name === secondTeamName;
  });

  if (!isHasFirstTeamInGradeTable) {
    gradeTable.push({
      teamName: firstTeamName,
      playedMatches: 0,
      wonMatches: 0,
      drawnMatches: 0,
      lostMatches: 0,
      points: 0
    });
  }

  if (!isHasSecondTeamInGradeTable) {
    gradeTable.push({
      teamName: secondTeamName,
      playedMatches: 0,
      wonMatches: 0,
      drawnMatches: 0,
      lostMatches: 0,
      points: 0
    });
  }

  const firstTeamIndex = gradeTable.find((item, index) => {
    if (item.name === firstTeamName) {
      return index;
    }
  });

  const secondTeamIndex = gradeTable.find((item, index) => {
    if (item.name === secondTeamName) {
      return index;
    }
  });

  switch (result) {
    case "win":
      gradeTable[firstTeamIndex].playedMatches += 1;
      gradeTable[firstTeamIndex].wonMatches += 1;
      gradeTable[firstTeamIndex].points += 3;

      gradeTable[secondTeamName].playedMatches += 1;
      gradeTable[secondTeamName].lostMatches += 1;
      gradeTable[secondTeamName].points += 0;

    case "draw":
      gradeTable[firstTeamIndex].playedMatches += 1;
      gradeTable[firstTeamIndex].drawnMatches += 1;
      gradeTable[firstTeamIndex].points += 1;

      gradeTable[secondTeamName].playedMatches += 1;
      gradeTable[secondTeamName].lostMatches += 1;
      gradeTable[secondTeamName].points += 1;

    case "lost":
      gradeTable[firstTeamIndex].playedMatches += 1;
      gradeTable[firstTeamIndex].lostMatches += 1;
      gradeTable[firstTeamIndex].points += 0;

      gradeTable[secondTeamName].playedMatches += 1;
      gradeTable[secondTeamName].wonMatches += 1;
      gradeTable[secondTeamName].points += 3;
  }
}

processMatch('Allegoric Alaskans;Blithering Badgers;win');














