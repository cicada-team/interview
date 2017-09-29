/**

[
    {id:1, name: 'i1'},
    {id:2, name:'i2', parentId: 1},
    {id:4, name:'i4', parentId: 3},
    {id:3, name:'i3', parentId: 2},
    {id:8, name:'i8', parentId: 7}
]


**/

let tree = {};


function outputATree(rawArray) = {
	let newArray = [...rawArray];
	const rootPos = 0; // 先找根，例子是[0]，后续再再修改
	const ess = newArray[rootPos]; 
	tree = {...ess}
;	//去掉根元素
	newArray.splice(rootPos, 1);
	//剩下的按ParentId大小从小到大排顺序
	for(let i=0; i<=newArray.length - 1; ++i) {
		for (let j=0; j<newArray.length - 1 - i; ++j) {
			if(newArray[j].parentId > newArray[j + 1].parentId) {
				const swap = {...newArray[j]};
				newArray[j] = newArray[j + 1];
				newArray[j+1] = swap;
			}
		}

	}
	//得到排序号的newArray,然后便利赋值即可
	for (let i=0; i< newArray.length - 1; ++i) {
		//因为首先赋值了根，所以以parentId为Id的元素一定存在，以此类推,否则树不完整
		//因此
		const ele = newArray[i];
		tree[ele.parentId].children = [...tree[parentId].children, ele];
		//如果要求树状结构每一个分支都要有序，则再排列
	}
}