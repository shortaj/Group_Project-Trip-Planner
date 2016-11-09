'use strict';

var City = function(city, country, activity, season, money, people, path, weather, describe) {
  this.city = city;
  this.country = country;
  this.activity = activity;
  this.season = season;
  this.money = money;
  this.people = people;
  this.path = path;
  this.weather = weather;
  this.describe = describe;
};

var cityObjects = [
  new City('Rome', 'Italy', 'sightseeing', 'summer', '$$$', 'solo, couple, family, pet', 'img/Rome.jpg' , romeWeather, romeDescribe),
  new City('Paris', 'France', 'sightseeing', 'spring, fall', '$$$', 'solo, couple, family, pet', 'img/Paris.jpg', parisWeather, parisDescribe),
  new City('London', 'United Kingdom', 'sightseeing', 'spring', '$$$', 'solo, couple, family, pet', 'img/London.jpg', londonWeather, londonDescribe),
  new City('Amsterdam', 'Netherlands', 'sightseeing', 'spring, fall', '$$$', 'solo, couple', 'img/Amsterdam.jpg', amsterdamWeather, amsterdamDescribe),
  new City('Berlin', 'Germany', 'sightseeing', 'summer', '$$', 'solo, couple, family, pet', 'img/Berlin.jpg', berlinWeather, berlinDescribe),
  new City('Budapest', 'Hungary','sightseeing', 'winter', '$$', 'couple, family', 'img/Budapest.jpg', budapestWeather, budapestDescribe),
  new City('Tallin', 'Estonia','sightseeing', 'spring, summer', '$', 'solo, couple, family, pet', 'img/Tallin.jpg', tallinWeather, tallinDescribe),
  new City('Kungsleden, Sweden', 'sports, sightseeing', 'fall, summer', '$', 'solo, couple, family, pet', 'img/Kungsleden.jpg', kungsledenWeather, kungsledenDescribe),
  new City('Zermatt, Switzerland', 'sports, sightseeing', 'winter', '$$$', 'solo, couple, family, pet', 'img/Zermatt.jpg', zermattWeather, zermattDescribe),
  new City('Majorca, Spain', 'beach, sports, sightseeing', 'spring, summer', '$$', 'solo, couple, family, pet', 'img/Majorca.jpg', majorcaWeather, majorcaDescribe),
  new City('Prague', 'Czech Republic', 'sightseeing', 'spring, fall', '$$', 'solo', 'img/Prague.jpg', pragueWeather, pragueDescribe),
  new City('Marmaris', 'Turkey', 'beach, sports, sightseeing', 'summer', '$', 'solo, couple, family', 'img/Marmaris.jpg', marmarisWeather, marmarisDescribe),
  new City('Algarve', 'Portugal', 'beach, sports, sightseeing', 'summer', '$', 'solo, couple, family', 'img/Algarve.jpg', algarveWeather, algarveDescribe),
  new City('Reykjavik', 'Iceland', 'sightseeing, sports', 'winter', '$$', 'solo, couple', 'img/Reykjavik.jpg', reykjavikWeather, reykjavikDescribe),
  new City('Cavtat', 'Croatia', 'beach, sightseeing', 'summer', '$', 'solo, couple, family', 'img/Cavtat.jpg', cavtatWeather, cavtatDescribe),

  new City('Las Vegas','Nevada, USA', 'sightseeing', 'winter, spring, summer, fall', '$$$', 'solo, couple, family', 'img/LasVegas.jpg', lasvegasWeather, lasvegasDescribe),
  new City('Seattle', 'Washington, USA', 'sightseeing', 'summer', '$$', 'couple', 'img/Seattle.jpg', seattleWeather, seattleDescribe),
  new City('San Diego', 'California, USA', 'beach, sports', 'fall', '$', 'family', 'img/SanDiego.jpg', sandiegoWeather, sandiegoDescribe),
  new City('New York', 'New York, USA', 'sightseeing', 'winter', '$$', 'single', 'img/NewYorkCity.jpg', newyorkcityWeather, newyorkcityDescribe),
  new City('Vancouver', 'BC, Canada', 'sightseeing, sports', 'spring', '$$', 'family', 'img/Vancouver.jpg', vancouverWeather, vancouverDescribe),
  new City('Cancun', 'Mexico', 'beach', 'summer', '$$', 'couple', 'img/Cancun.jpg', cancunWeather, cancunDescribe),
  new City('Burlington', 'Vermont, USA', 'sports, sightseeing', 'fall', '$$$', 'pet' , 'img/Vermont.jpg', burlingtonWeather, burlingtonDescribe),
  new City('Rio De Janeiro', 'Brazil', 'beach', 'summer', '$', 'single', 'img/RioDeJaneiro.jpg', riodejaneiroWeather, riodejaneiroDescribe),
  new City('Chichen Itza', 'Mexico', 'sightseeing, beach', 'spring', '$', 'family', 'img/ChichenItza.jpg', chichenitzaWeather, chichenitzaDescribe),
  new City('Lima', 'Peru', 'sightseeing', 'summer', '$', 'couple', 'img/LimaPeru.jpg', limaWeather, limaDescribe),
  new City('San Francisco', 'California, USA', 'sightseeing, sports', 'fall', '$$', 'couple', 'img/SanFrancisco.jpg', sanfranciscoWeather, sanfranciscoDescribe),
  new City('Honolulu', 'Hawaii, USA', 'beach, sports', 'winter', '$$$', 'couple', 'img/Honolulu.jpg', honoluluWeather, honoluluDescribe),
  new City('Victoria Falls', 'Tanzania', 'sightseeing', 'winter', '$', 'family', 'img/VictoriaFallsTanzania.jpg', victoriafallsWeather, victoriafallsDescribe),
  new City('Giza', 'Egypt', 'sightseeing', 'fall', '$$', 'single', 'img/GizaEgypt.jpg', gizaWeather, gizaDescribe),

  new City('Ubud', 'Bali, Indonesia', 'beach, sightseeing', 'winter, spring, summer, fall', '$$', 'solo, couple, family', 'img/Bali.jpg', baliWeather, baliDescribe),
  new City('Singapore', 'Singapore', 'sightseeing', 'winter, spring, summer, fall', '$$', 'couple, family', 'img/Singapore.jpg', singaporeWeather, singaporeDescribe),
  new City('Rishikesh', 'India', 'sightseeing, sports', 'winter, spring, fall', '$', 'solo, couple', 'img/Rishikesh.jpg', rishikeshWeather, rishikeshDescribe),
  new City('Phuket', 'Thailand', 'beach, sightseeing', 'winter, spring, fall', '$', 'solo, couple', 'img/Phuket.jpg', phuketWeather, phuketDescribe),
  new City('Hoi An', 'Vietnam', 'beach, sightseeing', 'winter, spring, fall', '$', 'solo, couple', 'img/Hoi-an.jpg', hoianWeather, hoianDescribe),
  new City('Luang Prabang', 'Laos', 'sightseeing', 'winter, spring, fall', '$$', '$$', 'solo, couple, family', 'img/Luang-prabang.jpg', luangprabangWeather, luangprabangDescribe),
  new City('Siem Reap', 'Cambodia', 'sightseeing', 'winter, spring, fall', '$', 'solo, couple', 'img/Siem-reap.jpg', siemreapWeather, siemreapDescribe),
  new City('Bagan', 'Myanmar', 'sightseeing', 'winter, spring, fall', '$', 'solo, couple', 'img/Bagan.jpg', baganWeather, baganDescribe),
  new City('Cairns', 'Australia', 'beach, sports, sightseeing', 'winter, spring, summer, fall', '$$$', 'solo, couple, family', 'img/Cairns.jpg', cairnsWeather, cairnsDescribe),
  new City('Queenstown', 'New Zealand', 'beach, sports, sightseeing', 'winter, spring, summer, fall', '$$$', 'solo, couple, family', 'img/Queenstown.jpg', queenstownWeather, queenstownDescribe),
  new City('Chengdu', 'China', 'sightseeing', 'spring, summer, fall', '$$', 'solo, couple, family', 'img/Chengdu.jpg', chengduWeather, chengduDescribe),
  new City('Yongpyong', 'South Korea', 'sightseeing, sports', 'spring, summer, fall', '$$', 'solo, couple, family', 'img/Yongpyong.jpg', yongpyongWeather, yongpyongDescribe),
  new City('Kyoto', 'Japan', 'sightseeing', 'spring, summer, fall', '$$', 'solo, couple, family', 'img/Kyoto.jpg', kyotoWeather, kyotoDescribe),
  new City('Kuala Lumpur', 'Malaysia', 'sightseeing', 'winter, spring, summer, fall', '$$', 'couple, family', 'img/Kuala-lumpur.jpg', kualalumpurWeather, kualalumpurDescribe)
];
