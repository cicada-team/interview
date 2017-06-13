function findIndex (list, id) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == id) return i
    }
    return -1
}

function haveAttr (node) {
    return !!(node.before || node.after || node.first || node.last)
}


function main () {
    const nodes = [
        { id: 1 },
        { id: 2, before: 1 },
        { id: 3, after: 1 },
        { id: 5, first: true },
        { id: 6, last: true },
        { id: 7, after: 8 },
        { id: 8 },
        { id: 9 },
    ]

    const attrNode = nodes.filter(haveAttr)
    const list = nodes.filter(n => !haveAttr(n))

    attrNode.forEach(n => {
        if (n.first) {
            list.splice(0, 0, n)
        } else if (n.last) {
            list.push(n)
        } else if (n.before) {
            const idx = findIndex(list, n.before)
            idx !== -1 && list.splice(idx, 0, n)
        } else if (n.after) {
            const idx = findIndex(list, n.after)
            idx !== -1 && list.splice(idx + 1, 0, n)
        }
    })
    console.log(list)
    if(list.length !== nodes.length) {
        console.log('无解')
    }
}

main()