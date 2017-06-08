const list = [
  {id: 1},
  {id: 2, before: 1},
  {id: 3, after: 1},
  {id: 5, first: true},
  {id: 6, last: true},
  {id: 7, after: 8},
  {id: 8},
  {id: 9},
]

makeListOrder(list);

function makeListOrder(list) {
  let new_list = [];
  new_list = list.filter((t)=>{
    return !isRuled(t)
  })

  const labeled = list.filter((t)=>{
    return isRuled(t)
  }).map((t)=>{
    if (t.first) {
      new_list.unshift(t)
    }
    if (t.last) {
      new_list.push(t)
    }

    if (t.after !== undefined) {
      const idx = indexOfNewList(new_list, t.after);
      if (idx !== -1) {
        new_list.splice(idx+1,0, t);
      }
    }

    if (t.before !== undefined) {
      const idx = indexOfNewList(new_list, t.before);
      if (idx !== -1) {
        new_list.splice(idx,0, t);
      }
    }
  })
  console.log(new_list);
}

//是否有规则
function isRuled(t) {
  if (t.before || t.after || t.first || t.last) {
    return true;
  }
  return false;
}

function indexOfNewList(new_list, id) {
  const ids = new_list.map((t)=> t.id);
  return ids.indexOf(id);
}

