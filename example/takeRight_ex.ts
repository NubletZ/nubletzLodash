import * as _ from '../mod.ts'


console.log("\n_.takeRight([1,2,3,4], 2) =", _.takeRight(['a', 'b', 'c', 'd'], 2))
console.log("_.takeRight([3,4,6], 6) =", _.takeRight([3,4,6], 6))
console.log("_.takeRight([1,2,3]) =", _.takeRight([1,2,3]))
console.log("_.takeRight([1,2,3], 0) =", _.takeRight([1,2,3], 0))