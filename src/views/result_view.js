const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(sectionElement) {
  this.sectionElement = sectionElement;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("InstrumentFamilies: selected family", (event) => {
    const instrument = event.detail;
    this.displayResult(instrument);
  });
};

ResultView.prototype.displayResult = function (instrument) {
  this.sectionElement.innerHTML = '';
  const table = document.createElement('table');
  for(const property in instrument){
    const row = document.createElement('tr');
    const labelCell =  document.createElement('td');
    labelCell.appendChild(document.createTextNode(property));
    const detailCell =  document.createElement('td');
    detailCell.appendChild(document.createTextNode(instrument[property]));

    row.appendChild(labelCell);
    row.appendChild(detailCell);
    table.appendChild(row);
  };

  this.sectionElement.appendChild(table);
};
module.exports = ResultView;
