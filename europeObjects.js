'use strict';

var cityObjects = [];

var City = function(name, activity, season, money, people) {
  this.name = name,
  this.activity = activity,
  this.season = season,
  this.money = money,
  this.people = people,
  //will need a property for image path
  cityObjects.push(this);
};

var cityArray = [['Rome', 'sightseeing', 'summer', '$$$', 'solo, couple, family, pet'],
  ['Paris', 'sightseeing', 'spring, fall', '$$$', 'solo, couple, family, pet'],
  ['London', 'sightseeing', 'spring', '$$$', 'solo, couple, family, pet'],
  ['Amsterdam', 'sightseeing', 'spring, fall', '$$$', 'solo, couple'],
  ['Berlin', 'sightseeing', 'summer', '$$', 'solo, couple, family, pet'],
  ['Budapest', 'sightseeing', 'winter', '$$', 'couple, family'],
  ['Tallin', 'sightseeing', 'spring, summer', '$', 'solo, couple, family, pet'],
  ['Kungsleden, Sweden', 'hiking, camping', 'fall, summer', '$', 'solo, couple, family, pet' ],
  ['Zermatt, Switzerland', 'skiing', 'winter', '$$$', 'solo, couple, family, pet'],
  ['Majorca, Spain', 'beach', 'spring, summer', '$$', 'solo, couple, family, pet'],
  ['Prague, Czech Republic', 'sightseeing', 'spring, fall', '$$', 'solo'],
  ['Marmaris, Turkey', 'beach', 'summer', '$', 'solo, couple, family'],
  ['Algarve, Portugal', 'beach', 'summer', '$', 'solo, couple, family'],
  ['Reykjavík, Iceland', 'sightseeing, hiking', 'winter', '$$', 'solo, couple'],
  ['Cavtat, Croatia', 'beach', 'summer', '$', 'solo, couple, family']
];

function createCities() {
  for (var i = 0; i < cityArray.length; i++) {
    for (var j = 0; j < 5; j++) {
      var prod = new City(cityArray[i][j]);
  };
}
createCities();
