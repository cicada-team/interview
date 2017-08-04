//Q2:

var input1 = [
{id: 1},
{id: 2, before: 1},
{id: 3, after:1},
{id: 5, first: true},
{id: 6, last: true},
{id: 7, after: 8},
{id: 8},
{id: 9},
];

function sort(input) {
    let output = [];
    input.forEach(elem => {
        if (elem.hasOwnProperty('id')) {
            output.push(elem);
        }
    })

    input.forEach((elem) => {
        if (elem.hasOwnProperty('before')){
            let tempArray = [];
            for(var key of output) {
                tempArray.push(output.pop());
                if (key.id === elem.before) {
                    output.push(elem);
                    break;
                }
            }

            tempArray.forEach((element) => {
                output.push(element);
            });
        } else if (elem.hasOwnProperty('after')) {
            let tempArray = [];
            for(var key of output) {
                if (key.id === elem.after) {
                    output.push(elem);
                    break;
                }
                tempArray.push(output.pop());
            }
            tempArray.forEach((element) => {
                output.push(element);
            });
        }

        if (elem.first) {
            let tempArray = [];
            output.forEach((element) => {
                tempArray.push(output.pop());
            });
            output.push(elem);
            tempArray.forEach((element) => {
                output.push(element);
            });
        }
    });

    input.forEach((elem) => {
        if (elem.last) {
            output.push(elem);
        }
    })

    console.log(output);
};

sort(input1);



//Q3:

input2 = [
    {id:1, name: 'i1'},
    {id:2, name:'i2', parentId: 1},
    {id:4, name:'i4', parentId: 3},
    {id:3, name:'i3', parentId: 2},
    {id:8, name:'i8', parentId: 7}
];

class Structure {
  constructor(data) {
    if(!data) {
      data = {};
    }
    this.id = data.id || uuidV1();
    this.name = data.name || "";
    this.parentId = data.parentId || null;
    this.children = data.loadChildren(data.children) || null;
  }

  loadChildren(children) {
    return children.map((child) => {
      return new Structure(child);
    });
  }

  addChild(child) {
    let newNode = new Structure(child);
    newNode.parentId = this;
    this.children.push(newNode);
    return newNode;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      children: this.children
    }
  }

}

function createTree(input2) {
    var head = new Structure(input2[0]);
    for(var i = 1; i < input2.length; i++) {
        //if parentId is in ids
        if (input2[i].parentId) {
            input2[i].parentId.addChild(input2[i].id)
        }
    }
}