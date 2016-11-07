'use strict';

var cityObjects = [];

var City = function(name, activity, season, money, people) {
  this.name = name;
  this.activity = activity;
  this.season = season;
  this.money = money;
  this.people = people;
  cityObjects.push(this);
};

var cityArray = [['Las Vegas', 'Sight-Seeing', 'All-Year', '$$$', 'Group'],
['Seattle', 'Culture', 'Summer', '$$', 'Couple'],
['San Diego', 'Beach', 'Fall', '$', 'Family'],
['New York', 'Sight-Seeing', 'Winter', '$$', 'Single'],
['Vancouver', 'Sight-Seeing', 'Spring', '$$', 'Family'],
['Cancun', 'Beach', 'Summer', 'Summer', '$$', 'Couple'],
['Vermont', 'Hiking', 'Fall', '$$', 'Couple'],
['Rio Di Janeiro', 'Beach', 'Summer', '$', 'Single'],
['Chichen Itza', 'Culture', 'Spring', '$', 'Family'],
['Lima', 'Culture', 'Summer', '$', 'Couple'],
['San Francisco', 'Sight-Seeing', 'Fall', '$$', 'Couple'],
['Honolulu', 'Beach', 'Winter', '$$$', 'Couple'],
['Tanzania', 'Sight-Seeing', 'Winter', '$', 'Family'],
['Victoria Falls', 'Sight-Seeing', 'Fall', '$$', 'Family']
['Egypt', 'Culture', 'Fall', '$$', 'Single']
];

function createCities() {
  for (var i = 0; i < cityArray.length; i++) {
    var city = new City(cityArray[i][0]), cityArray[i][1], [1]cityArray[i][2]), cityArray[i][3]), cityArray[i][4]),
    console.log(city);
  }
}
createCities();
