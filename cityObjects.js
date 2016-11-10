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
  new City('Kungsleden', 'Sweden', 'sports, sightseeing', 'fall, summer', '$', 'solo, couple, family, pet', 'img/Kungsleden.jpg', kungsledenWeather, kungsledenDescribe),
  new City('Zermatt', 'Switzerland', 'sports, sightseeing', 'winter', '$$$', 'solo, couple, family, pet', 'img/Zermatt.jpg', zermattWeather, zermattDescribe),
  new City('Majorca', 'Spain', 'beach, sports, sightseeing', 'spring, summer', '$$', 'solo, couple, family, pet', 'img/Majorca.jpg', majorcaWeather, majorcaDescribe),
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
  new City('Luang Prabang', 'Laos', 'sightseeing', 'winter, spring, fall', '$$', 'solo, couple, family', 'img/Luang-prabang.jpg', luangprabangWeather, luangprabangDescribe),
  new City('Siem Reap', 'Cambodia', 'sightseeing', 'winter, spring, fall', '$', 'solo, couple', 'img/Siem-reap.jpg', siemreapWeather, siemreapDescribe),
  new City('Bagan', 'Myanmar', 'sightseeing', 'winter, spring, fall', '$', 'solo, couple', 'img/Bagan.jpg', baganWeather, baganDescribe),
  new City('Cairns', 'Australia', 'beach, sports, sightseeing', 'winter, spring, summer, fall', '$$$', 'solo, couple, family', 'img/Cairns.jpg', cairnsWeather, cairnsDescribe),
  new City('Queenstown', 'New Zealand', 'beach, sports, sightseeing', 'winter, spring, summer, fall', '$$$', 'solo, couple, family', 'img/Queenstown.jpg', queenstownWeather, queenstownDescribe),
  new City('Chengdu', 'China', 'sightseeing', 'spring, summer, fall', '$$', 'solo, couple, family', 'img/Chengdu.jpg', chengduWeather, chengduDescribe),
  new City('Yongpyong', 'South Korea', 'sightseeing, sports', 'spring, summer, fall', '$$', 'solo, couple, family', 'img/Yongpyong.jpg', yongpyongWeather, yongpyongDescribe),
  new City('Kyoto', 'Japan', 'sightseeing', 'spring, summer, fall', '$$', 'solo, couple, family', 'img/Kyoto.jpeg', kyotoWeather, kyotoDescribe),
  new City('Kuala Lumpur', 'Malaysia', 'sightseeing', 'winter, spring, summer, fall', '$$', 'couple, family', 'img/Kuala-lumpur.jpeg', kualalumpurWeather, kualalumpurDescribe)
];


// var allFlights = 'https://www.hipmunk.com/flights';
// var allLanguages = 'http://www.infoplease.com/ipa/A0855611.html';
// var allCurrency = 'http://www.exchange-rates.org/';
// var allMaps = 'https://www.google.com/maps/@47.6158756,-122.3434412,14z';
// var allEmbassy = 'https://step.state.gov/step/';

var romeWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=rome%2C+italy';
var romeDescribe = 'Rome wasn\'t built in a day--and you\'ll need much more than a day to take in this timeless city. The city is a real-life collage of piazzas, open-air markets, and astonishing historic sites. Toss a coin into the Trevi Fountain, contemplate the Colosseum and the Pantheon, and sample a perfect espresso or gelato before spending an afternoon shopping at the Campo de’Fiori or Via Veneto. Enjoy some of the most memorable meals of your life here, too, from fresh pasta to succulent fried artichokes or a tender oxtail stew.';

var parisWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=paris%2C+france';
var parisDescribe = 'Lingering over pain au chocolat in a sidewalk café, relaxing after a day of strolling along the Seine and marveling at icons like the Eiffel Tower and the Arc de Triomphe… the perfect Paris experience combines leisure and liveliness with enough time to savor both an exquisite meal and exhibits at the Louvre. Awaken your spirit at Notre Dame, bargain hunt at the Marché aux Puces de Montreuil or for goodies at the Marché Biologique Raspail, then cap it all off with a risqué show at the Moulin Rouge.';

var londonWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=london%2C+england';
var londonDescribe = 'The crown jewels, Buckingham Palace, Camden Market…in London, history collides with art, fashion, food, and good British ale. A perfect day is different for everyone: culture aficionados shouldn\'t miss the Tate Modern and the Royal Opera House. If you love fashion, Oxford Street has shopping galore. For foodies, cream tea at Harrod’s or crispy fish from a proper chippy offers classic London flavor. Music and book buffs will love seeing Abbey Road and the Sherlock Holmes Museum (at 221B Baker Street, of course).';

var amsterdamWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=amsterdam%2C+netherlands';
var amsterdamDescribe = 'This city, full of colorful homes, canals and bridges, is one of Europe\'s most picturesque capitals. Must-sees on any visitor\'s itinerary include the Anne Frank House, the Van Gogh Museum and the world\'s only floating flower market. Rent a bike and join thousands of locals navigating Amsterdam\'s labyrinthine streets, or just take in the sights on foot. For an unusual and memorable alternative to hotels, consider staying in a houseboat.';

var berlinWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=berlin%2C+germany';
var berlinDescribe = 'Berlin is an edgy city, from its fashion to its architecture to its charged political history. The Berlin Wall is a sobering reminder of the hyper-charged postwar atmosphere, and yet the graffiti art that now covers its remnants has become symbolic of social progress. Check out the Weltzeituhr (world time) Clock, topped by a model of the solar system, then turn back time by dining at the historic Zur Letzten Instanz, a 16th century restaurant that was frequented by Napoleon and Beethoven.';

var budapestWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=budapest%2C+hungary';
var budapestDescribe = 'Over 15 million gallons of water bubble daily into Budapest\'s 118 springs and boreholes. The city of spas offers an astounding array of baths, from the sparkling Gellert Baths to the vast 1913 neo-baroque Szechenyi Spa to Rudas Spa, a dramatic 16th-century Turkish pool with original Ottoman architecture. The "Queen of the Danube" is also steeped in history, culture and natural beauty. Get your camera ready for the Roman ruins of the Aquincum Museum, Heroes\' Square and Statue Park, and the 300-foot dome of St. Stephen\'s Basilica.';

var tallinWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=london%2C+england';
var tallinDescribe = 'Tallinn\'s atmospheric Old Town is an enthralling hodgepodge of medieval streets and spires. It\'s a small city, and the tourist areas are safe and easily explored on foot. Buy a Tallinn Card if intending to use buses, trolleys or trams. For a look into Tallinn\'s past, visit Rocca-al-Mare Open Air Museum\'s typical rural Estonian taverns, windmills and watermills, see the onion-domed 1900 cathedral or join the bustle in historic Town Hall Square. St. Olav\'s spire was once the tallest in the world.';

var kungsledenWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=kungslena%2C+sweden';
var kungsledenDescribe = 'Located in the extreme north of Sweden, Kungsleden (The King\'s Trail) bisects one of Western Europe\'s largest remaining wilderness areas. Used by hikers in the summer, and cross-country skiers in the winter, Kungsleden serves up an Arctic dreamscape of glaciers, tundra, and birch forests, as well as 6,909-foot Mount Kebnekaise—Sweden\'s highest peak. The long-distance route naturally divides into four one-week segments, making it accessible for even those with limited time.';

var zermattWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=zermatt%2C+switzerland';
var zermattDescribe = 'When most people think of Zermatt, they think of one thing: The Matterhorn. This ultimate Swiss icon looms over Zermatt, first drawing visitors here in the 1860s. The village of Zermatt itself is lovely and car-free, with old-fashioned brown chalets and winding alleys. (Don’t worry, you don’t have to walk everywhere—there are electric vehicles and horse-drawn cabs.) Skiing in the region often lasts through early summer, but when the weather’s warmer, it’s a great time to hike.';

var majorcaWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=london%2C+england';
var majorcaDescribe = 'Mallorca (Majorca) is one of Spain\'s Balearic Islands in the Mediterranean. It\'s known for beach resorts, sheltered coves, limestone mountains and Roman and Moorish remains. Capital Palma has nightlife, the Moorish Almudaina royal palace and 13th-century Santa María Cathedral. Stone-built villages include Pollença, with its art galleries and music festival, and hillside Fornalutx, surrounded by citrus plantations.';

var pragueWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=prague%2C+czech+republic';
var pragueDescribe = 'The bohemian allure and fairytale features of Prague make it a perfect destination for beach-weary vacationers who want to immerse themselves in culture. You could devote an entire day to exploring Prazsky hrad (Prague Castle), then refueling over a hearty dinner at a classic Czech tavern. Spend some time wandering the Old Town Square before heading over to gape at The Old Town Hall and Astronomical Clock. Prague’s best bars are found in cellars, where historic pubs set the scene for a night of traditional tippling';

var marmarisWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=marmaris%2C+turkey';
var marmarisDescribe = 'A gorgeous backdrop of pine-clad mountains looms behind the seaside resort of Marmaris in southwest Turkey. Popular as a cruise ship and yacht port and with the British budget holiday crowd, Marmaris offers an abundance of fast food restaurants, the restored castle of Suleyman the Magnificent and an appealing cobblestoned old quarter. Outside the busy town, coves and bays of the Datça Peninsula make lovely daytrip destinations for those traveling by boat.';

var algarveWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=algarve%2C+portugal';
var algarveDescribe = 'The Algarve\'s sunny shores offer perfect escapes for all types, from those seeking the hot nightlife of flashy, energetic Lagos to those desiring secluded stays in rambling Sagres. Portugal\'s most southerly region offers historical attractions in former Moorish capital Silves and fascinating Tavira, great golf, fabulous beaches from Praia da Luz to Armacao de Pera, thermal springs at Caldas de Monchique, and miles of limestone caves and grottoes, cliffs and bays along its rugged coastline.';

var reykjavikWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=reykjavik%2C+iceland';
var reykjavikDescribe = 'Reykjavik bears the distinction of being the world’s northernmost capital, and for many Icelandic visitors it also serves as a gateway to the rugged adventure options beyond. Recharge after outdoor pursuits in one of the many geothermal springs or luxurious indoor spas. We appreciate Reykjavik’s open-minded and energetic culture that includes a hip and internationally recognized music and arts scene, great food and notoriously "enthusiastic" nightlife.';

var cavtatWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=cavtat%2C+croatia';
var cavtatDescribe = 'While Dubrovnik\’s streets are being polished under the shoes of thousands of visitors per day, Cavtat’s pine-covered trails seem comparatively tourist-free. Just 17 km (10½ miles) south of Dubrovnik, but seemingly a world away, you can find secluded swimming spots, quiet walking paths, and park benches waiting for you to sit and enjoy the beauty and tranquility that you came to Croatia to find.';

var lasvegasWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=las+vegas%2C+nevada';
var lasvegasDescribe = 'Whether you\’re a high roller or a low-key lounger, Las Vegas has something to suit your vacation taste. Sample fare from top chefs and cornucopian buffets, try your luck at one of the world\’s premier casinos, or take in a spectacular show. Just wandering the Strip is enough to get your heart pumping. Once you’ve had enough of the razzle-dazzle, wave hello to the toothy sea life at the Mandalay Bay Shark Reef, hike Red Rock Canyon, or visit the Neon Museum, where old signs take on new life.';

var seattleWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=seattle%2C+wa';
var seattleDescribe = 'In Seattle you simply can’t skip the Central Public Library – a modern architectural marvel of glass grids, unusual shapes, and a “book spiral” that climbs four stories. Stroll over to Pike Place Market to visit the original Starbucks and play catch with a fishmonger. In the heart of the city lies Chihuly Garden and Glass, which will dazzle you with its colorful and delicate works. Glide to the top of the Space Needle for panoramic views of the surrounding mountain ranges and Puget Sound.';

var sandiegoWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=san+diego%2C+california';
var sandiegoDescribe = 'San Diego embodies laid-back California culture, complete with a Boardwalk, surfing communities, and outstanding Mexican food. Breathe in the fresh ocean air at Sunset Cliffs Natural Park, then gobble down a fresh fish taco at a La Jolla seafood joint. The naval aircrafts at the USS Midway Museum will have you standing at attention. A free Sunday concert at the Spreckels Organ Pavilion is the perfect way to unwind after a Saturday night bar-hop in the thumping Gaslamp Quarter.';

var newyorkcityWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=new+york+%2C+new+york';
var newyorkcityDescribe = 'Conquering New York in one visit is impossible. Instead, hit the must-sees – the Empire State Building, the Statue of Liberty, Central Park, the Metropolitan Museum of Art – and then explore off the beaten path with visits to The Cloisters or one of the city\’s libraries. Indulge in the bohemian shops of the West Village or the fine dining of the Upper West Side. The bustling marketplace inside of Grand Central Station gives you a literal taste of the best the city has to offer.';

var vancouverWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=vancouver%2C+canada';
var vancouverDescribe = 'Vancouver was founded as “Gastown” by an Englishman with a penchant for beer and storytelling. Today Gastown is a historic section of the Canadian metropolis, and the lively pubs still reflect the area\’s former status as a sort of community drinking center. The city\’s forests, grand parks, and impressive suspension bridge beckon travelers to explore them, as do the city’s shops and museums. Relive the glory of the 2010 Winter Games with visits to Olympic venues and the marvelous Olympic Cauldron.';

var cancunWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=cancun%2C+mexico';
var cancunDescribe = 'Sunny Cancun has much more to offer than its party-town reputation might suggest. Plenty of gorgeous, drama-free family resorts cater to folks who want to experience the tropical Yucatan climate. There are significant Mayan ruins here, such as El Rey and the Yamil Lu\’um, a crumbling tower of pale gray stone. Learn more about this ancient civilization at the Museo Maya de Cancun. For a literal taste of Mexico, take a tour of the Museo Sensorial del Tequila.';

var burlingtonWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=burlington%2C+vermont';
var burlingtonDescribe = 'Vermont\'s largest and perhaps most cosmopolitan city, Burlington beckons with the perfect blend of old New England charm, arts, culture and nature. Located on the shores of Lake Champlain, between the Adirondack and Green Mountains, Burlington is one of those places you can\'t help but fall in love with. During the spring and summer, the streets come alive with festivals and outdoor concerts. The picnic benches, playground and bike paths of Leddy Park are filled with warm weather revelers, and opportunities to swim, fish or just kick back on the beach abound. In the fall, the Burlington Bike Path is bustling with leaf peepers who come to view the vibrant autumn colors. In winter, lace up your ice skates and head to the Paquette Arena or grab your skis and head to any of the nearby resorts. Church Street Marketplace, with its early 1900s architecture, great restaurants, live entertainment, one-of-a-kind shops and well-known stores, is the focal point of the downtown area. Anytime of the year is a good time for chocolate. Be sure to stop by Lake Champlain Chocolates for a tour and taste.';

var riodejaneiroWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=rio+de+janeiro%2C+brazil';
var riodejaneiroDescribe = 'With its plentiful beaches, dramatic mountains, and backdrop of samba and bossa nova rhythms, it\'s easy to fall in love with Rio de Janeiro. Made famous in song, Ipanema Beach is still the place to stroll, sunbathe, and be seen. The largest Art Deco statue in the world, Christ the Redeemer, beckons visitors to Corcovado Mountain. Rio’s annual Carnaval celebrations are bacchanalian extravaganzas of feasting, music, dance, and costumed revelry.';

var chichenitzaWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=chichen-itza%2C+mexico';
var chichenitzaDescribe = 'While the ruins of pyramids such as El Castillo and Kukulcan are the primary reason to visit Chichen Itza, they are hardly all that’s on offer here. Otherworldly bird-watching and stargazing experiences can be found within the Maya Jungle Reserve and in Hacienda Chichen\'s Bird Refuge. Daytrips run from both Merida and Cancun.';

var limaWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=lima%2C+peru';
var limaDescribe = 'Lima, founded by Francisco Pizarro in 1535, is a fascinating city and a treasure trove of history. Explore ancient Incan archeological sites, or stroll through the elegant cathedrals and opulent palaces dating from Spanish colonial times. Downtown Lima is crowded, but you\'ll enjoy exploring the city\'s neighborhoods—especially the beachfront areas, which have great shopping and dining and fabulous hotels.';

var sanfranciscoWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=san+francisco%2C+california';
var sanfranciscoDescribe = 'Every neighborhood in San Francisco has its own personality, from the hippie chic of the Upper Haight to the hipster grit of the Mission. The Marina district boasts trendy bistros and postcard-perfect views of the Golden Gate Bridge, while Noe Valley offers quaint and quiet boutiques. Wave hello to the sea lions at Pier 39, and sample local cheese and charcuterie at the Ferry Building. Sit in on a yoga session in Dolores Park or marvel at the Dutch Windmill across from Ocean Beach.';

var honoluluWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=honolulu%2C+hawaii';
var honoluluDescribe = 'The mere mention of Hawaii is enough to prompt visions of grass skirts and colorful cocktails with tiny umbrellas. While you will find some kitsch in Honolulu, you’ll also find art museums, bike paths, and some of the most beautiful scenery in the world. Popular Waikiki Beach has soft sands and great surf. For majestic Oahu views scramble to the top of Diamond Head – a 350-acre volcanic crater. Historic structures like Iolani Palace and Ali\'iolani Hale are worth a visit on a non-beach day.';

var victoriafallsWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=victoria+falls%2C+zimbabwe';
var victoriafallsDescribe = 'Rainbows are cool. But what trumps rainbows? Moonbows. If you visit Victoria Falls during a full moon, the light of the moon through the the waterfall spray produces a lunar rainbow, or moonbow. More of a daredevil? Then try what\’s been called the world’s best white-water rafting.';

var gizaWeather = 'https://www.wunderground.com/global/stations/62375.html';
var gizaDescribe = 'Spot a tourist in New York, and chances are you can’t be sure exactly why they’re in town. Broadway? Shopping? A quest to find the world’s best bagel? It’s anyone’s guess. At Giza, though, it’s pretty simple—travelers come here to see the Pyramids of Giza, one of the Seven Wonders of the World. (Editor\'s note: Our list was compiled before political unrest prompted many countries to issue travel warnings for Egypt. If you\'re currently planning a trip to Egypt, please consider the risks and monitor your government\'s travel alerts.)';

var baliWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=bali%2C+indonesia';
var baliDescribe = 'Bali is a living postcard, an Indonesian paradise that feels like a fantasy. Soak up the sun on a stretch of fine white sand, or commune with the tropical creatures as you dive along coral ridges or the colorful wreck of a WWII war ship. On shore, the lush jungle shelters stone temples and mischievous monkeys. The “artistic capital” of Ubud is the perfect place to see a cultural dance performance, take a batik or silver-smithing workshop, or invigorate your mind and body in a yoga class.';

var singaporeWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=singapore%2C+singapore';
var singaporeDescribe = 'The Singapore cityscape looks like it was ripped from the pages of a science fiction comic book. If you\’re hungry for a true Singapore experience, sample the myriad street foods or take a cultural cooking class. The Botanic Gardens and the Gardens By the Bay offer a slice of horticultural heaven, and the observation deck of the Sands SkyPark makes you feel like you’re high above the clouds. The banks and walkways along the Singapore River bustle with local activity.';

var rishikeshWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=rishikesh%2C+india';
var rishikeshDescribe = 'The holy city of Rishikesh, in the base of the Himalayas, holds deep cultural and spiritual significance for local Hindus. Sacred rivers and mountains set the scene for yoga and reflective hikes, and rafting here is an absolute must. The Beatles got in touch with their Eastern spiritual side here, writing several songs during a 1968 stint at a local ashram.';

var phuketWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=phuket%2C+thailand';
var phuketDescribe = 'Thailand\’s largest island is an international magnet for beach lovers and serious divers, who enthusiastically submerge themselves in the Andaman Sea. Blue lagoons and salmon sunsets make for a dream-like atmosphere, and indeed, a vacation here can feel a bit surreal. Watersports are the most popular activities, though once you’ve had enough sun there’s still plenty to explore at the island’s aquariums, gardens, and Buddhist temples.';

var hoianWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=hoi+an+vietnam';
var hoianDescribe = 'This city on the central Vietnamese coast is a well-preserved example of the important Southeast Asian trading port it was from the 15th-19th centuries. Already a common stop for backpackers, it is becoming better known to tourists. On the 14th day of each lunar month, the town trades its electric lights for traditional colored lanterns. Sights include the Japanese Covered Bridge and the Quan Cong Temple. Let the town’s expert tailors make you some bespoke clothing.';

var luangprabangWeather = 'https://www.wunderground.com/q/zmw:00000.937.48930';
var luangprabangDescribe = 'This UNESCO World Heritage Site is the former capital of Laos, and you\'ll see everything from golden-roofed temples to vestiges of colonial French architecture here. Buddhist monasteries abound in Luang Prabang, and early every morning, monks process through the streets collecting alms (their food for the day). If you want to watch or participate, though, ask your hotel for a brief etiquette lesson first—you have to distribute the food in a specific manner.';

var siemreapWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=siem+reap%2C+cambodia';
var siemreapDescribe = 'When the morning light washes over the overgrown temples and ruins of Angkor Wat, a simple Siem Reap sunrise becomes a profound event. The ancient structures are contained within one of the largest religious complexes in the world. The complex and the 12th century Angkor Thom royal city are considered the main reasons to visit Siem Reap. Get a lesson in national history at the Cambodian Cultural Village, and a lesson in bargaining at the Angkor Night Market, a bonanza of shopping stalls, food vendors, and bars.';

var baganWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=bagan%2C+myanmar';
var baganDescribe = 'Between the 9th and 13th centuries, Bagan (née Pagan), was the capital of the Kingdom of Pagan, once a tiny settlement that eventually gained power and, in doing so, united the neighboring territories to form Burma, present-day Myanmar. The 11th through mid-13th centuries were the height of the Kingdom of Pagan\'s prosperity, and it was during those 250 years that the then-10,000 stupas, temples, and pagodas were built. Today, just 2,000 remain, but their expanse is staggering. Bikes can be hired from every guesthouse for around K2,500, and visitors will find that on two wheels is the best way to get around. The stupas dot the sides of the long road that runs through Bagan, and the awe-inspiring larger temples are clustered across from Tharabar (née Tharbha) Gate, the only surviving section of Bagan\'s city wall. There are so many small stupas on either side of the road leading up to the larger temples that it\'s entirely possible to be completely alone and surrounded by hundreds of them. If your time in Myanmar is limited, skip Mandalay and head to Bagan, permeated by a laid-back, backpacker-style vibe.';

var cairnsWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=cairns%2C+australia';
var cairnsDescribe = 'Cairns is the perfect city for merry revelers, passionate divers and adrenaline junkies, offering booming nightlife and heart-pounding adventure amid a vibrant, tropical setting.  This friendly Queensland city of 130,000 is a gateway to the Great Barrier Reef, Daintree National Park, Cape Tribulation, Cooktown and the rest of Cape York Peninsula. Embark on an eco-adventure or take a dip in a lagoon pool before hitting the town to unwind and shake what you’ve got Down Under. ';

var queenstownWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=queenstown%2C+new+zealand';
var queenstownDescribe = 'Staggering beauty and heart-pumping thrills await in the resort town of Queenstown, which is also known for its Hobbits—much of the Lord of the Rings trilogy was filmed in the area. Outdoor enthusiasts flock to Queenstown for the kayaking, bungee jumping, jetboating, white-water rafting, hiking and skiing. More mild-mannered adventurers can take a quiet cruise through nearby Milford Sound, part of the Fjordland National Park World Heritage area, or sample South Island pinot noir from one of the region\'s 75 wineries.';

var chengduWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=chengdu%2C+china';
var chengduDescribe = 'Perched in a high mountain valley, Huanglong or Yellow Dragon National Park offers invigorating adventure options. The ambitious can trek to Lhasa, whitewater raft or embark on multi-day river journeys. Alternatively, a five-mile trot brings you to five terraced, temple pools glowing with stunning hues.';

var yongpyongWeather = 'https://www.wunderground.com/q/zmw:00000.144.47165';
var yongpyongDescribe = 'Yongpyong Ski Resort is a ski resort in South Korea, located in Daegwallyeong-myeon, Pyeongchang, Gangwon-do. In addition to skiing, the resort offers golf in the summer months. It is the largest ski and snowboard resort in Korea';

var kyotoWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=kyoto%2C+japan';
var kyotoDescribe = 'The shrines and temples of Kyoto offer a rare link between modern life in the city and its very ancient past. The Shimogamo Shrine dates to the 6th century and seems suspended in time, its serenity and spiritual power still palpable. Visit Fushimi Inari Shrine, then see the life-sized Thousand Armed Kannon statues of Sanjūsangen-dō. Enjoy traditional geisha performances, then savor a tranquil meal at a restaurant overlooking the Kamo River.';

var kualalumpurWeather = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=kuala+lumpur%2C+malaysia';
var kualalumpurDescribe = 'The cultural hub of Malaysia, Kuala Lumpur is visually defined by the iconic Petronas Twin Towers, which, at 88 stories high, are the tallest twin buildings in the world and a vision of modern architecture. On the flip side, the Sri Mahamariamman is the oldest Hindu temple in Malaysia, its façade a colorful totem pole of iconography. Shopping at the Central Market is a joyful experience that involves haggling, handicrafts, and happiness.';
