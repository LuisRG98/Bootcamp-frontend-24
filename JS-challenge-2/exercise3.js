function removeDuplicates(array) {
  return array.filter((value, index) => array.indexOf(value) === index);
}

const originalArray = [1, 2, 3, 4, 2, 3, 5];
const newArray = removeDuplicates(originalArray);
console.log(newArray); // Output: [1, 2, 3, 4, 5]
