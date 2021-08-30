function runSolution(solution) {
  const t1 = performance.now()
  const result = solution.call()
  const t2 = performance.now()
  return {
    result,
    executionTime: t2 - t1
  }
}

function getProblemNumber(dirname) {
  return dirname.split(/^.*[\\/]/)[1]
}

export {
  runSolution, getProblemNumber
}
