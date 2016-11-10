'use strict';

console.log('hello world');
var resultsArray = [];

function localStoragePrep(value) {
  return JSON.stringify(value);
}

function localStorageInsert (key, value) {
  localStorage.setItem(key, value);
}

function localStorageGet(key) {
  return localStorage.getItem(key);
}

function localStorageTester(key) {
  if (localStorageGet(key)){
    return localStorageTranslate(localStorageGet(key));
  }
}

function localStorageTranslate (testedKey) {
  return JSON.parse(testedKey);
}

function localStorageArray(key) {
  if (localStorageTester(key)) {
    resultsArray.push(localStorageTester(key));
  }
}
function populateCardPageTop() {
  localStorageInsert('city', localStoragePrep(resultsArray[0]));
}
function populateCardPageMid() {
  localStorageInsert('city', localStoragePrep(resultsArray[1]));
}
function populateCardPageBot() {
  localStorageInsert('city', localStoragePrep(resultsArray[2]));
}

function elementIDGrab(id) {
  return document.getElementById(id);
}

function nukeChildren(elementId){
  elementId.innerHTML = '';
}

localStorageArray('resultOne');
localStorageArray('resultTwo');
localStorageArray('resultThree');

console.log(resultsArray);
// console.log('resultsArray: ', resultsArray);

if (resultsArray[0]) {
  var showLeft = document.getElementById('imageSpotLeft');
  console.log('resultsArray[0].path: ',resultsArray[0].path);
  showLeft.setAttribute('src', resultsArray[0].path);
  showLeft.addEventListener('click' , populateCardPageTop);
}

if (resultsArray[1]) {
  var showCenter = document.getElementById('imageSpotCenter');
  showCenter.setAttribute('src', resultsArray[1].path);
  showCenter.addEventListener('click' , populateCardPageMid);
} else {
  nukeChildren(elementIDGrab('center'));
}
if (resultsArray[2]){
  var showRight = document.getElementById('imageSpotRight');
  showRight.setAttribute('src', resultsArray[2].path);
  showRight.addEventListener('click' , populateCardPageBot);
} else {
  nukeChildren(elementIDGrab('right'));
}
//
// function cardPage(event) {
//   var image = document.getElementById('city-view');
//   image.setAttribute('src', this.path);
//
//   var title = document.getElementById('blurb-title');
//   title.textContent = this.describe;
//
//   var weather = document.getElementById('weather-link');
//   weather.setAttribute('href', this.weather);
//
//   var text = document.getElementById('blurb-text');
//   text.textContent = this.describe;
// }
