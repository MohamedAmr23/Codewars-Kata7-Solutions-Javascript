var isSquare = function (n) {
//   let sqrtN = Math.sqrt(n);
//   return  sqrtN  %1 ===0? true : false;
return Number.isInteger(Math.sqrt(n))
};

console.log(isSquare(83));

//   Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
//   Test.assertEquals(isSquare( 3), false, "3 is not a square number");
//   Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
//   Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
//   Test.assertEquals(isSquare(26), false, "26 is not a square number");
