import { problem } from '../../problems/2'
import { runSolution } from '../../problems/utils'

test(`#${problem.number} --- ${problem.title}`, () => {
  const result = runSolution(problem.solution)
  expect(result.result).toBe(problem.answer)
  expect(result.executionTime).toBeLessThan(60000)
})
