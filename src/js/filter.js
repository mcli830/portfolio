function initFilterFunctions(state){
  initProjectState(state);
  const filters = Array.from(document.querySelectorAll('.portfolio__filters .filter'));
  filters.forEach(f => {
    f.onclick = () => {
      var ftag = f.dataset.tag;
      filters.forEach(elem => elem.classList.remove('selected'));
      updateProjects(state, ftag);
      moveProjects(state);
      f.classList.add('selected');
    }
  });

}

// helper
function getProjects(){
  return Array.from(document.querySelectorAll('.project--grid'));
}
function initProjectState(state){
  state.projects = getProjects().map(proj => {
    return {
      node: proj,
      id: proj.id,
      next: {
        view: true,
        rect: proj.getBoundingClientRect()
      }
    }
  })
}

function updateProjects(state, filter = 'All'){
  state.projects.forEach(proj => {
    proj.prev = Object.assign({}, proj.next);
    var tags = proj.node.dataset.tags.split(' ');
    if (tags.includes(filter) || filter == 'All') {
      proj.next.view = true;
      proj.node.style.display = '';
      setTimeout(()=>proj.node.style.opacity = 1, 50);
    } else {
      proj.next.view = false;
      Object.assign(proj.node.style, {
        display: 'none',
        opacity: 0
      })
    }
  });
  state.projects.forEach(proj => proj.next.rect = proj.node.getBoundingClientRect());
}

function moveProjects(state){
  var options = {
    duration: 250,
    easing: 'ease-out'
  };
  // select groups
  var toMove = state.projects.filter(p => p.prev.view && p.next.view);

  toMove.forEach(p => {
    var dx = p.prev.rect.x - p.next.rect.x;
    var dy = p.prev.rect.y - p.next.rect.y;
    p.node.animate([
      { transform: `translate(${dx}px, ${dy}px)` },
      { transform: 'none' }
    ], options);
  });
}

module.exports = {initFilterFunctions, };
