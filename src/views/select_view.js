const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies: all families', event => {
    this.populate(event.detail);
  });
};

SelectView.prototype.populate = function (families) {
  families.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family;
    option.value = index;
    this.selectElement.appendChild(option);
  });
};

module.exports = SelectView;
