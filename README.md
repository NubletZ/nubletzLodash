# My Lodash
Practice to publish my own lodash function including the following function :
1. intersection
2. take
3. takeRight

---

## 1. intersection
`_.intersection([arrays])`

intersection will return value that included in all arrays.
### Example

```
import * as _ from '../mod.ts'

console.log("_.intersection([1,3,4,5], [1,3,5], [2,3,4,5]) = ", _.intersection([1,3,4,5], [1,3,5], [2,3,4,5]))
console.log("_.intersection(['a','b','c'], ['b','a']) =", _.intersection(['a','b','c'], ['b','a']))
```

### Run

```
$ deno run example/intersection_ex.ts
Check file:///D:/The%20Kunils/Kuliah/Tahun%203/110Git/nubletzLodash/example/intersection_ex.ts
_.intersection([1,3,4,5], [1,3,5], [2,3,4,5]) =  [ 3, 5 ]
_.intersection(['a','b','c'], ['b','a']) = [ "a", "b" ]
```

---

## 2. take
`_.take(array, [n=1])`

take will create a slice with total of n elements from given array.
### Example

```
import * as _ from '../mod.ts'

console.log('_.take([1,2,3,4,5], 3) = ', _.take([1,2,3,4,5], 3))
console.log('_.take([3,6,7], 6) = ', _.take([3,6,7], 6))
console.log('_.take([1,2,3]) = ', _.take([1,2,3]))
console.log('_.take([3,6,7], 0) = ', _.take([3,6,7], 0))
```

### Run

```
$ deno run example/take_ex.ts        
Check file:///D:/The%20Kunils/Kuliah/Tahun%203/110Git/nubletzLodash/example/take_ex.ts
_.take([1,2,3,4,5], 3) =  [ 1, 2, 3 ]
_.take([3,6,7], 6) =  [ 3, 6, 7 ]
_.take([1,2,3]) =  [ 1 ]
_.take([3,6,7], 0) =  []
```

---

## 3. takeRight
`_.takeRight(array, [n=1])`

takeRight will create a slice with total of n elements from the end of the given array.

### Example

```
import * as _ from '../mod.ts'


console.log("\n_.takeRight([1,2,3,4], 2) =", _.takeRight(['a', 'b', 'c', 'd'], 2))
console.log("_.takeRight([3,4,6], 6) =", _.takeRight([3,4,6], 6))
console.log("_.takeRight([1,2,3]) =", _.takeRight([1,2,3]))
console.log("_.takeRight([1,2,3], 0) =", _.takeRight([1,2,3], 0))
```

### Run

```
$ deno run example/takeRight_ex.ts   
Check file:///D:/The%20Kunils/Kuliah/Tahun%203/110Git/nubletzLodash/example/takeRight_ex.ts

_.takeRight([1,2,3,4], 2) = [ "c", "d" ]
_.takeRight([3,4,6], 6) = [ 3, 4, 6 ]
_.takeRight([1,2,3]) = [ 3 ]
_.takeRight([1,2,3], 0) = []
```