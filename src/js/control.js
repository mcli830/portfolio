function initControlFunctions(){
  const listView = document.getElementById('portfolio-list')
  const gridView = document.getElementById('portfolio-grid')
  const toggleViewListIcon = document.getElementById('control-view-toggle-list')
  const toggleViewGridIcon = document.getElementById('control-view-toggle-grid')
  const toggleViewButton = document.getElementById('control-view-toggle');
  // set mobile view control button function
  toggleViewButton.onclick = function(){
    switch(this.dataset.mode){
      case 'list':
        return toGridView();
      case 'grid':
      default:
        return toListView();
    }
  }

  function toListView(){
    toggleViewButton.dataset.mode = 'list';
    toggleViewGridIcon.classList.remove('on');
    toggleViewListIcon.classList.add('on');
    gridView.classList.remove('on');
    listView.classList.add('on');
  }
  function toGridView(){
    toggleViewButton.dataset.mode = 'grid';
    toggleViewListIcon.classList.remove('on');
    toggleViewGridIcon.classList.add('on');
    listView.classList.remove('on');
    gridView.classList.add('on');
  }
}

module.exports = initControlFunctions;
