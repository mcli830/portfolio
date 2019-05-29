function initFilterFunctions(state){
  initProjectState(state);
  const filters = Array.from(document.querySelectorAll('.portfolio__projects__filters .filter'));
  filters.forEach(f => {
    f.onclick = () => {
      var ftag = f.dataset.tag;
      var projs = Array.from(document.querySelectorAll('.portfolio__projects__list a.project'));
      filters.forEach(elem => elem.classList.remove('selected'));
      projs.forEach(p => {
        var ptags = JSON.parse(p.dataset.tags);
        if (ptags.includes(ftag) || ftag === 'all') {
          p.classList.remove('hidden');
        } else {
          p.classList.add('hidden');
        }
        moveProjects(state);
      });
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
function getSelected(){
  return getProjects().filter(elem => !(/hidden/g.test(elem.classList)));
}

function initProjectState(state){
  state.projects = getProjects().map(proj => {
    return {
      node: proj,
      id: proj.id,
      new: proj.getBoundingClientRect()
    }
  })
}

function updateProjects(state) {
  state.projects.forEach(proj => {
    proj.old = proj.new;
    proj.new = proj.node.getBoundingClientRect();
  });
}

function moveProjects(state){
  updateProjects(state);
  var props = {
    duration: 250,
    easing: 'ease-out'
  }
  state.projects.forEach(proj => {
    if (proj.old.height + proj.old.width > 0 && proj.new.height + proj.new.width > 0) {
      var dx = proj.old.x - proj.new.x;
      var dy = proj.old.y - proj.new.y;
      proj.node.animate([
        { transform: `translate(${dx}px, ${dy}px)` },
        { transform: 'none' }
      ], props);
    } else if (proj.old.height + proj.old.width <= 0 && proj.new.height + proj.new.width > 0) {
      proj.node.animate([
        { opacity: 0 },
        { opacity: 1 }
      ], props);
    }
    // else if (proj.old.height + proj.old.width > 0 && proj.new.height + proj.new.width <= 0) {
    //   proj.node.animate([
    //     { opacity: 0 },
    //     { opacity: 1 }
    //   ], props);
    // }
  });
  // moveProjects helper
  function isSelected(p){
    return p.new.width > p.old.width;
  }
}

// dev helpers
function isEmpty(obj){
  return obj.constructor === Object && Object.keys(obj).length === 0;
}

module.exports = initFilterFunctions;
