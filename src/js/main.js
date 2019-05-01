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

// load animation
if (anime) {
  console.log('animejs loaded')
  var loadAnimation = anime.timeline({
    easing: 'easeOutCubic',
    duration: 400
  });
  loadAnimation
    .add({
      targets: '.about__avatar',
      opacity: [0, 1],
      duration: 1000
    })
    .add({
      targets: '.about__info',
      top: 0,
    })
    .add({
      targets: '.about__info',
      left: 10,
    })
    .add({
      targets: '.about__info__text',
      scaleX: [0, 1],
      scaleY: [0.01, 0.01],
      opacity: [0, 1]
    }, '-=390')
    .add({
      targets: '.about__info__text',
      top: 0,
      scaleX: [1,1],
      scaleY: [0.01, 1]
    })
    .add({
      targets: '.about__info__text *',
      opacity: [0,1]
    })
}

// change view function
function changeView(view) {
  switch(view){
    case 'about':
      viewAbout();
      break;
    case 'portfolio':
      viewPortfolio();
      break;
    case 'contact':
      viewContact();
      break;
    default:
      return;
  }
  function viewAbout(){
    console.log('view:about');
  }
  function viewPortfolio(){
    console.log('view:portfolio');
  }
  function viewContact(){
    console.log('view:contact');
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
        changeView(e.target.dataset.view);
      }
    }
  })
}
