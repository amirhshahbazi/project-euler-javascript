import { getProblemNumber } from '../utils'
import Problem from '../problem'

function solution() {
  let first = 1; let second = 2; let sum = 2; let tmp = 0

  while(second < 4_000_000) {
    tmp = first + second
    if (tmp % 2 === 0) sum += tmp
    first = second
    second = tmp
  }

  return sum

  // slower solution
  // let firstTerms = [1, 2]
  // let sum = 2
  // let sumOfTerms = 0
  // while (true) {
  //   sumOfTerms = firstTerms.reduce((s, v) => s + v)
  //   if (sumOfTerms > 4_000_000) break
  //   firstTerms.push(sumOfTerms)
  //   firstTerms = firstTerms.slice(1, 3)
  //   if (sumOfTerms % 2 === 0) sum += sumOfTerms
  // }
  // return sum
}

const problem = new Problem(
  'Even Fibonacci numbers',
  4613732,
  getProblemNumber(__dirname),
  solution
)

export { problem }
