'use strict';

function localStorageInsert (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function localStoragePull (key) {
  return JSON.parse(localStorage.getItem(key));
}



var resultsArray = [localStoragePull('resultOne'), localStoragePull('resultTwo'), localStoragePull('resultTwo')];
var showLeft = document.getElementById('imageSpotLeft');
showLeft.setAttribute('src',  resultsArray[0].path);
showLeft.addEventListener('click' , cardPage);
var showCenter = document.getElementById('imageSpotCenter');
showLeft.setAttribute('src',  resultsArray[1].path);
showCenter.addEventListener('click' , cardPage);
var showRight = document.getElementById('imageSpotRight');
showLeft.setAttribute('src',  resultsArray[2].path);
showRight.addEventListener('click' , cardPage);
