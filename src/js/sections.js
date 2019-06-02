module.exports = function(animations) {
  const buttons = document.querySelectorAll('.portfolio__header');
  buttons.forEach(b => {
    b.onclick = changeSection;
  });

  function changeSection(){
    if (/selected/g.test(this.className)) return;
    var prev = document.querySelector('.portfolio__header.selected');
    prev.classList.remove('selected');
    this.className = 'portfolio__header selected';
    // document.querySelector('.portfolio__sections .selector').className = `selector selector__${this.dataset.section}`;
    // change section elements
    document.querySelector(`#${prev.dataset.section}`).classList.add('hide');
    document.querySelector(`#${this.dataset.section}`).classList.remove('hide');

    const overlays = document.querySelectorAll('.portfolio__header [class*="overlay"]')
    if (this.dataset.section === 'skills'){
      overlays.forEach(o => o.style.transform = 'skew(-30deg)');
      animations.skills.play();
    } else if (this.dataset.section === 'projects'){
      overlays.forEach(o => o.style.transform = 'skew(30deg)');
    }
  }
}
