
export default function MoviesStorage()
 {
 	this.movies = ((localStorage.getItem("movies")) && (JSON.parse(localStorage.getItem("movies")) instanceof Array)) ? "YoMo" : JSON.parse(localStorage.getItem("moviesString"));

    this.greet = function()
    {
    	
        return 'Hello!';
    };

    this.get = function get(id = 0)
    {
    	if (id == 0)
    	{
    	return this.movies;	
    	}
    	
        var size = 0, toFindId = id, title;
			for (title in this.movies) 
			{
		        if (this.movies[title]["id"] == toFindId)
		        {
		        	return this.movies[title];
		        } 
	    	}
    };

    this.set = function set(id,data)
    {	
    	
		if (id && data)
		{
		return 'id ='+ id + ' data = '+ data;
		}
		else if (!(Number.isInteger(id)))
		{
			let data = id;
            var len = this.movies.push(data);
			return this.movies;
		}	
    };
    
     this.remove = function(id)
     {
     	 var size = 0, toFindId = id, title;
			for (title in this.movies) 
			{
		        if (this.movies[title]["id"] == toFindId)
		        {
		        let idToRemove = this.movies[title]["id"];
		        let db = this.movies;
		        db.splice(idToRemove,1);
		        return db;
		        } 
	    	}
     }
}


