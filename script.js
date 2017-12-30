//wartosc widzianych filmow jest modyfikowana
//dlatego jest w osobnej funkcji
let seenMoviesFunction = (obj) => 
{
  let seenMoviesFlag = 0;  
    for(let i in obj)
  {
  if (obj[i]["seen"] == "T")
    {
      seenMoviesFlag++;
    }
  }
  return seenMoviesFlag;
}
var seenResult = seenMoviesFunction(moviesData);   
   document.getElementById("moviesCounterSeen").innerHTML = seenResult;
//dalsza czesc zadanie 5, czyli wytworzenie listy filmow
function getAllInfo(obj)
{
  var allMoviesFlag = 0;   
  let id = [], year = [], title = [], genre = [], summary = [], seen = [];
  for (let i in obj)
  {  
    allMoviesFlag++;
    //tworzony jest element <li></li> jako node
    // kolejnie dodawane są kolrjne elementy oraz </br>
    var node = document.createElement("LI" );
    var br = document.createElement("br");
    var textnode = document.createTextNode("id: " + obj[i]["id"]);
    node.appendChild(textnode);
    var br = document.createElement("br");
    node.appendChild(br);
    var textnode = document.createTextNode("year:" + obj[i]["year"]);
    node.appendChild(textnode);
    var br = document.createElement("br")
    node.appendChild(br);
    var textnode = document.createTextNode("title:" + obj[i]["title"]);
    node.appendChild(textnode);
    var br = document.createElement("br")
    node.appendChild(br);
    var textnode = document.createTextNode("genre:" + obj[i]["genre"]);
    node.appendChild(textnode);
    var br = document.createElement("br")
    node.appendChild(br);
    var textnode = document.createTextNode("summary:" + obj[i]["summary"]);
    node.appendChild(textnode);
    var br = document.createElement("br")
    node.appendChild(br);
    //obsluga graficznego elementu
    (obj[i]["seen"].includes("T")) ? node.classList.add("seen") : node.classList.add("notSeen");
      if (obj[i]["seen"].includes("T"))  
      {
        var buttonContent   = document.createTextNode("Movie seen");
      }
      else
      {
        var buttonContent = document.createTextNode("Movie not seen");
      }
    node.setAttribute("id", "single_li" + [i]); 
    document.getElementById("moviesList").appendChild(node);
    var btn = document.createElement("BUTTON");
    btn.appendChild(buttonContent);
    btn.setAttribute("id", "singleBtn" + [i] ); 
    btn.setAttribute("onclick", "changeStatus(" + [i] + ")");
    document.getElementById("single_li" + [i]).appendChild(btn);
  }
document.getElementById("moviesCounterAll").innerHTML = allMoviesFlag;  
}
let title_to_list = getAllInfo(moviesData);

function changeStatus(i)
{
  let node = document.getElementById("single_li" + [i]), buttin = document.getElementById("singleBtn" + [i]);
  if (node.classList.contains("seen"))
  {
    node.classList.remove("seen");
    buttin.childNodes[0].nodeValue = "Movie not seen";
    --seenResult;
    document.getElementById("moviesCounterSeen").innerHTML = seenResult;
  }
  else
  {
    node.classList.add("seen");
    buttin.childNodes[0].nodeValue = "Movie seen";
    ++seenResult;
    document.getElementById("moviesCounterSeen").innerHTML = seenResult;
  }
}