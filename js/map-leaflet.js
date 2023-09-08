// Importe a biblioteca Leaflet.heat
import "leaflet.heat";

// Crie um objeto de dados que contém as localizações e valores dos pontos
const data = [
  [51.5, -0.09, 0.5],
  [51.51, -0.1, 1],
  [51.49, -0.05, 2],
  // Adicione mais pontos aqui, se necessário
];

// Crie um mapa Leaflet normal
const map = L.map("map").setView([51.505, -0.09], 13);

// Adicione uma camada de mapa ao mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Map data &copy; OpenStreetMap contributors",
  maxZoom: 18,
}).addTo(map);

// Crie uma instância do objeto HeatLayer da biblioteca Leaflet.heat
const heatLayer = L.heatLayer(data, { radius: 25 });

// Adicione a camada de calor ao mapa
heatLayer.addTo(map);


