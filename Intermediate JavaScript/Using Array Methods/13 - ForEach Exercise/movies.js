// Got this file instead of an Array of Number which is what the forEach problem was stating

const movies = [
	{title: "Inception", director: "Christopher Nolan", yearReleased: 2010},
	{title: "Interstellar", director: "Christopher Nolan", yearReleased: 2014},
	{title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", yearReleased: 1999},
	{title: "Blade Runner 2049", director: "Denis Villeneuve", yearReleased: 2017},
	{title: "The Martian", director: "Ridley Scott", yearReleased: 2015},
	{title: "Ex Machina", director: "Alex Garland", yearReleased: 2014},
	{title: "Arrival", director: "Denis Villeneuve", yearReleased: 2016},
	{title: "Eternal Sunshine of the Spotless Mind", director: "Michel Gondry", yearReleased: 2004},
	{title: "Minority Report", director: "Steven Spielberg", yearReleased: 2002},
	{title: "Ex Machina", director: "Alex Garland", yearReleased: 2014}
];

// I will simply go ahead and play a bit with the array of movies instead : )

const movieContainer = document.getElementById("movieContainer");

const recentMoviesOnly = movies.filter((movie, i, arr) => {
	return movie.yearReleased >= 2010;
});

const mappedMovies = recentMoviesOnly.map((movie) => {
	return `
		<div style="border: solid 1px black; width: 15rem; text-align: center; border-radius: 15px">
			<p>Movie Title: ${movie.title}</p>
			<p>Directed By: ${movie.director}</p>
			<p>Realease Year: ${movie.yearReleased}</p>
		</div>
	`
});

movieContainer.innerHTML = mappedMovies.join(""); // .join("") at the end to remove the commas , 😉