const PubSub = require('../helpers/pub_sub.js');
const FilmView = require('./film_view.js');


const ListView = function(element) {
  this.element = element
  this.images = [
  "../public/images/howls_moving_castle.jpg",
  "../public/images/ponyo.jpg",
  "../public/images/arrietty.jpg",
  "../public/images/totoro.jpeg",
  "../public/images/grave_fireflies.jpg",
  "../public/images/castle_sky.jpg",
  "../public/images/kiki.jpg"
]
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe("Film:films-ready", (event) => {
    console.log(event);
    this.clearList(); //to clear whatever is there first
    this.renderFilmView(event.detail); //call this function on the array
    console.log('ListView:event.detail', event.detail);
  })
};

ListView.prototype.clearList = function () {
  this.element.innerHTML = '';
};
// Rendering films daisy chain
ListView.prototype.renderFilmView = function (films) {
  films.forEach((film) => {
  const filmItem = this.createFilmListItem(film);
  this.element.appendChild(filmItem); //not returning what it should
  });
};

ListView.prototype.createFilmListItem = function (film) {
  const filmView = new FilmView(); //create a new object of this class
  const filmDetail = filmView.createFilmDetail(film); //run the method (in film_view.js) passing in the film
  return filmDetail;
};


ListView.prototype.imageRotation = function () {
  let i = 0;
  let element = this.element
  let images = this.images
setInterval(function() {
      element.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 9000);
};


module.exports = ListView;
