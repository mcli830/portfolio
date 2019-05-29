function initFilterFunctions(state){
  initProjectState(state);
  const filters = Array.from(document.querySelectorAll('.portfolio__projects__filters .filter'));
  filters.forEach(f => {
    f.onclick = () => {
      var ftag = f.dataset.tag;
      filters.forEach(elem => elem.classList.remove('selected'));
      updateProjects(state, ftag);
      moveProjects(state);
      // projs.forEach(p => {
      //   var ptags = JSON.parse(p.dataset.tags);
      //   if (ptags.includes(ftag) || ftag === 'all') {
      //     p.classList.remove('hidden');
      //   } else {
      //     p.classList.add('hidden');
      //   }
      //   moveProjects(state);
      // });
      f.classList.add('selected');
    }
  });

  // internal helper
  // function reveal(el){
  //   el.classList.remove('hidden');
  //   el.classList.remove('invis');
  //   moveProjects(state);
  // }
  // function hide(el) {
  //   el.classList.add('invis');
  //   el.classList.add('hidden');
  //   moveProjects(state);
  // }
}

// external helper
function getProjects(){
  return Array.from(document.querySelectorAll('.portfolio__projects__list > a.project'));
}
// function getSelected(){
//   return getProjects().filter(elem => !(/hidden/g.test(elem.classList)));
// }

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

function updateProjects(state, filter = 'all'){
  state.projects.forEach(proj => {
    proj.prev = Object.assign({}, proj.next);
    var tags = proj.node.dataset.tags.split(' ');
    if (tags.includes(filter) || filter === 'all') {
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

// function updateProjectState(state, filter = 'all') {
//   state.projects.forEach(proj => {
//     proj.prev = proj.next;
//     proj.next.view = proj.id === filter || filter === 'all';
//   });
//   moveProjects(state)
// }

// function updateProjectRect(state) {
//   state.projects.forEach(proj => {
//     proj.next.rect = proj.node.getBoundingClientRect();
//   });
// }

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

module.exports = initFilterFunctions;
