'use strict';

var userAnswerArray = [];
var sortedCities = [];
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
// 1st Question - Activity
function firstQuestion() {
  for (var i = 0; i < cityArray.length; i++) {
    if (cityArray[i][1] === userAnswerArray[1]) {
      sortedCities[i] = obj[i];
    }
  }
}
// 2nd Question - Time of Year
function secondQuestion() {
  for (var i = 0; i < sortedCities.length; i++){
    if (sortedCities[i][2] != userAnswerArray[2]) {
      sortedCities.splice(i, 1);
    }
  }
}
// 3rd question - Price
function thirdQuestion() {
  for (var i = 0; i < sortedCities.length; i++) {
    if (sortedCities[i][3] != userAnswerArray[3]) {
      sortedCities.splice(i, 1);
    }
  }
}
// 4th question - People
function forthQuestion() {
  for (var i = 0; i < sortedCities.length; i++) {
    if (sortedCities[i][4] != userAnswerArray[4]) {
      sortedCities.splice(i, 1);
    }
  }
}
