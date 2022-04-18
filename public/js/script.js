document.addEventListener('DOMContentLoaded', () => {

  
  const curPage = window.location.pathname;
  if(curPage == '/drones'){
    document.querySelector("#nav-list").classList.toggle('active');
  }else if(curPage == '/drones/create'){
    document.querySelector("#nav-create").classList.toggle('active');
  }else if(curPage == '/' ){
    document.querySelector("#nav-home").classList.toggle('active');
  }

}, false);
