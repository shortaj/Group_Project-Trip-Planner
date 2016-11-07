'use strict';

var cityObjects = [];

var City = function(city, country, activity, season, money, people) {
  this.city = city,
  this.country = country,
  this.activity = activity,
  this.season = season,
  this.money = money,
  this.people = people,
  //will need a property for image path
  cityObjects.push(this);
};

var cityArray = [['Rome', 'Italy', 'sightseeing', 'summer', '$$$', 'solo, couple, family, pet'],
  ['Paris', 'France', 'sightseeing', 'spring, fall', '$$$', 'solo, couple, family, pet'],
  ['London', 'United Kingdom', 'sightseeing', 'spring', '$$$', 'solo, couple, family, pet'],
  ['Amsterdam', 'Netherlands', 'sightseeing', 'spring, fall', '$$$', 'solo, couple'],
  ['Berlin', 'Germany', 'sightseeing', 'summer', '$$', 'solo, couple, family, pet'],
  ['Budapest', 'Hungary','sightseeing', 'winter', '$$', 'couple, family'],
  ['Tallin', 'Estonia','sightseeing', 'spring, summer', '$', 'solo, couple, family, pet'],
  ['Kungsleden, Sweden', 'hiking, camping', 'fall, summer', '$', 'solo, couple, family, pet' ],
  ['Zermatt, Switzerland', 'sports', 'winter', '$$$', 'solo, couple, family, pet'],
  ['Majorca, Spain', 'beach', 'spring, summer', '$$', 'solo, couple, family, pet'],
  ['Prague', 'Czech Republic', 'sightseeing', 'spring, fall', '$$', 'solo'],
  ['Marmaris', 'Turkey', 'beach', 'summer', '$', 'solo, couple, family'],
  ['Algarve', 'Portugal', 'beach', 'summer', '$', 'solo, couple, family'],
  ['Reykjavík', 'Iceland', 'sightseeing, hiking', 'winter', '$$', 'solo, couple'],
  ['Cavtat', 'Croatia', 'beach', 'summer', '$', 'solo, couple, family'],

  ['Las Vegas','Nevada, USA', 'sightseeing', 'winter, spring, summer, fall', '$$$', 'solo, couple, family'],
  ['Seattle', 'Washington, USA', 'sightseeing', 'summer', '$$', 'couple'],
  ['San Diego', 'California, USA', 'beach', 'fall', '$', 'family'],
  ['New York', 'New York, USA', 'sightseeing', 'winter', '$$', 'single'],
  ['Vancouver', 'BC, Canada', 'sightseeing', 'spring', '$$', 'family'],
  ['Cancun', 'Mexico', 'beach', 'summer', '$$', 'couple'],
  ['Burlington', 'Vermont, USA', 'hiking', 'fall', '$$', 'couple'],
  ['Rio Di Janeiro', 'Brazil', 'beach', 'summer', '$', 'single'],
  ['Chichen Itza', 'Mexico', 'sightseeing', 'spring', '$', 'family'],
  ['Lima', 'Peru', 'sightseeing', 'summer', '$', 'couple'],
  ['San Francisco', 'California, USA', 'sightseeing', 'fall', '$$', 'couple'],
  ['Honolulu', 'Hawaii, USA', 'beach', 'winter', '$$$', 'couple'],
  ['Dodoma', 'Tanzania', 'sightseeing', 'winter', '$', 'family'],
  ['Victoria Falls', 'Zambia', 'sightseeing', 'fall', '$$', 'family'],
  ['Giza', 'Egypt', 'sightseeing', 'fall', '$$', 'single'],

  ['Bali', 'Indonesia', 'beach', 'winter, spring, summer, fall', '$$', 'solo, couple, family'],
  ['Singapore', 'Singapore', 'sightseeing', 'winter, spring, summer, fall', '$$', 'couple, family'],
  ['Rishikesh', 'India', 'siteseeing', 'winter, spring, fall', '$', 'solo, couple'],
  ['Phuket', 'Thailand', 'beach, siteseeing', 'winter, spring, fall', '$', 'solo, couple'],
  ['Hoi Ann', 'Vietnam', 'beach, siteseeing', 'winter, spring, fall', '$', 'solo, couple'],
  ['Luang Prabang', 'Laos', 'siteseeing', 'winter, spring, fall', '$$', '$$', 'solo, couple, family'],
  ['Siem Reap', 'Cambodia', 'siteseeing', 'winter, spring, fall', '$', 'solo, couple'],
  ['Bagan', 'Myanmar', 'siteseeing', 'winter, spring, fall', '$', 'solo, couple'],
  ['Cairns', 'Australia', 'beach, sports, siteseeing', 'winter, spring, summer, fall', '$$$', 'solo, couple, family'],
  ['Queenstown', 'New Zealand', 'beach, sports, siteseeing', 'winter, spring, summer, fall', '$$$', 'solo, couple, family'],
  ['Chengdu', 'China', 'siteseeing', 'spring, summer, fall', '$$', 'solo, couple, family'],
  ['Yongpyong', 'South Korea', 'siteseeing, sports', 'spring, summer, fall', '$$', 'solo, couple, family'],
  ['Kyoto', 'Japan', 'siteseeing', 'spring, summer, fall', '$$', 'solo, couple, family'],
  ['Kuala Lumpur', 'Malaysia', 'siteseeing', 'winter, spring, summer, fall', '$$', 'couple, family']
];

function createCities() {
  for (var i = 0; i < cityArray.length; i++) {
    var city = new City(cityArray[i][0], cityArray[i][1], cityArray[i][2], cityArray[i][3], cityArray[i][4], cityArray[i][5]);
    console.log(city);
  }
}
createCities();
