const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Film = function() {
  this.films = []
};

Film.prototype.getData = function () {
  const url = "https://ghibliapi.herokuapp.com/films";
  const request = new Request(url);
  request.get().then(data => {
    this.films = data
    PubSub.publish('Film:films-ready', this.films) //picked up by list_view
    console.log('Film:data', this.films);
  });
}

Film.prototype.bindEvents = function () {
  PubSub.subscribe('FilterView:ratings-range', (event) => {
    const ratingRange = event.detail;
    this.checkRating(ratingRange)
  });

  PubSub.subscribe("SearchView:search-input", (event) => {
      const searchInput = event.detail;
      console.log('Film:search-input', event.detail);
      const searchResult = this.films.filter(film => film.title.toLowerCase().includes(searchInput))
      PubSub.publish('Film:films-ready', searchResult)
    });
  }

Film.prototype.checkRating = function (ratingRange) {
  let filmsByRatings
  if(ratingRange == "91-100"){
    filmsByRatings = this.films.filter(film => (film.rt_score >= 91))
  }
  else if(ratingRange == "81-90"){
    filmsByRatings = this.films.filter(film => film.rt_score >=81 && film.rt_score <=90)
  }
  else if(ratingRange == "71-80"){
    filmsByRatings = this.films.filter(film => film.rt_score >=71 && film.rt_score <=80)
  }
  else if(ratingRange == "1-70"){
    filmsByRatings = this.films.filter(film => film.rt_score >=1 && film.rt_score <=70)
  }
  else {
    filmsByRatings = this.films
  }
  PubSub.publish('Film:films-ready', filmsByRatings)
};


module.exports = Film;
