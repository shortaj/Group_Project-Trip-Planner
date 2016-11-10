'use strict';


function localStorageGet(key) {
  return localStorage.getItem(key);
}

function localStorageTranslate (key) {
  return JSON.parse(key);
}

var chosenCity = localStorageTranslate(localStorageGet('city'));

var image = document.getElementById('city-view');
image.setAttribute('src', chosenCity.path);

var title = document.getElementById('blurb-title');
title.textContent = chosenCity.describe;

var weather = document.getElementById('weather-link');
weather.setAttribute('href', chosenCity.weather);

var text = document.getElementById('blurb-text');
text.textContent = chosenCity.describe;
