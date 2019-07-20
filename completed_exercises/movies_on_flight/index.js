/*
You are on a flight and wanna watch two movies during this flight.
You are given int[] movie_duration which includes all the movie durations.
You are also given the duration of the flight which is d in minutes.
Now, you need to pick two movies and the total duration of the two movies is less than or equal to (d - 30min).
Find the pair of movies with the longest total duration. If multiple found, return the pair with the longest movie.

movie_duration: [90, 85, 75, 60, 120, 150, 125]
d: 250

Output from aonecode.com
[90, 125]
*/

function movies_in_flight(movieDuration, total_time) {
  total_time = total_time - 30;
  let arr = [];
  for (let j = 0; j < movieDuration.length - 1; j++) {
    for (let i = 1; i < movieDuration.length; i++) {
      let obj = [];
      if (
        movieDuration[j] !== movieDuration[i] &&
        movieDuration[j] + movieDuration[i] <= total_time
      ) { 
        obj.push(
          [j, i],
          movieDuration[j] + movieDuration[i]
        );
        arr.push(obj);
      }
    }
  }
  return arr
    .sort(function(a, b) {
      return a[1] - b[1];
    })
    .pop()[0];
}
console.log(movies_in_flight([90, 85, 75, 60, 120, 150, 125], 250));
