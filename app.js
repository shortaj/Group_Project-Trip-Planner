'use strict';

var hamMenu = document.getElementById('hamburger');
hamMenu.addEventListener('click' , nav);
var navBarVisible = false;
function nav(){
  var navBar = document.getElementById('hamburgerList');
  if (navBarVisible){
    navBar.style.display = 'none';
    navBarVisible = false;

  } else {
    navBar.style.display = 'block';
    navBarVisible = true;

  }
}
