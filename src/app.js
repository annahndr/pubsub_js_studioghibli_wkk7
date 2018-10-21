const Film = require('./models/film.js');
const ListView = require('./views/list_view.js');
const FilterView = require('./views/filter_view.js');
const SearchView = require('./views/search_view.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded'); //test

  const selectDiv = document.querySelector('#list-of-films')
  const listView = new ListView(selectDiv);
  listView.bindEvents();

  const selectRating = document.querySelector('#rating-dropdown')
  const filterRatingView = new FilterView(selectRating);
  filterRatingView.bindEvents();

  const imageHeader = document.querySelector('.image-header');
  const selectImagesView = new ListView(imageHeader);
  selectImagesView.imageRotation()

  const searchInput = document.querySelector('#searchInput');
  const searchInputView = new SearchView(searchInput);
  searchInputView.bindEvents()

  const film = new Film();
  film.bindEvents();
  film.searchByFilm();
  film.getData();


  /////
});
