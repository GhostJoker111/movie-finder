const watchlist = document.getElementById("watchlist");
let keys = Object.keys(localStorage)

function handleWatchlist(keys) {
  watchlist.innerHTML = ""

  keys.forEach((key) => {
    const data = JSON.parse(localStorage.getItem(key));
    const { Poster, Title, Ratings, Runtime, Genre, Plot } = data;

    watchlist.innerHTML +=
      `
    <div class="film-card" id="film-card-${Title}"> 
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
          <button id="toggle-btn-${Title}">-</button>
        </div>
        <div>
          <p>${Plot}</p>
        </div>
      </div>
    </div>
    `

    document.getElementById(`toggle-btn-${Title}`).addEventListener('click', function () {
      localStorage.removeItem(`${Title}`);
      document.getElementById(`film-card-${Title}`).remove();
      keys = Object.keys(localStorage)
      handleWatchlist(keys)
    });
  })
};

handleWatchlist(keys)