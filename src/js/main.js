// IMPORTS
// const initParticles = require('./particlesBG.js')
const initFilterFunctions = require('./filter.js')

// STATE
const state = {}

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', init)
function init(){
  initFilterFunctions(state);
}
