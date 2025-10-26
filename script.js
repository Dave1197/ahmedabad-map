const map = L.map('map').setView([23.0308, 72.5850], 12);

// Base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// General sites (blue)
const generalSites = [
  { name: 'Sabarmati Ashram', lat: 23.0606, lng: 72.5807, desc: 'Historic ashram of Mahatma Gandhi.' },
  { name: 'Jama Masjid', lat: 23.0245, lng: 72.5876, desc: '15th-century Indo-Islamic mosque.' },
  { name: 'Teen Darwaja', lat: 23.0247, lng: 72.5851, desc: 'Iconic triple gateway, built 1411 AD.' },
  { name: 'Rani no Hajiro', lat: 23.0249, lng: 72.5847, desc: 'Queens’ tombs with local bazaar.' },
  { name: 'Manek Chowk', lat: 23.0256, lng: 72.5873, desc: 'Lively night food market and historic square.' },
  { name: 'Jhulta Minar (Shaking Minarets)', lat: 23.0139, lng: 72.5850, desc: 'Mysterial minarets that vibrate when shaken.' },
  { name: 'Lalbhai Dalpatbhai Museum', lat: 23.0404, lng: 72.5464, desc: 'Indian art and ancient manuscripts.' },
  { name: 'Parimal Garden', lat: 23.0248, lng: 72.5599, desc: 'Landscaped park with fountains & walkway.' },
  { name: 'Sidi Saiyyed Mosque', lat: 23.0257, lng: 72.5872, desc: 'Known for the iconic stone latticework (Jali).' },
  { name: 'Adalaj Stepwell', lat: 23.1706, lng: 72.5815, desc: '5-story ornate stepwell (north of city).' },
  { name: 'Sarkhej Roza', lat: 22.9948, lng: 72.4999, desc: 'Islamic architectural complex with tombs & mosque.' },
  { name: 'Kankaria Lake', lat: 23.0070, lng: 72.6039, desc: 'Historical lake with zoo and amusement park.' },
  { name: 'Thol Bird Sanctuary', lat: 23.1422, lng: 72.4782, desc: 'Wetland home to flamingos and migratory birds (NW of city).' },
  { name: 'Modhera Sun Temple', lat: 23.5937, lng: 72.1406, desc: '11th-century sun temple near Mehsana (outstation).' }
];

// Food spots (orange)
const foodSpots = [
  { name: 'Manek Chowk', lat: 23.0256, lng: 72.5873, desc: 'Famous late night food market.' },
  { name: 'Das Khaman', lat: 23.0335, lng: 72.5668, desc: 'Iconic shop for Khaman Dhokla snacks.' },
  { name: 'Sharebajar', lat: 23.0324, lng: 72.5696, desc: 'Popular spot for street food stalls.' },
  { name: 'Law Garden Food Court', lat: 23.0334, lng: 72.5592, desc: 'Street food hub for chaat, sandwiches, more.' },
  { name: 'Sindhu Bhavan Road', lat: 23.0390, lng: 72.4974, desc: 'Trendy area for restaurants and cafes.' },
  { name: 'Rajwadu', lat: 23.0041, lng: 72.5114, desc: 'Rustic village-themed Gujarati/Rajasthani dining.' },
  { name: 'Sasuji/Govardhan Thal', lat: 23.0267, lng: 72.5583, desc: 'Traditional Gujarati thali restaurants.' },
  { name: 'Vishalla Restaurant', lat: 22.9916, lng: 72.5176, desc: 'Ethnic open-air village restaurant.' },
  { name: 'Dad Khaman', lat: 23.0492, lng: 72.6024, desc: 'Another very popular local dhokla shop.' },
  { name: 'Kasturi Dining Hall', lat: 23.0341, lng: 72.5737, desc: 'Known for tasty and affordable Gujarati thali.' }
];

// Special places: IIM and railway stations (green)
const specialPlaces = [
  { name: 'IIM Ahmedabad', lat: 23.0303, lng: 72.5464, desc: '🏫 Premier business school of India.' },
  { name: 'Ahmedabad Junction Rly Stn', lat: 23.0265, lng: 72.6016, desc: '🚆 Main railway station for city.' },
  { name: 'Sabarmati Junction Rly Stn', lat: 23.0683, lng: 72.5876, desc: '🚆 Junction for northbound trains.' }
];

// Blue icon (general)
const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
});
// Orange icon (food)
const orangeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
});
// Green icon (special/railways/IIM)
const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
});

// Show general sites (blue pins)
generalSites.forEach(p => {
  L.marker([p.lat, p.lng], {icon: blueIcon})
    .addTo(map)
    .bindPopup('<b>' + p.name + '</b><br>' + p.desc);
});
// Food (orange pins)
foodSpots.forEach(p => {
  L.marker([p.lat, p.lng], {icon: orangeIcon})
    .addTo(map)
    .bindPopup('<b>' + p.name + '</b><br>' + p.desc);
});
// Special (green pins, with symbols in popup)
specialPlaces.forEach(p => {
  L.marker([p.lat, p.lng], {icon: greenIcon})
    .addTo(map)
    .bindPopup('<b>' + p.name + '</b><br>' + p.desc);
});