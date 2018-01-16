//This worked previously...

import MoviesStorage from './movies-storage.js';
var ins = new MoviesStorage();

  ins.movies.forEach(function(entry)
   {
    console.log(entry["title"]);
  });
function validate() 
{
  let film_title = document.forms["myForm"]["film_title"].value;
  let film_year = document.forms["myForm"]["film_year"].value;
  let film_genre = document.forms["myForm"]["film_genre"].value;
   
    if (film_title)
    {
    //TODO      
    }
    else
    {
      alert("Film title is empty");
      window.location.href = 'add.html'
    };
    if (film_year)
    {
    //TODO      
    }
    else
    {
      alert("Film year is empty");
      window.location.href = 'add.html'
    };
    if (film_genre)
    {
    //TODO      
    }
    else
    {
      alert("Film genre is empty");
      window.location.href = 'add.html'
    };

    if (!(/^([0-9][0-9][0-9][0-9])$/.test(film_year)))
     {
        alert("Film year must be four digits");
       window.location.href = 'add.html';
 
        return false;
       }
    else
    {
           location = 'index.html';
    };
}; 