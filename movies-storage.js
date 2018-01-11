export default function MoviesStorage()
 {
 	this.movies = ((localStorage.getItem("movies")) && (JSON.parse(localStorage.getItem("movies")) instanceof Array)) ? "YoMo" : localStorage.getItem("moviesString");
 	    this.greet = function() {
        console.log('Hello!');
    };
}

