function findLeastFrequentItem(arr) {
  const frequencyMap = {};

  arr.forEach((item) => {
    if (frequencyMap[item]) {
      frequencyMap[item]++;
    } else {
      frequencyMap[item] = 1;
    }
  });

  let leastFrequentItem;
  let leastFrequency = Infinity;

  for (const [item, frequency] of Object.entries(frequencyMap)) {
    if (frequency < leastFrequency) {
      leastFrequency = frequency;
      leastFrequentItem = item;
    }
  }

  return leastFrequentItem;
}

const array = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 5];
const leastFrequent = findLeastFrequentItem(array);
console.log("The least frequent item is:", leastFrequent);
