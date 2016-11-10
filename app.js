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
function unselect1() {
  icon1A.children[0].classList.remove('options1-selected');
  icon1B.children[0].classList.remove('options1-selected');
  icon1C.children[0].classList.remove('options1-selected');
}
function beach() {
  userAnswerArray[0] = 'beach';
  unselect1();
  icon1A.children[0].classList.add('options1-selected');
}
function sightSeeing() {
  userAnswerArray[0] = 'sightseeing';
  unselect1();
  icon1B.children[0].classList.add('options1-selected');
}
function sports() {
  userAnswerArray[0] = 'sports';
  unselect1();
  icon1C.children[0].classList.add('options1-selected');
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

function unselectSeason() {
  icon2A.children[0].classList.remove('season-selected');
  icon2B.children[0].classList.remove('season-selected');
  icon2C.children[0].classList.remove('season-selected');
  icon2D.children[0].classList.remove('season-selected');
}
function winter() {
  userAnswerArray[1] = 'winter';
  unselectSeason();
  icon2A.children[0].classList.add('season-selected');
}
function spring() {
  userAnswerArray[1] = 'spring';
  unselectSeason();
  icon2B.children[0].classList.add('season-selected');
}
function summer() {
  userAnswerArray[1] = 'summer';
  unselectSeason();
  icon2C.children[0].classList.add('season-selected');
}
function fall() {
  userAnswerArray[1] = 'fall';
  unselectSeason();
  icon2D.children[0].classList.add('season-selected');
}

var icon3A = document.getElementById('icon3A');
icon3A.addEventListener('click', cheap);
var icon3B = document.getElementById('icon3B');
icon3B.addEventListener('click', regular);
var icon3C = document.getElementById('icon3C');
icon3C.addEventListener('click', expensive);

function unselect3() {
  icon3A.children[0].classList.remove('options3-selected');
  icon3B.children[0].classList.remove('options3-selected');
  icon3C.children[0].classList.remove('options3-selected');
}
function cheap() {
  userAnswerArray[2] = '$';
  unselect3();
  icon3A.children[0].classList.add('options3-selected');
}
function regular() {
  userAnswerArray[2] = '$$';
  unselect3();
  icon3B.children[0].classList.add('options3-selected');
}
function expensive() {
  userAnswerArray[2] = '$$$';
  unselect3();
  icon3C.children[0].classList.add('options3-selected');
}

var icon4A = document.getElementById('icon4A');
icon4A.addEventListener('click', solo);
var icon4B = document.getElementById('icon4B');
icon4B.addEventListener('click', couple);
var icon4C = document.getElementById('icon4C');
icon4C.addEventListener('click', family);
var icon4D = document.getElementById('icon4D');
icon4D.addEventListener('click', pet);

function unselect4() {
  icon4A.children[0].classList.remove('options4-selected');
  icon4B.children[0].classList.remove('options4-selected');
  icon4C.children[0].classList.remove('options4-selected');
  icon4D.children[0].classList.remove('options4-selected');
}

function solo() {
  userAnswerArray[3] = 'solo';
  unselect4();
  icon4A.children[0].classList.add('options4-selected');
}
function couple() {
  userAnswerArray[3] = 'couple';
  unselect4();
  icon4B.children[0].classList.add('options4-selected');
}
function family() {
  userAnswerArray[3] = 'family';
  unselect4();
  icon4C.children[0].classList.add('options4-selected');
}
function pet() {
  userAnswerArray[3] = 'pet';
  unselect4();
  icon4D.children[0].classList.add('options4-selected');
}

function sortCities() {
  for (var i = 0; i < cityObjects.length; i++) {
    if (cityObjects[i].activity.includes(userAnswerArray[0]) &&
        cityObjects[i].season.includes(userAnswerArray[1]) &&
        cityObjects[i].money.includes(userAnswerArray[2]) &&
        cityObjects[i].people.includes(userAnswerArray[3])) {
      sortedCities.push(cityObjects[i]);
    }
  }
}

function randomIndex(arrayToGenerateIndicesFor) {
  return Math.floor(Math.random() * arrayToGenerateIndicesFor.length);
}

//
// function userHasNotAnsweredEnough() {
//   if (userAnswerArray.length < 4) {
    // function to tell user that they need to add more criteria.
//   }
// }
// function randomNumberGenerator(userArray) {
//   return Math.floor(Math.random() * userArray.length);
// }

function randomNumber() {
  if (sortedCities.length < 3) {
    return [0,1,2];
  }
  var one = Math.floor(Math.random() * sortedCities.length);
  var two = Math.floor(Math.random() * sortedCities.length);
  var three = Math.floor(Math.random() * sortedCities.length);
  if ((one === two) || (one === three) || (two === three)) {
    return randomNumber();
  } else {
    return [one, two, three];
  }
}
var results = document.getElementById('resultsButton');

results.addEventListener('click', randomPick);
function randomPick(event) {
  sortCities();
  console.log('sortedCities.length: ', sortedCities.length);
  var holder = randomNumber();
  var allResults = [];
  for (var i = 0; i < holder.length; i++) {
    var city = sortedCities[holder[i]];
    if (city) allResults.push();
  }

  function localStorageInsert(key, value) {
    if (typeof value !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  function localStoragePull (key) {
    JSON.parse(localStorage.getItem(key));
  }

  var imageSpotLeft   = sortedCities[holder[0]];
  var imageSpotCenter = sortedCities[holder[1]];
  var imageSpotRight  = sortedCities[holder[2]];

  allResults = [imageSpotLeft, imageSpotCenter, imageSpotRight];

  localStorage.setItem('resultOne', JSON.stringify(imageSpotLeft));
  localStorage.setItem('resultTwo', JSON.stringify(imageSpotCenter));
  localStorage.setItem('resultThree', JSON.stringify(imageSpotRight));
}

// function cardPage() {
//   var showWeather = document.getElementById('div1');
//   display.cityObjects[i].weather;
//   var showFlights = document.getElementById('div1');
//   display.cityObjects[i].flights;
//   var showCurrency = document.getElementById('div1');
//   display.cityObjects[i].currency;
//   var showMaps = document.getElementById('div1');
//   display.cityObjects[i].maps;
//   var showCalendar = document.getElementById('card4');
//   display.cityObjects[i].calendar;
//   var showLanguages = document.getElementById('div1');
//   display.cityObjects[i].languages;

//   var showEmbassy = document.getElementById('div1');
//   display.cityObjects[i].embassy;
// }

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
