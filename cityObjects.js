'use strict';

var City = function(city, country, activity, season, money, people, path, weather) {
  this.city = city;
  this.country = country;
  this.activity = activity;
  this.season = season;
  this.money = money;
  this.people = people;
  this.path = path;
  // this.weather = weather;
  // this.flights = flights;
  // this.currency = currency;
  // this.maps = maps;
  // this.calendar = calendar;
  // this.languages = languages;
  // this.embassy = embassy;
};

var cityObjects = [
  new City('Rome', 'Italy', 'sightseeing', 'summer', '$$$', 'solo, couple, family, pet', 'img/Rome.jpg'),
  new City('Paris', 'France', 'sightseeing', 'spring, fall', '$$$', 'solo, couple, family, pet', 'img/Paris.jpg'),
  new City('London', 'United Kingdom', 'sightseeing', 'spring', '$$$', 'solo, couple, family, pet', 'img/London.jpg'),
  new City('Amsterdam', 'Netherlands', 'sightseeing', 'spring, fall', '$$$', 'solo, couple', 'img/Amsterdam.jpg'),
  new City('Berlin', 'Germany', 'sightseeing', 'summer', '$$', 'solo, couple, family, pet', 'img/Berlin.jpg'),
  new City('Budapest', 'Hungary','sightseeing', 'winter', '$$', 'couple, family', 'img/Budapest.jpg'),
  new City('Tallin', 'Estonia','sightseeing', 'spring, summer', '$', 'solo, couple, family, pet', 'img/Tallin.jpg'),
  new City('Kungsleden, Sweden', 'sports, camping', 'fall, summer', '$', 'solo, couple, family, pet', 'img/Kungsleden.jpg'),
  new City('Zermatt, Switzerland', 'sports', 'winter', '$$$', 'solo, couple, family, pet', 'img/Zermatt.jpg'),
  new City('Majorca, Spain', 'beach', 'spring, summer', '$$', 'solo, couple, family, pet', 'img/Majorca.jpg'),
  new City('Prague', 'Czech Republic', 'sightseeing', 'spring, fall', '$$', 'solo', 'img/Prague.jpg'),
  new City('Marmaris', 'Turkey', 'beach', 'summer', '$', 'solo, couple, family', 'img/Marmaris.jpg'),
  new City('Algarve', 'Portugal', 'beach', 'summer', '$', 'solo, couple, family', 'img/Algarve.jpg'),
  new City('Reykjavik', 'Iceland', 'sightseeing, sports', 'winter', '$$', 'solo, couple', 'img/Reykjavik.jpg'),
  new City('Cavtat', 'Croatia', 'beach', 'summer', '$', 'solo, couple, family', 'img/Cavtat.jpg'),

  new City('Las Vegas','Nevada, USA', 'sightseeing', 'winter, spring, summer, fall', '$$$', 'solo, couple, family', 'img/LasVegas.jpg'),
  new City('Seattle', 'Washington, USA', 'sightseeing', 'summer', '$$', 'couple', 'img/Seattle.jpg'),
  new City('San Diego', 'California, USA', 'beach', 'fall', '$', 'family', 'img/SanDiego.jpg'),
  new City('New York', 'New York, USA', 'sightseeing', 'winter', '$$', 'single', 'img/NewYorkCity.jpg'),
  new City('Vancouver', 'BC, Canada', 'sightseeing', 'spring', '$$', 'family', 'img/Vancouver.jpg'),
  new City('Cancun', 'Mexico', 'beach', 'summer', '$$', 'couple', 'img/Cancun.jpg'),
  new City('Burlington', 'Vermont, USA', 'sports', 'fall', '$$', 'couple', 'img/Vermont.jpg'),
  new City('Rio De Janeiro', 'Brazil', 'beach', 'summer', '$', 'single', 'img/RioDeJaneiro.jpg'),
  new City('Chichen Itza', 'Mexico', 'sightseeing', 'spring', '$', 'family', 'img/ChichenItza.jpg'),
  new City('Lima', 'Peru', 'sightseeing', 'summer', '$', 'couple', 'img/LimaPeru.jpg'),
  new City('San Francisco', 'California, USA', 'sightseeing', 'fall', '$$', 'couple', 'img/SanFrancisco.jpg'),
  new City('Honolulu', 'Hawaii, USA', 'beach', 'winter', '$$$', 'couple', 'img/Honolulu.jpg'),
  new City('Victoria Falls', 'Tanzania', 'sightseeing', 'winter', '$', 'family', 'img/VictoriaFallsTanzania.jpg'),
  new City('Giza', 'Egypt', 'sightseeing', 'fall', '$$', 'single', 'img/GizaEgypt.jpg'),

  new City('Bali', 'Indonesia', 'beach', 'winter, spring, summer, fall', '$$', 'solo, couple, family', 'img/Bali.jpg'),
  new City('Singapore', 'Singapore', 'sightseeing', 'winter, spring, summer, fall', '$$', 'couple, family', 'img/Singapore.jpg'),
  new City('Rishikesh', 'India', 'siteseeing', 'winter, spring, fall', '$', 'solo, couple', 'img/Rishikesh.jpg'),
  new City('Phuket', 'Thailand', 'beach, siteseeing', 'winter, spring, fall', '$', 'solo, couple', 'img/Phuket.jpg'),
  new City('Hoi An', 'Vietnam', 'beach, siteseeing', 'winter, spring, fall', '$', 'solo, couple', 'img/Hoi-an.jpg'),
  new City('Luang Prabang', 'Laos', 'siteseeing', 'winter, spring, fall', '$$', '$$', 'solo, couple, family', 'img/Luang-prabang.jpg'),
  new City('Siem Reap', 'Cambodia', 'siteseeing', 'winter, spring, fall', '$', 'solo, couple', 'img/Siem-reap.jpg'),
  new City('Bagan', 'Myanmar', 'siteseeing', 'winter, spring, fall', '$', 'solo, couple', 'img/Bagan.jpg'),
  new City('Cairns', 'Australia', 'beach, sports, siteseeing', 'winter, spring, summer, fall', '$$$', 'solo, couple, family', 'img/Cairns.jpg'),
  new City('Queenstown', 'New Zealand', 'beach, sports, siteseeing', 'winter, spring, summer, fall', '$$$', 'solo, couple, family', 'img/Queenstown.jpg'),
  new City('Chengdu', 'China', 'siteseeing', 'spring, summer, fall', '$$', 'solo, couple, family', 'img/Chengdu.jpg'),
  new City('Yongpyong', 'South Korea', 'siteseeing, sports', 'spring, summer, fall', '$$', 'solo, couple, family', 'img/Yongpyong.jpg'),
  new City('Kyoto', 'Japan', 'siteseeing', 'spring, summer, fall', '$$', 'solo, couple, family', 'img/Kyoto.jpg'),
  new City('Kuala Lumpur', 'Malaysia', 'siteseeing', 'winter, spring, summer, fall', '$$', 'couple, family', 'img/Kuala-lumpur.jpg')
];

// , romeWeather, romeFlights, romeCurrency, romeMaps, romeCalendar, romeLanguages, romeEmbassy
// var romeWeather = 'https://www.wunderground.com/q/zmw:00000.1.16242';
// var romeFlights = '';
// var romeCurrency = '';
// var romeMaps = '';
// var romeCalendar = '';
// var romeLanguages = '';
// var romeEmbassy = '';
