/*
 * Bubble sort works by comparing two adjacent numbers next to each other and then
 * swapping their places if the smaller index's value is larger than the larger
 * index's. Continue looping through until all values are in ascending order
 */

function bubbleSort(nums) {
  let isSorted = false;
  let endElem;

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let next = nums[i + 1];

    if (current > next) {
      isSorted = true;
      nums[i] = next;
      nums[i + 1] = current;
    }
  }

  if (isSorted) {
    endElem = nums.pop();

    return [...bubbleSort(nums), endElem];
  }

  return nums;
}

test("bubble sort", function () {
  const nums = [
    10, 5, 3, 8, 2, 6, 4, 7, 9, 10, 5, 3, 8, 2, 6, 4, 7, 9, 10, 5, 3, 8, 2, 6,
    4, 7, 9, 10, 5, 3, 8, 2, 6, 4, 7, 9, 10, 5, 3, 8, 2, 6, 4, 7, 9, 10, 5, 3,
    8, 2, 6, 4, 7, 9, 10, 5, 3, 8, 2, 6, 4, 7, 9, 10, 5, 3, 8, 2, 6, 4, 7, 9,
    10, 5, 3, 8, 2, 6, 4, 7, 9, 10, 5, 3, 8, 2, 6, 4, 7, 9, 10, 5, 3, 8, 2, 6,
    4, 7, 9, 10, 5, 3, 8, 2, 6, 4, 7, 9, 10, 5, 3, 8, 2, 6, 4, 7, 9, 10, 5, 3,
    8, 2, 6, 4, 7, 9, 1,
  ];
  const numsRef = [...nums];
  const sortedNums = bubbleSort(nums);
  const sortedNumsRef = numsRef.sort((a, b) => a - b);

  expect(sortedNums).toEqual(sortedNumsRef);
});
