const anime = require('animejs')

module.exports = function(animations){
  return anime({
    targets: 'h1.namecard__name > span',
    duration: 1000,
    delay: anime.stagger(100, {start: 3000}),
    keyframes: [
      { opacity: 1 },
      { opacity: 0.3},
      { opacity: 1}
    ],
    easing: 'easeInOutSine',
    autoplay: true,
    loop: true
  });
}
