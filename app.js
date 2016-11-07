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

var icon1A = document.getElementById('icon1A');
icon1A.addEventListener('click', beach);
var icon1B = document.getElementById('icon1B');
icon1B.addEventListener('click', sightSeeing);
var icon1C = document.getElementById('icon1C');
icon1C.addEventListener('click', sports);

// 1st Question - Activity
function beach() {
  userAnswerArray[0] = 'beach';
}
function sightSeeing() {
  userAnswerArray[0] = 'sightseeing';
}
function sports() {
  userAnswerArray[0] = 'sports';
}
//
// function firstQuestion() {
//   for (var i = 0; i < cityObjects.length; i++) {
//     if (cityObjects[i].activity.includes(userAnswerArray[0]))  {
//       sortedCities[i] = cityObjects[i];
//     }
//   }
// }

// 2nd Question - Time of Year
var icon2A = document.getElementById('icon2A');
icon2A.addEventListener('click', winter);
var icon2B = document.getElementById('icon2B');
icon2B.addEventListener('click', spring);
var icon2C = document.getElementById('icon2C');
icon2C.addEventListener('click', summer);
var icon2D = document.getElementById('icon2D');
icon2D.addEventListener('click', fall);

function winter() {
  userAnswerArray[1] = 'winter';
}
function spring() {
  userAnswerArray[1] = 'spring';
}
function summer() {
  userAnswerArray[1] = 'summer';
}
function fall() {
  userAnswerArray[1] = 'fall';
}

var icon3A = document.getElementById('icon3A');
icon3A.addEventListener('click', cheap);
var icon3B = document.getElementById('icon3B');
icon3B.addEventListener('click', regular);
var icon3C = document.getElementById('icon3C');
icon3C.addEventListener('click', expensive);

function cheap() {
  userAnswerArray[2] = '$';
}
function regular() {
  userAnswerArray[2] = '$$';
}
function expensive() {
  userAnswerArray[2] = '$$$';
}

var icon4A = document.getElementById('icon4A');
icon4A.addEventListener('click', solo);
var icon4B = document.getElementById('icon4B');
icon4B.addEventListener('click', couple);
var icon4C = document.getElementById('icon4C');
icon4C.addEventListener('click', family);
var icon4D = document.getElementById('icon4D');
icon4D.addEventListener('click', pet);

function solo() {
  userAnswerArray[3] = 'solo'
}
function couple() {
  userAnswerArray[3] = 'couple';
}
function family() {
  userAnswerArray[3] = 'family';
}
function pet() {
  userAnswerArray[3] = 'pet';
}
//
// function secondQuestion() {
//   for (var i = 0; i < sortedCities.length; i++){
//     if (sortedCities[i].season != userAnswerArray[2]) {
//       sortedCities.splice(i, 1);
//     }
//   }
// }
// // 3rd question - Price
// function thirdQuestion() {
//   for (var i = 0; i < sortedCities.length; i++) {
//     if (sortedCities[i][3] != userAnswerArray[3]) {
//       sortedCities.splice(i, 1);
//     }
//   }
// }
// // 4th question - People
// function forthQuestion() {
//   for (var i = 0; i < sortedCities.length; i++) {
//     if (sortedCities[i][4] != userAnswerArray[4]) {
//       sortedCities.splice(i, 1);
//     }
//   }
// }
