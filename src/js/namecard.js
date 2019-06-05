module.exports = function(animations) {
  const namecard = document.querySelector('.namecard__content');
  const overlay = document.querySelector('#page-overlay');
  namecard.onmouseenter = () => {
    animations.namecard.pause();
    animations.namecard.seek(0);
  }
  namecard.onmouseleave = () => {
    animations.namecard.play();
  }
  namecard.onclick = namecardClick;

  function namecardClick(e) {
    e.preventDefault();
    animations.namecard.pause();
    animations.namecard.seek(0);
    namecard.onclick = null;
    namecard.classList.add('on');
    overlay.classList.add('on');
    overlay.onclick = (e) => {
      e.preventDefault();
      overlay.onclick = null;
      namecard.classList.remove('on');
      overlay.classList.remove('on');
      namecard.onclick = namecardClick;
      animations.namecard.play();
    }

  }
}
