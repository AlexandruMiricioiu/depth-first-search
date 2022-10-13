const list = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
]


const adjacency = [
  [1, 3],
  [3, 4],
  [3, 5],
  [5, 6],
  [8, 9]
]


function findRoots(list, adjacency) {
  return list.map(i => i.id).filter(i => !adjacency.map(j => j[1]).includes(i))
}


function getNode(list, node) {
  return list.find(n => n.id === node)
}


function printDepthFirst(list, adjacency, node, res = []) {

  res.push(getNode(list, node))

  adjacency.filter((e) => e[0] === node).forEach((e) => {
    const child = e[1]

    return printDepthFirst(list, adjacency, child, res)
  })

  return res
}


const roots = findRoots(list, adjacency)
let depthFirstList = []
roots.forEach((r) => {
  depthFirstList = [
    ...depthFirstList,
    ...printDepthFirst(list, adjacency, r)
  ]
})

console.log(depthFirstList)

// function findLeaves(list, adjacency) {
//   return list.map(i => i.id).filter(i => !adjacency.map(j => j[0]).includes(i))
// }

// let leaves = findLeaves(list, adjacency)
// console.log(leaves, 'leaves')
// let roots = findRoots(list, adjacency)
// console.log(roots, 'roots')