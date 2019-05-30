// IMPORTS
// const initParticles = require('./particlesBG.js')
const initFilterFunctions = require('./filter.js')
// const initNamecardAnimation = require('./namecardAnim.js')

// STATE
const state = {}
// const animations = {}

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', init)
function init(){
  initFilterFunctions(state);
  // init animations
  // Object.assign(animations, require('./animations.js'));
  // initNamecardAnimation(state);
}


// function simulateHover(elem, className){
//   elem.onmouseenter = () => elem.classList.add(className);
//   elem.onmouseleave = () => elem.classList.remove(className);
// }
