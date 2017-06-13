function main () {

    const list = [
        { id: 1, name: 'i1' },
        { id: 2, name: 'i2', parentId: 1 },
        { id: 4, name: 'i4', parentId: 3 },
        { id: 3, name: 'i3', parentId: 2 },
        { id: 8, name: 'i8', parentId: 7 }
    ]

    const idMap = list.reduce((a, b) => {
        a[b.id] = b
        return a
    }, {})

    let root = list.shift()

    list.forEach(l => {
        if (idMap[l.parentId]) {
            idMap[l.parentId].child = l
        } else {
            console.warn('游离的节点：', l)
        }
    })

    console.log(JSON.stringify(root))
}

main()