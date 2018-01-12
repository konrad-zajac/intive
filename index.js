import MoviesStorage from './movies-storage.js'
import setCounterOfTo from './movies-counter.js';

//odkomentowac zeby zobaczyc czy funkcja setCounterOfTo dziala
 
// setCounterOfTo('moviesCounterAll',33); 
// setCounterOfTo('moviesCounterSeen',3); 

//odkomentowac zeby zobaczyc czy klasa MoviesStorage dziala
var ins = new MoviesStorage();
// [OK] funkcja get bez parametru
// console.log(ins.get());

// [OK] funkcja get z parametrem 
// console.log(ins.get(2));

// [TODO] funkcja set z parametrem data
// 
console.log(ins.set("foo"));

// [TODO] funkcja set z parametrem data
// console.log(ins.set(1,"foo"));

// [OK] funkcja remove z id
// console.log(ins.remove(2));


// document.getElementById("moviesCounterAll").innerHTML = moviesData.length; 
// //druga wartosc, czyli widziane filmy jest modyfikowana
// //dlatego jest w osobnej funkcji

// let seenMoviesFunction = (obj) => 
// {
//   let seenMoviesFlag = 0;  
//     for(let i in obj)
//   {
//     (obj[i]["seen"] == "T") ? seenMoviesFlag++ : console.log('');
//   }
//   return seenMoviesFlag;
// }

// var seenResult = seenMoviesFunction(moviesData);   
// document.getElementById("moviesCounterSeen").innerHTML = seenResult;
// //dalsza czesc zadanie 5, czyli wytworzenie listy filmow

// function getAllInfo(obj)
// {
//   obj.forEach(getSingleData);
// }
// function getSingleData(element)
// {
//   let markup = `
//     <li class="${(element.seen == "T" )? `seen` :`unseen` }" id="singleLi${element.id}">
//     <table>
//       <tr>
//         <td>
//         id:
//         </td>
//         <td>
//         ${element.id}
//         </td>
//       <tr>

//       <tr>
//         <td>
//         year:
//         </td>
//         <td>
//         ${element.year}
//         </td>
//       <tr>

//       <tr>
//         <td>
//         title
//         </td>
//         <td>
//         ${element.title}
//         </td>
//       <tr>

//       <tr>
//         <td>
//         genre:
//         </td>
//         <td>
//         ${element.genre}
//         </td>
//       <tr>

//       <tr id="summary">
//         <td>
//         summary:
//         </td>
//         <td>
//         ${element.summary}
//         </td>
//       <tr>

//       <tr>
//         <td>
//       state:
//         </td>
//         <td>
        
//       <button onclick="changeStatus(${element.id})">
//                   ${(element.seen == "T" )? `seen` :`unseen` }
//       </button> 
//         </td>
//       <tr>


//     </table>

//     </li>
//     </br>
//   `;
//   ul = document.getElementById("moviesList");
//   ul.insertAdjacentHTML("beforeend", markup);
// }
// let listOfMovies = getAllInfo(moviesData);

// function changeStatus(i)
// {
//   let nodeIDToChange = ("singleLi" + i);
//   let nodeElement = document.getElementById(nodeIDToChange);
//   let buttonElement = nodeElement.getElementsByTagName("button");

//   if (nodeElement.classList.contains("seen"))
//   {
//     nodeElement.classList.remove("seen");
//     nodeElement.classList.add("unseen");
//     buttonElement[0].childNodes[0].textContent = "unseen";
//     seenResult--;
//   }
//   else
//   {
//     nodeElement.classList.remove("unseen");
//     nodeElement.classList.add("seen");
//     buttonElement[0].childNodes[0].textContent = "seen";
//     seenResult++;
//   }
//   document.getElementById("moviesCounterSeen").innerHTML = seenResult;
// }
