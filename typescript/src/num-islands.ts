export function numIslands(grid: string[][]): number {
  const column = grid.length 
  const row = grid[0].length

  const indices = {}
  for (let i=0;i<column;i++) {
    for(let j=0;j<row;j++) {
      indices["${i},${j}"] = 1
    }
  }
  const group = {}
  const groupKey = 1
  Object.keys(indices).forEach(key => {
    const index = key.split(',')
    if (grid[index[0]][index[1]] === '1') {
      group[groupKey].push()
    } else {

    }
  }) 
  return 1
}
