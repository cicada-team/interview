const input = [
  {id:1, name: 'i1'},
  {id:2, name:'i2', parentId: 1},
  {id:4, name:'i4', parentId: 3},
  {id:3, name:'i3', parentId: 2},
  {id:8, name:'i8', parentId: 7}
];

class Node {
  constructor(id, name, parentId) {
    this.id = id;
    this.name = name;
    this.parentId = parentId;
    this.children = [];
  }
}

function constructTree(arr) {
  const cache = {};
  for (const cur of arr) {
    cache[cur.id] = new Node(cur.id, cur.name, cur.parentId);
  }

  let head = null;
  // construct
  for (const cur of arr) {
    // head node
    if (!cur.parentId) head = cache[cur.id];
    else {
      const cNode = cache[cur.id];
      const pNode = cache[cur.parentId];
      if (pNode) {
        pNode.children.push(cNode);
      } else {
        console.error(`parent node id: ${cur.parentId} is not found`);
      }
    }
  }

  return head;
}

const tree = constructTree(input);

// debug
function output(node) {
  console.log('visiting:', node.id, node.name);
  for (const c of node.children) {
    output(c);
  }
}

output(tree);
