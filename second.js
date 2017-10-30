var input = [
    { id: 1, name: 'i1' },
    { id: 2, name: 'i2', parentId: 1 },
    { id: 4, name: 'i4', parentId: 3 },
    { id: 3, name: 'i3', parentId: 2 },
    { id: 8, name: 'i8', parentId: 7 }
]
let pre = {}
input.forEach(item => {
    pre[item.id] = item
})
for (let i = 0; i < input.length; i++) {
    let cur = input[i]
    if (cur.parentId) {
        if (pre[cur.parentId]) {
            pre[cur.parentId].children = pre[cur.parentId].children || []
            pre[cur.parentId].children.push(cur)
        } else {
            console.log('输入错误')
        }
    }
}
let result=Object.values(pre).filter(item=>!item.parentId)
console.log(result)