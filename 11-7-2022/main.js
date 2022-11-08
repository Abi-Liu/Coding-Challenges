// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array).

// test case: [[10,0],[3,5],[5,8]] ====> 5

var number = function(busStops){
    return busStops.reduce((a, c) => a + c[0] - c[1], 0)
  }