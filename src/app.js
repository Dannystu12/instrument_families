const SelectView  = require('./views/select_view.js');
const InstrumentFamilies = require('./models/instrument_families');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#instrument-families');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();

  const sectionElement = document.querySelector('#result');
  const resultView = new ResultView(sectionElement);
  resultView.bindEvents();

});
