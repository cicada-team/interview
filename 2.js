
/**
 * 使用
 * node ./2.js
 */
const data = [
  {id: 1},
  {id: 2, before: 1},
  {id: 5, first: true},
  {id: 3, after: 1},
  {id: 6, last: true},
  {id: 7, after: 8},
  {id: 8},
  {id: 9},
];

const newData = [
  ...data
];

data.forEach((item) => {
  const keys = Object.keys(item);
  if (keys.length >= 3) {
    throw new Error(`无解: ${item.id} 这个东西有多个定位, 我排不出来`);
  }

  if (keys.length === 1) {
    return;
  }

  const theKey = keys.find(e => e !== 'id') || '';
  const countArr = newData.filter(e => e[theKey] === item[theKey]);
  if (theKey && countArr.length > 1) {
    console.log(newData);
    
    throw new Error(`无解:${theKey}=${item[theKey]} 有2个我也排不出来`);
  }

  const i = newData.findIndex(e => e.id === item.id);

  if (theKey === 'before' || theKey === 'after') {
    newData.splice(i, 1);
    const targetIndex = newData.findIndex(e => e.id === item[theKey]);

    if (targetIndex > -1) {
      const finIndex = theKey === 'before' ? targetIndex : targetIndex + 1;
      newData.splice(finIndex, 0, item);
    }
  }

  if (theKey === 'first') {
    const hasBefore = newData.find(e => e.before === item.id);

    if (hasBefore) {
      throw new Error(`无解: ${hasBefore.id} 要在first之前`);
    }

    newData.splice(i, 1);
    newData.unshift(item);
  }

  if (theKey === 'last') {
    const hasBefore = newData.find(e => e.after === item.id);

    if (hasBefore) {
      throw new Error(`无解: ${hasBefore.id} 要在last之后`);
    }

    newData.splice(i, 1);
    newData.push(item);
  }
})

console.log(newData);
