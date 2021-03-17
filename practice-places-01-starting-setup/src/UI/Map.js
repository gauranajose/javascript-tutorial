export class Map {
  constructor(coordinates) {
    this.render(coordinates);
  }

  render(coordinates) {
    document.getElementById('map').innerHTML = '';
    const map = L.map('map').setView([coordinates.lat, coordinates.long], 16);
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2F1cmFuYWpvc2UiLCJhIjoiY2ttZGpzZnd6MmxsbDMwdzB3d2VteWdheCJ9.UdjOsxTTtTFFs-08lYvdpg',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token',
      }
    ).addTo(map);
    const marker = L.marker([coordinates.lat, coordinates.long]).addTo(map);
  }
}
