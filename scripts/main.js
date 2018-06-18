$("#searchBtn").click(function(){
	var string = $("#searchInput").val();
	var url = "http://www.omdbapi.com/?apikey=7ad73765&t=" + string;

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><div id="movieTitle">Title: ' + result.Title + '</div>' + '<div id="year">Year: ' + result.Year + '</div>' + '<div id="rated"><br>Rated: ' + result.Rated + '</div>' + '<div id="released"><br>Released: ' + result.Released + '</div>' + '<div id="runtime"><br>Runtime: ' + result.Runtime + '</div>' + '<div id="genre"><br>Genre: ' + result.Genre + '</div>' + '<div id="director"><br>Director: ' + result.Director + '</div>' + '<div id="writer"><br>Writer: ' + result.Writer + '</div>' + '<div id="actors"><br>Actors: ' + result.Actors + '</div></div>');
	});	
		
});



$("#robocop").click(function(){
	var url = "http://www.omdbapi.com/?apikey=7ad73765&t=robocop";

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><div id="movieTitle">Title: ' + result.Title + '</div>' + '<div id="year">Year: ' + result.Year + '</div>' + '<div id="rated"><br>Rated: ' + result.Rated + '</div>' + '<div id="released"><br>Released: ' + result.Released + '</div>' + '<div id="runtime"><br>Runtime: ' + result.Runtime + '</div>' + '<div id="genre"><br>Genre: ' + result.Genre + '</div>' + '<div id="director"><br>Director: ' + result.Director + '</div>' + '<div id="writer"><br>Writer: ' + result.Writer + '</div>' + '<div id="actors"><br>Actors: ' + result.Actors + '</div></div>');
	});	
		
});

$("#theShining").click(function(){
	var url = "http://www.omdbapi.com/?apikey=7ad73765&t=the-shining";

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><div id="movieTitle">Title: ' + result.Title + '</div>' + '<div id="year">Year: ' + result.Year + '</div>' + '<div id="rated"><br>Rated: ' + result.Rated + '</div>' + '<div id="released"><br>Released: ' + result.Released + '</div>' + '<div id="runtime"><br>Runtime: ' + result.Runtime + '</div>' + '<div id="genre"><br>Genre: ' + result.Genre + '</div>' + '<div id="director"><br>Director: ' + result.Director + '</div>' + '<div id="writer"><br>Writer: ' + result.Writer + '</div>' + '<div id="actors"><br>Actors: ' + result.Actors + '</div></div>');
	});	
		
});

$("#rambo").click(function(){
	var url = "http://www.omdbapi.com/?apikey=7ad73765&t=rambo";

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><div id="movieTitle">Title: ' + result.Title + '</div>' + '<div id="year">Year: ' + result.Year + '</div>' + '<div id="rated"><br>Rated: ' + result.Rated + '</div>' + '<div id="released"><br>Released: ' + result.Released + '</div>' + '<div id="runtime"><br>Runtime: ' + result.Runtime + '</div>' + '<div id="genre"><br>Genre: ' + result.Genre + '</div>' + '<div id="director"><br>Director: ' + result.Director + '</div>' + '<div id="writer"><br>Writer: ' + result.Writer + '</div>' + '<div id="actors"><br>Actors: ' + result.Actors + '</div></div>');
	});	
		
});

$("#terminator2").click(function(){
	var url = "http://www.omdbapi.com/?apikey=7ad73765&t=terminator-2";

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><div id="movieTitle">Title: ' + result.Title + '</div>' + '<div id="year">Year: ' + result.Year + '</div>' + '<div id="rated"><br>Rated: ' + result.Rated + '</div>' + '<div id="released"><br>Released: ' + result.Released + '</div>' + '<div id="runtime"><br>Runtime: ' + result.Runtime + '</div>' + '<div id="genre"><br>Genre: ' + result.Genre + '</div>' + '<div id="director"><br>Director: ' + result.Director + '</div>' + '<div id="writer"><br>Writer: ' + result.Writer + '</div>' + '<div id="actors"><br>Actors: ' + result.Actors + '</div></div>');
	});	
		
});











