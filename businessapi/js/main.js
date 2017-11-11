function initMap(){
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv,{
		center: {lat: 40.707, lng: -74.005 },
		zoom: 18	
	});
	new google.maps.Marker({
		position: {lat: 40.707, lng: -74.006},
		title: "NYCDA",
		map: map
	});
	var marker_jerse_mikes = new google.maps.Marker({
		position: {lat: 40.706, lng: -74.007}, 
		title: "Jersey Mike's",
		map: map
	})
}