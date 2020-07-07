function createTree(input) {
  if (!input || !input.length) return null;

  function buildTree(nodes) {
    nodes.forEach(node => {
      if (!node) return;

      if (!node.children) {
        node.children = [];
      }
      
      if (map[node.id]) {
        node.children.push(...map[node.id]);
        buildTree(node.children);
      }
    });
  }

  const root = { ...input[0], children: [] };
  const map = input.reduce((map, { parentId, id, name }) => {
    if (parentId == null) return map;

    if (!map[parentId]) {
      map[parentId] = [];
    }
    map[parentId].push({ id, name });

    return map;
  }, {});

  buildTree([root]);

  return root;
}

const input = [
  { id: 1, name: 'i1' },
  { id: 2, name: 'i2', parentId: 1 },
  { id: 4, name: 'i4', parentId: 3 },
  { id: 3, name: 'i3', parentId: 2 },
  { id: 8, name: 'i8', parentId: 7 },
];

const output = createTree(input);
console.log(JSON.stringify(output));
