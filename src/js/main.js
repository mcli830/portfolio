// IMPORTS
// const initParticles = require('./particlesBG.js')
const initFilterFunctions = require('./filter.js')
const initSectionButtons = require('./sections.js')
const namecardAnimation = require('./namecardAnim.js')
const skillsAnimation = require('./skillsAnim.js')

// STATE
const state = {}
const animations = {}

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', init)
function init(){
  initAnimations();
  initSectionButtons(animations);
  initFilterFunctions(state);
  initNamecardClick();
}

function initAnimations(){
  animations.namecard = namecardAnimation();
  animations.skills = skillsAnimation();
}

function initNamecardClick(){
  const namecard = document.querySelector('.namecard__content');
  const portfolio = document.querySelector('#portfolio');
  const overlay = document.querySelector('.portfolio > .overlay');
  namecard.onclick = namecardClick;

  function namecardClick(e) {
    e.preventDefault();
    animations.namecard.pause();
    animations.namecard.seek(0);
    namecard.onclick = null;
    namecard.classList.add('on');
    overlay.classList.add('on');
    portfolio.onclick = (e) => {
      e.preventDefault();
      portfolio.onclick = null;
      namecard.classList.remove('on');
      overlay.classList.remove('on');
      namecard.onclick = namecardClick;
      animations.namecard.play();
    }

  }
}
