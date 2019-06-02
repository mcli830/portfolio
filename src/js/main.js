// IMPORTS
// const initParticles = require('./particlesBG.js')
const initParticles = require('./particlesBG.js')
const initFilterFunctions = require('./filter.js')
const initSectionButtons = require('./sections.js')
const initNamecardFunctions = require('./namecard.js')
const namecardAnimation = require('./namecardAnim.js')
const skillsAnimation = require('./skillsAnim.js')

// STATE
const state = {}
const animations = {}

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', init)
function init(){
  initParticles();
  initAnimations();
  initSectionButtons(animations);
  initFilterFunctions(state);
  initNamecardFunctions(animations);
}

function initAnimations(){
  animations.namecard = namecardAnimation();
  animations.skills = skillsAnimation();
}
