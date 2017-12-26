//filmy all
function objectLength(obj) {
  var result = 0;
  for(var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result++;
    }

  }
  return result;
}
let moviesCount =objectLength(moviesData);
document.getElementById("moviesCounterAll").innerHTML = moviesCount;
//filmy seen
function SeenLength(obj)
{
	var seen_result = 0;
	for (var i in obj)
	{
		if (obj[i]["seen"] == "T")
		{
			seen_result++;
		}
	}
	return seen_result;
}
let Seen = SeenLength(moviesData);
document.getElementById("moviesCounterSeen").innerHTML = Seen;

//dodawanie do ul
function getTitle(obj)
{
	var title = [];
	var genre = [];
	var summary = [];

	for (var i in obj)
	{	
		title[i] = obj[i]["title"] + '\n';
		genre[i] = obj[i]["genre"]+ '\n';
		summary[i] = obj[i]["summary"] +'\n';

		let htmlstring = "title: " + title[i] +'\n'+ " genre: " + genre[i] + " summary: " + summary[i]

		var node = document.createElement("LI" );
		var br = document.createElement("br")
		node.appendChild(br);	
		var textnode = document.createTextNode(htmlstring);
		node.appendChild(textnode);
		document.getElementById("moviesList").appendChild(node);

	}

}
let title_to_list = getTitle(moviesData);

   
