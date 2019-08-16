function initControlFunctions(){
  const listView = document.getElementById('portfolio-list')
  const gridView = document.getElementById('portfolio-grid')
  const filterSelect = document.getElementById('control-view-filter-select')
  const filterMenu = document.getElementById('control-filter-menu')
  const toggleViewListIcon = document.getElementById('control-view-toggle-list')
  const toggleViewGridIcon = document.getElementById('control-view-toggle-grid')
  const toggleViewButton = document.getElementById('control-view-toggle');
  const switchViewList = document.getElementById('control-view-list')
  const switchViewGrid = document.getElementById('control-view-grid')

  function toListView(){
    toggleViewButton.dataset.mode = 'list';
    toggleViewGridIcon.classList.remove('on');
    toggleViewListIcon.classList.add('on');
    switchViewGrid.classList.remove('selected');
    switchViewList.classList.add('selected');
    gridView.classList.remove('on');
    listView.classList.add('on');
  }
  function toGridView(){
    toggleViewButton.dataset.mode = 'grid';
    toggleViewListIcon.classList.remove('on');
    toggleViewGridIcon.classList.add('on');
    switchViewList.classList.remove('selected');
    switchViewGrid.classList.add('selected');
    listView.classList.remove('on');
    gridView.classList.add('on');
  }

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
  switchViewList.onclick = toListView;
  switchViewGrid.onclick = toGridView;

  // toggle collapsible filter menu
  function collapseFilters(){
    if (filterMenu.classList.contains('on')){
      filterMenu.classList.remove('on');
    } else {
      filterMenu.classList.add('on');
    }
  }
  filterSelect.onclick = collapseFilters;
}

module.exports = initControlFunctions;
