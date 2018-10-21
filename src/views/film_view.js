const FilmView = function() {

}

// method is called in List_view: createFilmListItem
FilmView.prototype.createFilmDetail = function (film) {
  const filmDetail = document.createElement('div');
  filmDetail.classList.add('film-detail');

  const title = document.createElement('h3');
  title.textContent = `${film.title} (${film.release_date})`;
  filmDetail.appendChild(title); //append the title to the film-detail div

  const description = document.createElement('p');
  description.textContent = film.description;
  filmDetail.appendChild(description);

  const rtScore = document.createElement('p');
  rtScore.textContent = `Rotten Tomatoes score: ${film.rt_score}`;
  filmDetail.appendChild(rtScore);

  return filmDetail; //return the div back so that ListView:renderFilmView can use it

};

module.exports = FilmView;
