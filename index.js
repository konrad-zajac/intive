import MoviesStorage from './movies-storage.js';
import setCounterOfTo from './movies-counter.js';
	
//uncomment to check if function setCounterOfTo works
 
//	 setCounterOfTo('moviesCounterAll',33); 
// setCounterOfTo('moviesCounterSeen',3); 

//uncomment to check if class MoviesStorage works
//
 //var insFunction = new foo();	
// console.log(insFunction.hi);

var insClass = new MoviesStorage();
//console.log(insClass.greet());
// [OK] function get without parameter
//console.log(insClass.get());

// [OK] function get with parameter
// console.log(insClass.get(2));

// [OK] function set with parametrem data
//onsole.log(insClass.set("foo"));

// [OK] function set with parametrem data
	//console.log(insClass.set(1,101));

// [OK] function remove with id
// 	
		console.log(insClass.remove(2));
		console.log(insClass.remove(1));
