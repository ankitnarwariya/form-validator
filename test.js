let arr = [10, 20, 30, 40]


//forEach
let twice = arr.forEach((e)=>{
  return e * 2;
})
console.log(twice);


//map
let twice2 = arr.map((x) =>{
    return x *  2;
})
console.log(twice2);


//filter
let filtered = arr.filter((f) =>{
    return f > 15;
})
console.log(filtered);


let sum_reduced = arr.reduce((accumulator, y) =>{
  //It adds  previous value with new value
  return accumulator + y
}, 0)

console.log(sum_reduced);