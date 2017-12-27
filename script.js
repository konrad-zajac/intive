//filmy all i seen
function objectLength(obj) {
  var result = 0;
    var seen_result = 0;
  for(var i in obj)
  {
	if (obj[i]["seen"] == "T")
	{
		seen_result++;
	}
      result++;
  }
document.getElementById("moviesCounterAll").innerHTML = result;
document.getElementById("moviesCounterSeen").innerHTML = seen_result;
}
objectLength(moviesData);
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

		var br = document.createElement("br");
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

		if (obj[i]["seen"] == "T")	
		{
			node.classList.add("seen","ziel");
		}
		node.setAttribute("id", "jeden_ul" + [i]); 
		document.getElementById("moviesList").appendChild(node);
		var btn = document.createElement("BUTTON");

		if(obj[i]["seen"] == "T")
		{
		var t = document.createTextNode("Movie seen");
		}
		else
		{
			var t = document.createTextNode("Movie not seen");
		}
		btn.appendChild(t);
		btn.setAttribute("id", "jeden_btn" + [i] ); 
		btn.setAttribute("onclick", "change_status(" + [i] + ")");

		document.getElementById("jeden_ul" + [i]).appendChild(btn);

	}
	
	var elems = document.getElementsByClassName('seen');
	for(var i = 0; i < elems.length; i++) {
		elems[i].setAttribute("class", "ziel"); 
	}
	
}
let title_to_list = getAllInfo(moviesData);

function change_status(i)
{
	
	var node = document.getElementById("jeden_ul" + [i]);
	var buttin = document.getElementById("jeden_btn" + [i]);
	if (node.classList.contains("seen"))
	 {
		node.classList.remove("seen");
			node.classList.remove("ziel");
		node.style.color = null;
		buttin.childNodes[0].nodeValue = "Movie not seen";
	}
	else
	 {
		node.classList.add("seen");
		node.classList.add("ziel");
		node.style.color = 'green';
		buttin.childNodes[0].nodeValue = "Movie seen";
	}
}

   
