const input = [
    {id: 1},
    {id: 2, before: 1},
    {id: 3, after: 1},
    {id: 5, first: true},
    {id: 6, last: true},
    {id: 7, after: 8},
    {id: 8},
    {id: 9},
];

function insertBefore(arr, i, e) {
  const pos = arr.findIndex(a => a.id === i);
  arr.splice(pos, 0, e);
  return pos;
}

function insertAfter(arr, i, e) {
  const pos = arr.findIndex(a => a.id === i);
  arr.splice(pos+1, 0, e);
  return pos;
}

function remove(arr, i) {
  arr.splice(i, 1);
}

function sort(arr) {
  if (arr.length <= 0) return arr;

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (typeof cur.before === 'number') {
      remove(arr, i);
      const pos = insertBefore(arr, cur.before, cur);
      if (pos > i) i--;
    } else if (typeof cur.after === 'number') {
      remove(arr, i);
      const pos = insertAfter(arr, cur.after, cur);
      if (pos > i) i--;
    } else if (cur.first) {
      remove(arr, i);
      arr.splice(0, 0, cur);
    } else if (cur.last) {
      remove(arr, i);
      arr.splice(arr.length+1, 0, cur);
      if (i !== arr.length - 1) i--;
    }
  }
  return arr;
}

const newArr = sort(input);
console.log(newArr);
