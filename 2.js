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
}

function insertAfter(arr, i, e) {
  const pos = arr.findIndex(a => a.id === i);
  arr.splice(pos+1, 0, e);
}

function remove(arr, i) {
  arr.splice(i, 1);
}

function sort(arr) {
  if (arr.length <= 0) return arr;

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (typeof cur.before === 'number') {
      remove(arr, i);
      insertBefore(arr, cur.before, cur);
    } else if (typeof cur.after === 'number') {
      remove(arr, i);
      insertAfter(arr, cur.after, cur);
    } else if (cur.first) {
      arr.splice(0, 0, cur);
      remove(arr, i);
    } else if (cur.last) {
      arr.splice(arr.length+1, 0, cur);
      remove(arr, i);
    }
  }
  return arr;
}

const newArr = sort(input);
console.log(newArr);
