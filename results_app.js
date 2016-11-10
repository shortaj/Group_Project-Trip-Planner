'use strict';

function localStorageInsert (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function localStoragePull (key) {
  return JSON.parse(localStorage.getItem(key));
}

var resultsArray = [localStoragePull('resultOne'), localStoragePull('resultTwo'), localStoragePull('resultThree')];

var showLeft = document.getElementById('imageSpotLeft');
showLeft.setAttribute('src', resultsArray[0].path);
showLeft.addEventListener('click' , cardPage);
//get cardpage ids, assign resultsArray[0].properties to coinsiding ids.

var showCenter = document.getElementById('imageSpotCenter');
showLeft.setAttribute('src', resultsArray[1].path);
showCenter.addEventListener('click' , cardPage);

var showRight = document.getElementById('imageSpotRight');
showLeft.setAttribute('src', resultsArray[2].path);
showRight.addEventListener('click' , cardPage);

function cardPage(object) {
  var image = document.getElementById('city-view');
  image.setAttribute('src', object.path);

  var title = document.getElementById('blurb-title');
  title.textContent = '';
}
