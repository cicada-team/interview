var inputs = [
    {id:1, name: 'i1'},
    {id:2, name:'i2', parentId: 1},
    {id:4, name:'i4', parentId: 3},
    {id:3, name:'i3', parentId: 2},
    {id:8, name:'i8', parentId: 7}
];

var tree = {};

function setParent(id, pid) {
  if (!tree[pid] || !tree[id]) {
    console.error('error');
    return;
  }
  tree[pid].children = tree[id];
  tree[id].parent = tree[pid];
}

for (var i in inputs) {
  tree[inputs[i].id] = inputs[i];
}
for (var i in inputs) {
  if (inputs[i].parentId) {
    setParent(inputs[i].id, inputs[i].parentId);
  }
}
