const anime = require('animejs');

module.exports = function(){
  return anime({
    targets: '.skill__level .bar',
    autoplay: false,
    loop: false,
    delay: anime.stagger(100, {start: 300}),
    width: (el) => [0, el.dataset.level + '%'],
    easing: 'easeOutQuint'
  });
}
