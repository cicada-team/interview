function getOrderedLinkList(input) {
  if (!input || !input.length) return [];

  const pending = [];
  const head = [];
  const tail = [];
  const curr = [];

  function append({ id, first, last, before, after }) {
    if (first) {
      head.unshift(id);
    } else if (last) {
      tail.push(id);
    } else if (before) {
      let index = curr.indexOf(before);
      if (index > -1) {
        curr.splice(index - 1, 0, id);
      } else {
        pending.push({ id, before });
      }
    } else if (after) {
      let index = curr.indexOf(after);
      if (index > -1) {
        curr.splice(index + 1, 0, id);
      } else {
        pending.push({ id, after });
      }
    } else {
      curr.push(id);
    }
  }

  input.forEach(append);

  if (pending.length) {
    pending.forEach(append);
  }

  return [...head, ...curr, ...tail];
}

const input = [
  { id: 1 },
  { id: 2, before: 1 },
  { id: 3, after: 1 },
  { id: 5, first: true },
  { id: 6, last: true },
  { id: 7, after: 8 },
  { id: 8 },
  { id: 9 },
];

const output = getOrderedLinkList(input);
console.log(output); // [5, 2, 1, 3, 8, 7, 9, 6];
