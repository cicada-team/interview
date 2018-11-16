### first
```
var list = [
    "Allegoric Alaskans;Blithering Badgers;win",
    "Devastating Donkeys;Courageous Californians;draw",
    "Devastating Donkeys;Allegoric Alaskans;win",
    "Courageous Californians;Blithering Badgers;loss",
    "Blithering Badgers;Devastating Donkeys;loss",
    "Allegoric Alaskans;Courageous Californians;win"
];
var result = {};
function createTeam() {
    return {
          MP: 0,
          W: 0,
          D: 0,
          L: 0,
          P: 0
    };
}
list.forEach(item => {
    let ary = item.split(";");
    switch (ary[2]) {
        case "win":
            if (!result[ary[0]]) {
              result[ary[0]] = createTeam();
            }
            if (!result[ary[1]]) {
              result[ary[1]] = createTeam();
            }
            result[ary[0]].MP += 1;
            result[ary[1]].MP += 1;
            result[ary[0]].W += 1;
            result[ary[1]].L += 1;
            break;
        case "draw":
            if (!result[ary[0]]) {
              result[ary[0]] = createTeam();
            }
            if (!result[ary[1]]) {
              result[ary[1]] = createTeam();
            }
            result[ary[0]].MP += 1;
            result[ary[1]].MP += 1;
            result[ary[0]].D += 1;
            result[ary[1]].D += 1;
            break;
        case "loss":
            if (!result[ary[0]]) {
              result[ary[0]] = createTeam();
            }
            if (!result[ary[1]]) {
              result[ary[1]] = createTeam();
            }
            result[ary[0]].MP += 1;
            result[ary[1]].MP += 1;
            result[ary[0]].L += 1;
            result[ary[1]].W += 1;
            break;
    }
});
```
### third
```
let list = [
        { id: 1, name: "i1" },
        { id: 2, name: "i2", parentId: 1 },
        { id: 4, name: "i4", parentId: 3 },
        { id: 3, name: "i3", parentId: 2 },
        { id: 8, name: "i8", parentId: 7 }
      ];
let tree = list.reduce((prev, next) => {
    if (!next.parentId) {
        prev[next.id] = next;
    } else {
        creatTree(prev, next);
    }
        return prev;
}, {});

function creatTree(par, chi) {
    Object.keys(par).forEach(key => {
        if (next.parentId === key) {
            !par[key].child ? [] : null;
            par.push(chi);
        } else {
            creatTree(par[key], chi);
        }
    });
        return par;
    }
```