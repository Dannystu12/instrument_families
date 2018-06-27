const SelectView  = require('./views/select_view.js');
const InstrumentFamilies = require('./models/instrument_families');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#instrument-families');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();
  
  console.log("js loaded");
  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();

});
