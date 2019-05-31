// IMPORTS
// const initParticles = require('./particlesBG.js')
const initFilterFunctions = require('./filter.js')
const initSectionButtons = require('./sections.js')

// STATE
const state = {}
// const animations = {}

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', init)
function init(){
  initSectionButtons();
  initFilterFunctions(state);
  initNamecardClick();
}

function initNamecardClick(){
  const namecard = document.querySelector('.namecard__content');
  const portfolio = document.querySelector('#portfolio');
  const overlay = document.querySelector('.portfolio > .overlay');
  namecard.onclick = namecardClick;

  function namecardClick(e) {
    e.preventDefault();
    namecard.onclick = null;
    namecard.classList.add('on');
    overlay.classList.add('on');
    portfolio.onclick = (e) => {
      e.preventDefault();
      portfolio.onclick = null;
      namecard.classList.remove('on');
      overlay.classList.remove('on');
      namecard.onclick = namecardClick;
    }

  }
}
