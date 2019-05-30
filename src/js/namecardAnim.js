module.exports = function(state){
  const namecard = document.querySelector('.namecard__content');
  const ripple = namecard.querySelector('.ripple-bg');
  const contact = namecard.querySelector('.namecard__text__contact');

  const rippleDelay = 300;
  const textDelay = 400;

  state.namecard = {
    enter: false,
    leave: false
  }

  namecard.onmouseenter = () => {
    if (state.namecard.leave) {
      clearTimeout(state.namecard.leave);
      state.namecard.leave = false;
    }
    ripple.classList.add('expand');
    setTimeout(() => {
      namecard.classList.add('expand');
      contact.classList.add('expand');
    }, rippleDelay)
  };
  namecard.onmouseleave = () => {
    if (state.namecard.enter) {
      clearTimeout(state.namecard.enter);
      state.namecard.enter = false;
    }
    contact.classList.remove('expand');
    namecard.classList.remove('expand');
    setTimeout(() => ripple.classList.remove('expand'), textDelay);
  }
}
