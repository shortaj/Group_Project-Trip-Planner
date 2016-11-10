'use strict';

console.log('hello world');
var resultsArray = [];

function localStorageInsert (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function localStorageTester(key) {
  if (localStorage.getItem(key)){
    var testedKey = localStorage.getItem(key);
    return localStorageTranslate(testedKey);
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
localStorageArray('resultOne');
localStorageArray('resultTwo');
localStorageArray('resultThree');

console.log(resultsArray);
// console.log('resultsArray: ', resultsArray);

if (resultsArray[0]) {
  var showLeft = document.getElementById('imageSpotLeft');
  console.log('resultsArray[0].path: ',resultsArray[0].path);
  showLeft.setAttribute('src', resultsArray[0].path);
  showLeft.addEventListener('click' , cardPage);
}

if (resultsArray[1]) {
  var showCenter = document.getElementById('imageSpotCenter');
  showLeft.setAttribute('src', resultsArray[1].path);

  showCenter.addEventListener('click' , cardPage);
} else {
  var left = document.getElementsByClassName('resultHolder')[1];
}

if (resultsArray[2]){
  var showRight = document.getElementById('imageSpotRight');
  showLeft.setAttribute('src', resultsArray[2].path);
  showRight.addEventListener('click' , cardPage);
} else {
  var left = document.getElementsByClassName('resultHolder')[2];
}

function cardPage(event) {
  var image = document.getElementById('city-view');
  image.setAttribute('src', this.path);

  var title = document.getElementById('blurb-title');
  title.textContent = this.describe;

  var weather = document.getElementById('weather-link');
  weather.setAttribute('href', this.weather);

  var text = document.getElementById('blurb-text');
  text.textContent = this.describe;
}
