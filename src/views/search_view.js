const PubSub = require('../helpers/pub_sub.js');

const SearchView = function (searchElement) {
  this.searchElement = searchElement;
};

SearchView.prototype.bindEvents = function () {
  this.searchElement.addEventListener('input', event => {
    const searchInput = event.target.value;
    PubSub.publish("SearchView:search-input", searchInput)
    console.log("SearchView:search-input", searchInput);
    
  })
};

module.exports = SearchView;
