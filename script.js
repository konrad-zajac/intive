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
function getAllInfo(obj)
{
	var id = [];
	var year = [];
	var title = [];
	var genre = [];
	var summary = [];
	var seen = [];

	for (var i in obj)
	{	

		id[i] = obj[i]["id"];
		year[i] = obj[i]["year"];
		title[i] = obj[i]["title"];
		genre[i] = obj[i]["genre"];
		summary[i] = obj[i]["summary"]; 
		seen[i] = obj[i]["seen"]; 

		let string_id = "id:" + id[i];
		let string_year = "year:" + year[i];
		let string_title = "title:" + title[i];
		let string_genre = "genre:" + genre[i];
		let string_summary = "summary:" + summary[i];
		let string_seen = "seen:" + seen[i];


		var node = document.createElement("LI" );

		var textnode = document.createTextNode(string_id);
		node.appendChild(textnode);


		var br = document.createElement("br")
		node.appendChild(br);


		var textnode = document.createTextNode(string_year);
		node.appendChild(textnode);


		var br = document.createElement("br")
		node.appendChild(br);

		var textnode = document.createTextNode(string_title);
		node.appendChild(textnode);

		var br = document.createElement("br")
		node.appendChild(br);

		var textnode = document.createTextNode(string_genre);
		node.appendChild(textnode);

		var br = document.createElement("br")
		node.appendChild(br);

		var textnode = document.createTextNode(string_summary);
		node.appendChild(textnode);

		var br = document.createElement("br")
		node.appendChild(br);

		
		var textnode = document.createTextNode(string_seen);
		node.appendChild(textnode);

		var br = document.createElement("br")
		node.appendChild(br);




		document.getElementById("moviesList").appendChild(node);
		document.getElementById("moviesList").appendChild(br);

	}

}
let title_to_list = getAllInfo(moviesData);

   
