const PubSub = require('../helpers/pub_sub.js');
const FilmView = require('./film_view.js');


const ListView = function(element) {
  this.element = element
  this.images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtFk2wqfdnU0RStATvchA0lyEFe1DLKwTdhYXS5iHEXA8ieIF","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaTlR3LSnlpyqT06a3Qqx5FKyANA0qhkurW5eSkVsHOQqeOxd","https://i.kinja-img.com/gawker-media/image/upload/s--ihgTRrg9--/c_scale,f_auto,fl_progressive,q_80,w_800/wxyubkjmeppxmqasllft.jpg",
  "https://vignette.wikia.nocookie.net/b5bf347c-245d-4bcb-8f68-829fa3d911e8/scale-to-width-down/800"
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
}, 3000);
};


module.exports = ListView;
