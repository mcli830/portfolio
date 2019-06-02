const anime = require('animejs');

module.exports = function(){
  const langs = anime({
    targets: '#langs .prof__level .bar',
    autoplay: false,
    loop: false,
    delay: anime.stagger(100, {start: 300}),
    duration: 1000,
    width: (el) => [0, el.dataset.level + '%'],
    easing: 'easeOutQuint'
  });
  const skills = anime({
    targets: '#skills .prof__level .bar',
    autoplay: false,
    loop: false,
    delay: anime.stagger(100, {start: 500}),
    duration: 1000,
    width: (el) => [0, el.dataset.level + '%'],
    easing: 'easeOutQuint'
  });
  const tools = anime({
    targets: '#tools .prof__level .bar',
    autoplay: false,
    loop: false,
    delay: anime.stagger(50, {start: 500}),
    duration: 500,
    width: (el) => [0, el.dataset.level + '%'],
    easing: 'easeOutQuint'
  });
  return [langs, skills, tools];
}
