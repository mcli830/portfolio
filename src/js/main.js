const Particles = require('particlesjs')

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
