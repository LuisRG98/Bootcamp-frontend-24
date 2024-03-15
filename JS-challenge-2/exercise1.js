const numbers = [4, 2, 8, 1, 6, 5];

numbers.sort(function (a, b) {
  return a - b;
});

console.log("smallest number:", numbers[0]);

numbers.sort(function (a, b) {
  return b - a;
});
