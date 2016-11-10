'use strict';


// var clickExplore = document.getElementById('explore');
// clickExplore.addEventListener('click' , createExploreList);


function createExploreList (event){
  for (var i = 0; i < cityObjects.length; i++) {
    var cityUl = document.getElementById('cityUl');
    var cityLi = document.createElement('li');
    var classText = cityObjects[i].city;
    cityLi.setAttribute('class' , classText);
    cityLi.setAttribute('src' , cityObjects[i].path);
    cityUl.appendChild(cityLi);
    console.log('test');
  }
}
createExploreList();
