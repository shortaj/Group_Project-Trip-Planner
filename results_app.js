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
console.log('resultsArray: ', resultsArray);

if (resultsArray[0]) {
  var showLeft = document.getElementById('imageSpotLeft');
  console.log('resultsArray[0].path: ',resultsArray[0].path);
  showLeft.setAttribute('src', resultsArray[0].path);
  showLeft.addEventListener('click' , populateCardPageTop);

  var city = document.getElementById('cityName1');
  city.textContent = resultsArray[0].city;
}

if (resultsArray[1]) {
  var showCenter = document.getElementById('imageSpotCenter');
  showCenter.setAttribute('src', resultsArray[1].path);
  showCenter.addEventListener('click' , populateCardPageMid);

  var city = document.getElementById('cityName2');
  city.textContent = resultsArray[1].city;
} else {
  nukeChildren(elementIdGrab('center'));
}
if (resultsArray[2]){
  var showRight = document.getElementById('imageSpotRight');
  showRight.setAttribute('src', resultsArray[2].path);
  showRight.addEventListener('click' , populateCardPageBot);

  var city = document.getElementById('cityName3');
  city.textContent = resultsArray[2].city;
} else {
  nukeChildren(elementIdGrab('right'));
}
