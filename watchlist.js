const watchlist = document.getElementById("watchlist");
let keys = Object.keys(localStorage)

function handleWatchlist(keys) {
  watchlist.innerHTML = ""

  const feedHtml = keys.map(key => {
    const data = JSON.parse(localStorage.getItem(key));
    const { Poster, Title, Ratings, Runtime, Genre, Plot, imdbID } = data;

    watchlist.innerHTML +=
      `
    <div class="film-card"> 
      <div class="poster-div">
        <img class="poster-img" src=${Poster}>
      </div>
      <div class="description-field">
        <div class="d-flex">
          <h3 class="title">${Title}</h3>
          <p class="rating"><span>&#9733</span> ${Ratings[0].Value}
        </div>
        <div class="d-flex">
          <p>${Runtime}</p>
          <p>${Genre}</p>
          <button id="toggle-btn" data-id=${imdbID}>-</button>
        </div>
        <div>
          <p>${Plot}</p>
        </div>
      </div>
    </div>
    `
  }).join('')

  document.addEventListener('click', function (e) {
    if (e.target.dataset.id) {
      localStorage.removeItem(e.target.dataset.id);
      keys = Object.keys(localStorage)
      handleWatchlist(keys)
    }
  })

  return feedHtml;
};

handleWatchlist(keys)