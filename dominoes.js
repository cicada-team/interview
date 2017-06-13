
function buildChildIndex(nodes) {
    const childMap = {} // idx => neighbour idx
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const [a, b] = [nodes[i], nodes[j]]
            if (a[1] === b[0]) {
                (childMap[i] || (childMap[i] = [])).push(j)
            } else if (a[0] === b[1]) {
                (childMap[j] || (childMap[j] = [])).push(i)
            }
        }
    }
    return childMap
}

function main() {

    const nodes = [
        [1, 2],
        [5, 3],
        [3, 1],
        [1, 2],
        [2, 4],
        [1, 6],
        [2, 3],
        [3, 4],
        [5, 6]
    ]

    const childMap = buildChildIndex(nodes)

    nodes.forEach((n, i) => iter([i]))

    function iter(list, visited = {}) {
        const [fIdx, lIdx] = [list[0], list[list.length - 1]]
        const [f, l] = [nodes[fIdx], nodes[lIdx]]

        visited[lIdx] = true
        if (f[0] === l[1]) {
            console.log('output: ', list, '=>', list.map(l => nodes[l]))
        }

        if (childMap[lIdx]) {
            childMap[lIdx].forEach(uv => {
                !visited[uv] && iter([...list, uv], visited)
            })
        }
        visited[lIdx] = false
    }
}

main()
