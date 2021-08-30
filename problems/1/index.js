import { getProblemNumber } from '../utils'
import Problem from '../problem'

function solution() {
  let sum = 0
  for (let i = 2; i < 1000; i++) {
    if (i % 5 === 0 || i % 3 === 0) sum += i
  }
  return sum
}

const problem = new Problem(
  'Multiples of 3 or 5',
  233168,
  getProblemNumber(__dirname),
  solution
)



export { problem }
