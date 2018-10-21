const PubSub = require('../helpers/pub_sub.js');

const FilterView = function (selectedElement) {
  this.selectedElement = selectedElement;
};

FilterView.prototype.bindEvents = function () {
  this.selectedElement.addEventListener('change', event => {
    const selectedRatingsRange = event.target.value;
    PubSub.publish('FilterView:ratings-range', selectedRatingsRange) //to be picked up again in film.js
    console.log('FilterView:ratings-range', selectedRatingsRange);//TEST
  })
};


module.exports = FilterView;
