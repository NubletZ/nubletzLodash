import { expect } from 'https://deno.land/x/tdd/mod.ts'
import * as _ from '../mod.ts'

Deno.test("intersection", () => {
    let x = _.intersection([1,3,4,5], [1,3,5], [2,3,4,5])
    expect(x).to.equal([3,5])
    let y = _.intersection(['a','b','c'], ['b','a'])
    expect(y).to.equal(['a','b'])
})