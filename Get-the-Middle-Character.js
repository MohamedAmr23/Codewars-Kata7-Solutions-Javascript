function getMiddle(s) {
  calcStrLength = s.length;
  if (calcStrLength % 2 == 0) {
    let res = calcStrLength / 2;
    return s[res - 1] + s[res];
  } else {
    let res = Math.ceil(calcStrLength / 2);
    return s[res - 1];
  }
}

console.log(getMiddle("middle"));
