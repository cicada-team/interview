function createTree(arr) {
    if (arr.length < 1) return;
  
    const tree = {};
    while (arr.length > 0) {
      arr.forEach((item, index) => {
        if (type item.parentId === 'undefined') {
          const current = arr.splice(index, 1);
          tree[item.name] = {
            id: item.id,
            name: item.name
          };
        } else {
          const parentId = item.parentId;
          const isParentInTree = tree.hasOwnProperty(item.name);
          if (isParentInTree) {
            tree[`i${parentId}`].child = {
              id: item.id,
            name: item.name
            }
          } else {
            continue;
          }
        }
      });
    }
  
    return tree;
  }