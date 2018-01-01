document.getElementById("moviesCounterAll").innerHTML = moviesData.length;  
//druga wartosc, czyli widziane filmy jest modyfikowana
//dlatego jest w osobnej funkcji

let seenMoviesFunction = (obj) => 
{
  let seenMoviesFlag = 0;  
    for(let i in obj)
  {
    (obj[i]["seen"] == "T") ? seenMoviesFlag++ : console.log('');
  }
  return seenMoviesFlag;
}

var seenResult = seenMoviesFunction(moviesData);   
document.getElementById("moviesCounterSeen").innerHTML = seenResult;
//dalsza czesc zadanie 5, czyli wytworzenie listy filmow
function getAllInfo(obj)
{
  let id = [], year = [], title = [], genre = [], summary = [], seen = [];
  for (let mainIterator in obj)
  {  
    //tworzony jest element <li></li> jako node
    // kolejnie dodawane są kolrjne elementy oraz </br>
       
    node = document.createElement("LI");
      textnode = document.createTextNode("id: " + obj[mainIterator]["id"]);
      node.appendChild(textnode);
      br = document.createElement("br");
      node.appendChild(br);
      textnode = document.createTextNode("year:" + obj[mainIterator]["year"]);
      node.appendChild(textnode);
      br = document.createElement("br")
      node.appendChild(br);
      textnode = document.createTextNode("title:" + obj[mainIterator]["title"]);
      node.appendChild(textnode);
      br = document.createElement("br")
      node.appendChild(br);
      textnode = document.createTextNode("genre:" + obj[mainIterator]["genre"]);
      node.appendChild(textnode);
      br = document.createElement("br")
      node.appendChild(br);
      textnode = document.createTextNode("summary:" + obj[mainIterator]["summary"]);
      node.appendChild(textnode);
      br = document.createElement("br")
      node.appendChild(br);
      (obj[mainIterator]["seen"].includes("T")) ? node.classList.add("seen") : node.classList.add("notSeen");
      node.setAttribute("id", "single_li" + [mainIterator]); 
    document.getElementById("moviesList").appendChild(node);

    //obsluga graficznego elementu
    var btn = document.createElement("BUTTON");
      var buttonInitialContent = ((obj[mainIterator]["seen"].includes("T")) ? document.createTextNode("Movie seen") : document.createTextNode("Movie not seen")) ;
      btn.appendChild(buttonInitialContent);
      btn.setAttribute("id", "singleBtn" + [mainIterator] ); 
      btn.setAttribute("onclick", "changeStatus(" + [mainIterator] + ")");
    document.getElementById("single_li" + [mainIterator]).appendChild(btn);
  }
}
let listOfMovies = getAllInfo(moviesData);

function changeStatus(mainIterator)
{
  let node = document.getElementById("single_li" + [mainIterator]), clickedButton = document.getElementById("singleBtn" + [mainIterator]);
  if (node.classList.contains("seen"))
  {
    --seenResult;
   node.classList.remove("seen") ;
   clickedButton.childNodes[0].nodeValue  = "Movie seen";

  }
else 
 {
 ++seenResult ;
  node.classList.add("seen") ;
  clickedButton.childNodes[0].nodeValue = "Movie not seen"; 
}
  // (node.classList.contains("seen"))? --seenResult: ++seenResult ;
  // (node.classList.contains("seen"))? node.classList.remove("seen"): node.classList.add("seen") ;
  // (node.classList.contains("seen"))? clickedButton.childNodes[0].nodeValue  = "Movie seen":clickedButton.childNodes[0].nodeValue = "Movie not seen";
 document.getElementById("moviesCounterSeen").innerHTML = seenResult;
}