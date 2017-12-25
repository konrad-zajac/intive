function objectLength(obj) {
  var result = 0;
  for(var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result++;
    }

  }
  return result;
}
let moviesCount = objectLength(moviesData);

 document.getElementById("moviesCounterAll").innerHTML = moviesCount;
