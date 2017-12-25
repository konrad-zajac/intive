


function objectLength(obj) {
  var result = 0;
  for(var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result++;
    }

  }
  return result;
}
let moviesCount =objectLength(moviesData);
document.getElementById("moviesCounterAll").innerHTML = moviesCount;

function SeenLength(obj)
{
	var seen_result = 0;
	for (var prop in obj)
	{
		console.log(obj[prop]["seen"] == "T")
		if (obj[prop]["seen"] == "T")
		{
			seen_result++;
		}
	}
	return seen_result;
}
let Seen = SeenLength(moviesData);
document.getElementById("moviesCounterSeen").innerHTML = Seen;
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
document.getElementById("moviesList").appendChild(node);
