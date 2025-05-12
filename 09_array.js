// Array

const my_array = [0,1,2,3,4,5]

console.log(my_array[2])

// shallow copy is copy of an object whose properties share same refrence.
// Deep Copy do not share sahre properties same refrence.

const new_array = ["umair","ramzan"]
new_array.pop()
console.log(new_array)

const my_array_02 = new Array(1,2,3,4)
console.log(my_array_02[3])
// Array Method
my_array_02.push(7)
console.log(my_array_02)
// my_array_02.unshift(9)
console.log(my_array_02)
my_array_02.shift()
// slice & splice
console.log("A", new_array)

const myn1 = new_array.slice(1,3)
console.log(myn1);
console.log("B",new_array);
