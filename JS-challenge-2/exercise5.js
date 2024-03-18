function findSingleElement(arr) {
  const countMap = arr.reduce(
    (map, num) => map.set(num, (map.get(num) || 0) + 1),
    new Map()
  );
  const uniqueElement = Array.from(countMap.keys()).filter(
    (num) => countMap.get(num) === 1
  );
  return uniqueElement[0];
}

const arr = [1, 2, 4, 7, 4, 2, 1];
console.log(findSingleElement(arr)); // Output: 7
