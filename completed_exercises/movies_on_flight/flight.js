function optimalUtilization(maxTravelDist, forwardRouteList, returnRouteList) {
  // WRITE YOUR CODE HERE
  // Each aircraft is assigned two shipping routes at once
  let arr = [];
  for (let j = 0; j < forwardRouteList.length; j++) {
    //loop through the forwardRouteList and for each route, check the corresponding best combination
    for (let i = 0; i < returnRouteList.length; i++) {
      let totalDist = [];
      if (forwardRouteList[j][1] + returnRouteList[i][1] <= maxTravelDist) {
        totalDist.push(
          [forwardRouteList[j][0], returnRouteList[i][0]],
          forwardRouteList[j][1] + returnRouteList[i][1]
        );
        arr.push(totalDist);
      }
    }
  }
  arr = arr.sort(function(a, b) {
    return b[1] - a[1];
  });

  let result = [];
  for (let z = 0; z < arr.length; z++) {
    if (arr[z][1] == arr[0][1]) {
      result.push(arr[z][0]);
    }
  }
  return result;
}

// have something like:
// [[[1, 1], 5000], [[1, 2], 6000]];
console.log(
  optimalUtilization(
    10000,
    [[1, 3000], [2, 5000], [3, 7000], [4, 10000]],
    [[1, 2000], [2, 3000], [3, 4000], [4, 5000]]
  )
);
