const anime = require('animejs');

const shadowLg = '10px 10px 20px rgba(33,33,33,0.4)';
const bezierBounce = 'cubicBezier(.21,1.11,.6,1.15)';

const namecard = anime.timeline({
  duration: 250,
  easing: 'easeOutQuart',
  autoplay: false,
  loop: false
});

namecard
  // expand ripple circle
  .add({
    targets: '.namecard__content .ripple-bg',
    delay: 100,
    top: ['50%', '-500%'],
    left: ['50%', '-500%'],
    height: [0, '1100%'],
    width: [0, '1100%'],
    boxShadow: ['none', shadowLg]
  })
  // nudge ripple circle down
  .add({
    targets: '.namecard__content',
    top: [0, '2em'],
    duration: 300,
    elasticity: 400
  })
  // rotate contact info
  .add({
    targets: '.namecard__text__contact',
    duration: 500,
    rotate: [0, '180deg'],
    opacity: [0,1]
  })

module.exports = {
  namecard
}
