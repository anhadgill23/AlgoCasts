function maxValue(array, start, end) {
  if (start == end) {
    return numbers[start];
  } else {
    let halfway = start + end / 2
    let left = maxValue(array, start, halfway);
    let right = maxValue(array, halfway + 1, end);
    if (left > right) {
      return left;
    } else {
      return right;
    }
  }
}

// second attempt
  function crossSubarray(array, left, middle, right) {
    var leftSum = -Infinity;
    var rightSum = -Infinity;
    var sum = 0;
    var i;
    for (i = middle; i >= left; i -= 1) {
      if (sum + array[i] >= leftSum) {
        leftSum = sum + array[i];
      }
      sum += array[i];
    }
    sum = 0;
    for (i = middle + 1; i < right; i += 1) {
      if (sum + array[i] >= rightSum) {
        rightSum = sum + array[i];
      }
      sum += array[i];
    }
    return leftSum + rightSum;
  }
