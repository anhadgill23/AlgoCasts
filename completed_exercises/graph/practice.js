let findShortestPath = function (startCoordinates, grid) {
  let distanceFromTop = startCoordinates[0];
  let distanceFromLeft = startCoordinates[1];

  let location = {
    distanceFromTop: distanceFromTop,
    distanceFromLeft: distanceFromLeft,
    path: [],
    status: 'Start'
  }

  var queue = [location];

  while(queue.length > 0){
    let currentLocation = queue.shift();

    let newLocation = exploreInDirection(currentLocation, 'North', grid)


  }
}

// exploreInDirection should check which places are safe to trend, update the location accordingly. In the location, update the distance from top, from left and path.
