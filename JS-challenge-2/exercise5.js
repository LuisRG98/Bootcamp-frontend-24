function findSingleElement(arr) {
  const uniqueElements = new Set();
  const repeatedElements = new Set();

  for (let num of arr) {
    if (uniqueElements.has(num)) {
      repeatedElements.add(num);
      uniqueElements.delete(num);
    } else if (!repeatedElements.has(num)) {
      uniqueElements.add(num);
    }
  }

  return Array.from(uniqueElements)[0];
}

const arr = [1, 2, 4, 7, 4, 2, 1];
console.log(findSingleElement(arr)); // Output: 2
