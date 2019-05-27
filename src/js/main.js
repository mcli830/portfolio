// PARTICLES.JS
// const Particles = require('particlesjs')
// const anime = require('animejs')
//
// if (document.getElementById('particles')) {
//   Particles.init({
//     selector: '#particles',
//     maxParticles: 150,
//     speed: 0.25,
//     color: '#67daff',
//     minDistance: 30,
//     connectParticles: true
//   });
// }

// STATE
const state = {
  filters: []
}

// VIEW ANIMATION
// const actions = {};
//
// const about = document.querySelector('#about');
// const portfolio = document.querySelector('#portfolio');
// const contact = document.querySelector('#contact');
// const sections = [about, portfolio, contact];
//
// const viewAnim = {
//   l: {
//     left: '-100%',
//     opacity: 0
//   },
//   m: {
//     left: 0,
//     opacity: 1
//   },
//   r: {
//     left: '100%',
//     opacity: 0
//   }
// }
//
// function assignView(pos) {
//   if (pos.length >= 3) {
//     Object.assign(about.style, viewAnim[pos[0]]);
//     Object.assign(portfolio.style, viewAnim[pos[1]]);
//     Object.assign(contact.style, viewAnim[pos[2]]);
//   }
// }
//
// actions.view = {
//   home: () => {
//     assignView(['m','r','r']);
//   },
//   portfolio: () => {
//     assignView(['l','m','r']);
//   },
//   contact: () => {
//     assignView(['l','l','m']);
//   }
// }

// ANIME.JS
// load animation
// if (anime) {
//   var loadAnimation = anime.timeline({
//     easing: 'easeOutCubic',
//     duration: 400
//   });
//   loadAnimation
//     .add({
//       targets: '.about__avatar',
//       scale: 0.05,
//       rotate: 360,
//       duration: 200,
//       delay: 1200
//     })
//     .add({
//       targets: '.about__avatar [class*="overlay"]',
//       opacity: 1,
//       duration: 200
//     }, '-=150')
//     .add({
//       targets: '.about__info',
//       top: 0,
//       left: 0,
//     })
//     .add({
//       targets: '.about__avatar',
//       scale: 1,
//       rotate: 0,
//       duration: 200
//     })
//     .add({
//       targets: '.about__avatar [class*="overlay"]',
//       opacity: 0,
//       duration: 200
//     }, '-=150')
//     .add({
//       targets: '.about__info__text',
//       scaleX: [0, 1],
//       scaleY: [0.01, 1],
//       opacity: [0, 1]
//     })
//     .add({
//       targets: '.about__info__text *',
//       opacity: [0,1]
//     })
//     // skills/badges
//     .add({
//       targets: '.about__skills h1',
//       opacity: [0,1]
//     })
//     .add({
//       targets: '.skill-badge',
//       delay: anime.stagger(100),
//       opacity: [0,1],
//       duration: 800
//     }, '-=200')
//     // portfolio
//     .add({
//       targets: '.main--portfolio',
//       top: 0,
//       easing: 'easeOutQuad',
//       duration: 300
//     })
//
//   loadAnimation.finished.then(() => {
//     console.log('load animation finished');
//   });
// }

// ACTION FUNCTIONS
function filterProjects(tag){
  console.log(tag);
  if (state.filters.includes(tag)) {
    state.filters.push(tag)
  } else {
    state.filters = state.filters.filter(activeTag => activeTag != tag);
  }
}

// VIEW ANIMATION HELPERS
// // change view function
// function changeView(view) {
//   switch(view){
//     case 'home':
//       actions.view.home();
//       break;
//     case 'portfolio':
//       actions.view.portfolio();
//       break;
//     case 'contact':
//       actions.view.contact();
//       break;
//     default:
//       return;
//   }
// }
//
// // nav button function
// const navButtons = Array.from(document.querySelectorAll('.nav__button'));
// if (navButtons.length > 0) {
//   navButtons.forEach(elem => {
//     elem.onclick = e => {
//       if (e.target.classList.contains('nav__button') && !e.target.classList.contains('selected')) {
//         navButtons.forEach(button => {
//           button.classList.remove('selected');
//         });
//         e.target.classList.add('selected');
//         // changeView(e.target.dataset.view);
//         actions.view[e.target.dataset.view]();
//       }
//     }
//   })
// }

// GENERAL HELPERS
// function removeClassByPrefix(el, prefix) {
//   var regx = new RegExp('\\b' + prefix + '.*?\\b', 'g');
//   if (Array.isArray(el)) {
//     el.forEach(elem => {
//       elem.className = elem.className.replace(regx, '');
//     });
//   } else {
//     el.className = el.className.replace(regx, '');
//   }
//   return el;
// }
