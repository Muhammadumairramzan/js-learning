const  myAarr = [0,1,2,3,4,5]
const my_heros = ["allama","Iqbal"]
const my_arr_02 = new Array(1,2,3,4)

// my_heros.push(myAarr)
// console.log(my_heros)

// new_ar = my_heros.concat(myAarr)
// console.log(new_ar)
// Spread Method

const all_array = [...myAarr,...my_heros]
console.log(all_array)

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
