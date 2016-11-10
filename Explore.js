'use strict';


// var clickExplore = document.getElementById('explore');
// clickExplore.addEventListener('click' , createExploreList);


function createExploreList (){
  for (var i = 0; i < cityObjects.length; i++) {
    var cityUl = document.getElementById('cityUl');
    var cityLi = document.createElement('li');
    var classText = cityObjects[i].city;
    console.log('test');
    cityLi.setAttribute('class' , classText);
    cityLi.setAttribute('src' , cityObjects[i].path);
    cityUl.appendChild('cityLi');
  }
}
createExploreList()
