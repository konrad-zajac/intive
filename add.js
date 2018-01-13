
function validate() 
{
    var x = document.forms["myForm"]["film_year"].value;
    if (!(/^([0-9][0-9][0-9][0-9])$/.test(x)))
     {
     	let old = window.location.href;
        alert("Film year must be four digits");
   //    window.location.href = 'add.html';
       //window.location.replace("add.html");
     //  window.location = window.location.href;
   //  alert("Page location is " + window.location.href);
   window.location.href = old;
        return false;
       }
    else
    {
           location = 'index.html';
    }
} 