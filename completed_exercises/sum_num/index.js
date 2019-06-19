var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[i] = nums[i];
  }
  console.log(map)

  for(let j in map) {
    let value = target - nums[j]
    if (map[value] && j !== value) {
      return [map[value], map[j]]; // index of map[value]
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9))
