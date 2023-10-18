const movieSearchEl = document.getElementById("movie-search");
const movieListEl = document.getElementById("movie-list");

movieSearchEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const movieNameEl = document.getElementById("movie-name");
  movieListEl.innerHTML = "";
  getFilmSearchResults(movieNameEl.value);
});

function getFilmSearchResults(movieName) {
  fetch(`http://www.omdbapi.com/?apikey=c0791940&t=${movieName}`)
    .then(res => res.json())
    .then(data => console.log(data))
}
