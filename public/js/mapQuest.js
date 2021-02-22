function initMap() {
	// add your code here
	L.mapquest.key = 'HUVcE6kpq4hIFkEThOGFwQHodWNaSiWC';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	  });

	// Add a marker to the map
	L.marker([32.878626, -117.235895]).addTo(map);

}