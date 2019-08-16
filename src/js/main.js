// IMPORTS
// const initParticles = require('./particlesBG.js')
const initControlFunc = require('./control.js')
const { initFilterFunctions } = require('./filter.js')
const initSectionButtons = require('./sections.js')
const initNamecardFunc = require('./namecard.js')
const namecardAnim = require('./namecardAnim.js')
const profAnim = require('./profAnim.js')

// GLOBALS
const state = {}
const animations = {}

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', init)
function init(){
  initAnims();
  initSectionButtons(animations);
  initControlFunc();
  initFilterFunctions(state);
  initNamecardFunc(animations);
}

function initAnims(){
  animations.namecard = namecardAnim();
  animations.prof = profAnim();
}
