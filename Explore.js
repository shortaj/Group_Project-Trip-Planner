'use strict';

var cityPhoto = document.getElementById('cityPhoto');

// var clickExplore = document.getElementById('explore');
// clickExplore.addEventListener('click' , createExploreList);
function handleCityClick(event) {
  console.log('handleCityClick' , event.target.dataset.city);
  localStorage.setItem('city', event.target.dataset.city);
}

function populateCityPhoto(event) {
  console.log('populateCityPhoto' , event);
  var cityHoverOver = JSON.parse(event.target.dataset.city);
  console.log('cityHoverOver', cityHoverOver.path);
  cityPhoto.setAttribute('src', cityHoverOver.path);
}

function createExploreList() {
  for (var i = 0; i < cityObjects.length; i++) {
    var cityUl = document.getElementById('cityUl');
    var cityLi = document.createElement('li');
    var cityLink = document.createElement('a');
    var cityText = cityObjects[i].city;
    var cityCountry = cityObjects[i].country;
    cityLi.setAttribute('class', 'classStyle');
    cityLi.dataset.city = JSON.stringify(cityObjects[i]);
    cityLi.textContent = cityText + ', ' + cityCountry;

    cityLi.addEventListener('mouseover', populateCityPhoto);

    cityLink.setAttribute('href', 'card.html');
    cityLink.addEventListener('click', handleCityClick);
    cityUl.appendChild(cityLink);
    cityLink.appendChild(cityLi);
    console.log('test');
  }
}

createExploreList();
