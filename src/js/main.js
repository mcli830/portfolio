const Particles = require('particlesjs')
const anime = require('animejs')

if (document.getElementById('particles')) {
  Particles.init({
    selector: '#particles',
    maxParticles: 150,
    speed: 0.25,
    color: '#67daff',
    minDistance: 30,
    connectParticles: true
  });
}

const animations = {};
const view = animations.view;

// if (anime) {
//   animations.view = {
//     portfolio: anime({
//       targets: document.querySelector('#portfolio'),
//       top: [0, '-80%'],
//       duration: 1200,
//       easing: 'easeOutQuad',
//       autoplay: false
//     }),
//     contact: anime({
//       targets: document.querySelector('#contact'),
//       top: [0, '-80%'],
//       duration: 1200,
//       easing: 'easeOutQuad',
//       autoplay: false
//     })
//   }
//
// }

const actions = {};

const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');

actions.view = {
  home: () => {
    portfolio.classList.remove('fx__section-view');
    contact.classList.remove('fx__section-view');
  },
  portfolio: () => {
    contact.classList.remove('fx__section-view');
    portfolio.classList.add('fx__section-view');
  },
  contact: () => {
    portfolio.classList.remove('fx__section-view');
    contact.classList.add('fx__section-view');
  }
}

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

// change view function
function changeView(view) {
  switch(view){
    case 'home':
      actions.view.home();
      break;
    case 'portfolio':
      actions.view.portfolio();
      break;
    case 'contact':
      actions.view.contact();
      break;
    default:
      return;
  }
}

// nav button function
const navButtons = Array.from(document.querySelectorAll('.nav__button'));
if (navButtons.length > 0) {
  navButtons.forEach(elem => {
    elem.onclick = e => {
      if (e.target.classList.contains('nav__button') && !e.target.classList.contains('selected')) {
        navButtons.forEach(button => {
          button.classList.remove('selected');
        });
        e.target.classList.add('selected');
        // changeView(e.target.dataset.view);
        actions.view[e.target.dataset.view]();
      }
    }
  })
}
