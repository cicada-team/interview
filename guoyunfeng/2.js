function sortArray(arr) {
    if (!(arr instanceof Array)) return;
  
    if (arr.length <= 1) return arr;
  
    const newArr = arr.sort((pre, next) => {
      return next.id > pre.id;
    });
  
  
  
    newArr.forEach((item, index) => {
      const isFirst = item.first || null;
      const isLast = item.last || null;
      const before = item.before || null;
      const after = item.after || null;
  
      if (isFirst) {
        newArr.unshift(item);
      } else if (isLast) {
        newArr.push(item);
      } else {
        if (before !== null) {
          const current = newArr.splice(index, 1);
          newArr.splice(before, 0, current);
        }
        if (after !== null) {
          const current = newArr.splice(index, 1);
          newArr.splice(after - 1, 0, current);
        }
      }
    });
  
    return newArr;
  }