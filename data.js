const movieSearchEl = document.getElementById("movie-search");
const movieListEl = document.getElementById("movie-list");

movieSearchEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const movieNameEl = document.getElementById("movie-name");
  movieListEl.innerHTML = "";
  handleFilmSearchResults(movieNameEl.value);
});

function handleFilmSearchResults(movieName) {
  fetch(`http://www.omdbapi.com/?apikey=c0791940&t=${movieName}`)
    .then(res => res.json())
    .then(data => {
      if (data.Response === 'False') {
        throw Error("Movie not found");
      } else {
        renderFilmCard(data);
      }
    })
    .catch(() => movieListEl.innerHTML = `<p>Unable to find what you're looking for. Please try another search.</p>`)
};

function renderFilmCard(data) {
  const { Poster, Title, Ratings, Runtime, Genre, Plot } = data;

  const filmCard = document.createElement("div");
  filmCard.classList.add("film-card");
  filmCard.innerHTML =
    `
    <div class="poster-div">
      <img class="poster-img" src=${Poster}>
    </div>
    <div class="description-field">
      <div class="d-flex">
        <h3 class="title">${Title}</h3>
        <p class="raiting"><span>&#9733</span> ${Ratings[0].Value}
      </div>
      <div class="d-flex">
        <p>${Runtime}</p>
        <p>${Genre}</p>
        <button id="add-to-watchlist">+</button>
      </div>
      <div>
        <p>${Plot}</p>
      </div>
    </div>
  `
  movieListEl.append(filmCard);
}