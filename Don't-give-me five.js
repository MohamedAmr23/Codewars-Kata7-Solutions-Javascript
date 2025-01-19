function dontGiveMeFive(start, end)
{
    let sum = [] ;
  for (let i =start ; i<=end ; i++){
    sum.push(i)
  }
  return sum.filter((item)=>!item.toString().match(/5/)).length
}
console.log(dontGiveMeFive(4,17))