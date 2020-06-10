const startArr = [
  {id:2, name:'i2', parentId: 1},
  {id:4, name:'i4', parentId: 3},
  {id:8, name:'i8', parentId: 7},
  {id:3, name:'i3', parentId: 2},

  {id:5, name:'i5', parentId: 4},
  {id:6, name:'i6', parentId: 5},
  {id:1, name: 'i1'},
];

/**
 * 使用
 * node ./3.js
 */

function getTree(arr = []) {
  let tree = arr[0];
  arr.forEach((e) => {
    // 比较id谁最小
    if (tree.id > e.id) {
      tree = e;
    }

    if (!e.parentId) {
      return;
    }

    const parent = arr.find(c => c.id === e.parentId);

    if (!parent) {
      console.log(`id:${e.id}, name: ${e.name}的parent不存在`)
      return;
    }

    if (parent && parent.children) {
      console.log(`id:${parent.id}, name: ${parent.name}的children已经存在了`)
      return;
    }

    parent.children = e;
  })

  return tree;
}

console.log(JSON.stringify(getTree(startArr)));
