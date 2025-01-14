function filter_list(l) {
  // sol 1
  //   return l.filter((item) => (item === Number(item)));
  // sol 2
  //   return l.filter((item) => typeof item ==='number');
  // sol 3
  return l.filter((item) => typeof item !== "string");
}

console.log(filter_list([1, "a", "b", 0, 15]));
