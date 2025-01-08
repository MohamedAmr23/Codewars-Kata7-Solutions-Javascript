function squareDigits(num){
    let numToString = String(num)
   return Number(numToString.split('').map((item)=>item**2).join('')) ;
  }

  console.log(squareDigits(3212))