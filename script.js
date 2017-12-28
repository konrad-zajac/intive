//funkcja oblicza ile jest widzianych filmow
function objectLength(obj)
 {
var flaga_widzianych_filmow = 0;
 //for przeglada obiekty z tablicy 0,1,2..7
  for(var i in obj)
  {
	if (obj[i]["seen"] == "T")
		//jezeli obiekt ma atrybut "seen" == "T" to znaczy ze byl widziany i zwieksza odpowiednia flage
	{
		flaga_widzianych_filmow++;
	}
  }
return flaga_widzianych_filmow;
}
//zmienna bierze to co zwraca funkcja "objectLength" kiedy damy jej tablice
var SeenResult = objectLength(moviesData);   
   document.getElementById("moviesCounterSeen").innerHTML = SeenResult;
//dalsza czesc zadanie 5, czyli wytworzenie listy filmow
function getAllInfo(obj)
{
	var flaga_wszystkich_filmow = 0;   
	//tu jest tworzone 6 tablic, ktore beda sluzyly do przechowywania zmiennych
	var id = [];
	var year = [];
	var title = [];
	var genre = [];
	var summary = [];
	var seen = [];
//for przeglada obiekty z tablicy 0,1,2..7
	for (var i in obj)
	{	
		//ta flaga jest zwiekszana dla kazdego filmu
      flaga_wszystkich_filmow++;
      //to tych 6 tablic przypisywane sa odpowiednie dane dla kazdego elementu
		id[i] = obj[i]["id"];
		year[i] = obj[i]["year"];
		title[i] = obj[i]["title"];
		genre[i] = obj[i]["genre"];
		summary[i] = obj[i]["summary"]; 
		seen[i] = obj[i]["seen"]; 
		//tworzone sa stringi zawierajace etykiety oraz odpowiednie dane dla kazdego li
		let string_id = "id:" + id[i];
		let string_year = "year:" + year[i];
		let string_title = "title:" + title[i];
		let string_genre = "genre:" + genre[i];
		let string_summary = "summary:" + summary[i];
		let string_seen = "seen:" + seen[i];
		//tworzony jest element <li></li>
		var node = document.createElement("LI" );
		//dodawany jest id (i kolejne 5 atrybotow) i dodawany do nod'a
		var textnode = document.createTextNode(string_id);
		node.appendChild(textnode);
		//po kazdej parze dodawany jest </br>
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
		//jezeli obiekt ma atrybut "seen" == "T" to znaczy ze byl widziany
		//dodawany jest zielony kolor czcionki i pelna tresc buttona sie zmienia
			if (obj[i]["seen"] == "T")	
			{
				node.classList.add("seen");
				var tresc_buttona = document.createTextNode("Movie seen");
			}
			else
			{
				var tresc_buttona = document.createTextNode("Movie not seen");
			}
		//dodaje unikalny id do li
		node.setAttribute("id", "jeden_li" + [i]); 
		//dodaje calego nod'a
		document.getElementById("moviesList").appendChild(node);
		//tworzy pojedynczy przycisk
		var btn = document.createElement("BUTTON");
		//dodaje tresc do przycisku
		btn.appendChild(tresc_buttona);
		//dodaje unikalny id do przycisku
		btn.setAttribute("id", "jeden_btn" + [i] ); 
		//dodaje wydarzenie "onclick" ktore wywoluje funkcje zmieniajaca dana tresc
		btn.setAttribute("onclick", "change_status(" + [i] + ")");
		//dodaje przycisk do odpowiedniego li
		//w debugerze widac ze ul jest dodawany sam li, a potem przycisk dla niego
		document.getElementById("jeden_li" + [i]).appendChild(btn);
	}
	//koniec petli for to mozna wyswietlic flage
	//ustawia element HTML o id "moviesCounterAll" na opowiednia flage
document.getElementById("moviesCounterAll").innerHTML = flaga_wszystkich_filmow;	
}
let title_to_list = getAllInfo(moviesData);
//ta_funkcja jest odpowiedzialna za zmiane statusu
function change_status(i)
{
	//wybierany jest odpowiedni node
	var node = document.getElementById("jeden_li" + [i]);
	//w nim wybierany jest odpowiedni przycisk
	var buttin = document.getElementById("jeden_btn" + [i]);
	//klnieto w "movie seen" - czyli nie obejrzano
	//to usun klase "seen", zmien tresc, dekrementuj licznik widzianych filmow
	//jezeli klnieto w "movie not seen" - czyli obejrzano to inkrementuj 
	//to dodaj klase "seen", zmien tresc, inkrementuj licznik widzianych filmow
	if (node.classList.contains("seen"))
	 {
		node.classList.remove("seen");
		buttin.childNodes[0].nodeValue = "Movie not seen";
		--SeenResult;
		document.getElementById("moviesCounterSeen").innerHTML = SeenResult;
	}
	else
	 {
		node.classList.add("seen");
		buttin.childNodes[0].nodeValue = "Movie seen";
		++SeenResult;
		document.getElementById("moviesCounterSeen").innerHTML = SeenResult;

	}
}


