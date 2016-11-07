'use strict';

var cityObjects = [];

var City = function(city, country, activity, season, money, people, path) {
  this.city = city,
  this.country = country,
  this.activity = activity,
  this.season = season,
  this.money = money,
  this.people = people,
  this.path = path,
  cityObjects.push(this);
};

var cityArray = [['Rome', 'Italy', 'sightseeing', 'summer', '$$$', 'solo, couple, family, pet', 'img/Rome.jpg'],
  ['Paris', 'France', 'sightseeing', 'spring, fall', '$$$', 'solo, couple, family, pet', 'img/Paris.jpg'],
  ['London', 'United Kingdom', 'sightseeing', 'spring', '$$$', 'solo, couple, family, pet', 'img/London.jpg'],
  ['Amsterdam', 'Netherlands', 'sightseeing', 'spring, fall', '$$$', 'solo, couple', 'img/Amsterdam.jpg'],
  ['Berlin', 'Germany', 'sightseeing', 'summer', '$$', 'solo, couple, family, pet', 'img/Berlin.jpg'],
  ['Budapest', 'Hungary','sightseeing', 'winter', '$$', 'couple, family', 'img/Budapest.jpg'],
  ['Tallin', 'Estonia','sightseeing', 'spring, summer', '$', 'solo, couple, family, pet', 'img/Tallin.jpg'],
  ['Kungsleden, Sweden', 'sports, camping', 'fall, summer', '$', 'solo, couple, family, pet', 'img/Kungsleden.jpg' ],
  ['Zermatt, Switzerland', 'sports', 'winter', '$$$', 'solo, couple, family, pet', 'img/Zermatt.jpg'],
  ['Majorca, Spain', 'beach', 'spring, summer', '$$', 'solo, couple, family, pet', 'img/Majorca.jpg'],
  ['Prague', 'Czech Republic', 'sightseeing', 'spring, fall', '$$', 'solo', 'img/Prague.jpg'],
  ['Marmaris', 'Turkey', 'beach', 'summer', '$', 'solo, couple, family', 'img/Marmaris.jpg'],
  ['Algarve', 'Portugal', 'beach', 'summer', '$', 'solo, couple, family', 'img/Algarve.jpg'],
  ['Reykjavik', 'Iceland', 'sightseeing, sports', 'winter', '$$', 'solo, couple', 'img/Reykjavik.jpg'],
  ['Cavtat', 'Croatia', 'beach', 'summer', '$', 'solo, couple, family', 'img/Cavtat.jpg'],

  ['Las Vegas','Nevada, USA', 'sightseeing', 'winter, spring, summer, fall', '$$$', 'solo, couple, family', 'img/LasVegas.jpg'],
  ['Seattle', 'Washington, USA', 'sightseeing', 'summer', '$$', 'couple', 'img/Seattle.jpg'],
  ['San Diego', 'California, USA', 'beach', 'fall', '$', 'family', 'img/SanDiego.jpg'],
  ['New York', 'New York, USA', 'sightseeing', 'winter', '$$', 'single', 'img/NewYorkCity.jpg'],
  ['Vancouver', 'BC, Canada', 'sightseeing', 'spring', '$$', 'family', 'img/Vancouver.jpg'],
  ['Cancun', 'Mexico', 'beach', 'summer', '$$', 'couple', 'img/Cancun.jpg'],
  ['Burlington', 'Vermont, USA', 'sports', 'fall', '$$', 'couple', 'img/Vermont.jpg'],
  ['Rio De Janeiro', 'Brazil', 'beach', 'summer', '$', 'single', 'img/RioDeJaneiro.jpg'],
  ['Chichen Itza', 'Mexico', 'sightseeing', 'spring', '$', 'family', 'img/ChichenItza.jpg'],
  ['Lima', 'Peru', 'sightseeing', 'summer', '$', 'couple', 'img/LimaPeru.jpg'],
  ['San Francisco', 'California, USA', 'sightseeing', 'fall', '$$', 'couple', 'img/SanFrancisco.jpg'],
  ['Honolulu', 'Hawaii, USA', 'beach', 'winter', '$$$', 'couple', 'img/Honolulu.jpg'],
  ['Victoria Falls', 'Tanzania', 'sightseeing', 'winter', '$', 'family', 'img/VictoriaFallsTanzania.jpg'],
  ['Giza', 'Egypt', 'sightseeing', 'fall', '$$', 'single', 'img/GizaEgypt.jpg'],

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

// var dummyCityArray = [
//   {
//     name: 'Bale',
//     country: ,
//     type: 'beach',
//     seasons: ['spring', 'summer'],
//     price: 2,
//     cool: false,
//   },
// ];
// cityObjects[i].activity.includescityObjects[i].activity.includes
// var stuff = new Destination(destinationInfo) {
//   this.name = destinationInfo.name;
//   this.counter = destinationInfo.country;
//   this.cool = destinationInfo.cool;
// }

function createCities() {
  for (var i = 0; i < cityArray.length; i++) {
    var city = new City(cityArray[i][0], cityArray[i][1], cityArray[i][2], cityArray[i][3], cityArray[i][4], cityArray[i][5], cityArray[i][6]);
    console.log(city);
  }
}
createCities();
