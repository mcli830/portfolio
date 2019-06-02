// IMPORTS
// const initParticles = require('./particlesBG.js')
const initFilterFunctions = require('./filter.js')
const initSectionButtons = require('./sections.js')
const initNamecardFunctions = require('./namecard.js')
const namecardAnimation = require('./namecardAnim.js')
const profAnimation = require('./profAnim.js')

// GLOBALS
const state = {}
const animations = {}

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', init)
function init(){
  initAnimations();
  initSectionButtons(animations);
  initFilterFunctions(state);
  initNamecardFunctions(animations);
}

function initAnimations(){
  animations.namecard = namecardAnimation();
  animations.prof = profAnimation();
}
