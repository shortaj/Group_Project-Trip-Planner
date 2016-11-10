'use strict';


// var clickExplore = document.getElementById('explore');
// clickExplore.addEventListener('click' , createExploreList);
function handleCityClick(event) {
  console.log('handleCityClick' , event.target.dataset.city);
  localStorage.setItem('city', event.target.dataset.city);


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
    cityLink.setAttribute('href', 'card.html');
    cityLink.addEventListener('click', handleCityClick);
    // var goToCardPage = function(){
    //   var image = document.getElementById('city-view');
    //   image.setAttribute('src', cityObject[i].city);
    //
    //   var title = document.getElementById('blurb-title');
    //   title.textContent = cityObject[i].city;
    //
    //   var weather = document.getElementById('weather-link');
    //   weather.setAttribute('href', cityObject[i].weather);
    //
    //   var text = document.getElementById('blurb-text');
    //   text.textContent = cityObject[i].describe;
    //
    // };
    // cityLi.setAttribute('src' , );

    cityUl.appendChild(cityLink);
    cityLink.appendChild(cityLi);
    console.log('test');
  }
}

createExploreList();
