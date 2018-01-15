
function validate() 
{
  let film_title = document.forms["myForm"]["film_title"].value;
  let film_year = document.forms["myForm"]["film_year"].value;
    let film_genre = document.forms["myForm"]["film_genre"].value;
   
    if (film_title)
    {
          
    }
    else
    {
      if (film_year)
      {

      }
      else
      {
         if (film_genre)
        {
        
        }
        else
        {
            alert("Film genre is empty");
           window.location.href = 'add.html';
         
        }
          alert("Film year is empty");
         window.location.href = 'add.html';
       
      }
        alert("Film title is empty");
       window.location.href = 'add.html'
    }

    if (!(/^([0-9][0-9][0-9][0-9])$/.test(film_year)))
     {
        alert("Film year must be four digits");
       window.location.href = 'add.html';
 
        return false;
       }
    else
    {
           location = 'index.html';
    }
} 