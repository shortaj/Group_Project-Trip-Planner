'use strict';

function listener(){
var hamMenu = document.getElementbyId('hamburger');
hamMenu.addEventListener('click' , nav);
var navBarVisible = false;
function nav(){
  var navBar = document.getElementbyId('hamburgerList');
  if (navBarVisible){
    navBar.style.display = 'none';
  } else {
    navBar.style.display = 'block';
  }
}
}

listener()
