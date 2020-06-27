let map = null;

function initmap(){
    let location = new Object();
    navigator.geolocation.getCurrentPosition(function(pos){
        location.lat = pos.coords.latitude;
        location.long = pos.coords.longitude;
        map = new google.maps.Map(document.getElementById('map'),{
            center: {lat: location.lat, lng: location.long },
            zoom: 15
        });
        getRestaurants(location);
    });
}

function getRestaurants(location) {
    var pyrmont = new google.maps.LatLng(location.lat,location.long);
    var request = {
        location: pyrmont,
        radius: '1500',
        type: ['restaurant']
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function callback (results, status) {
    console.log(results)
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i=0; i > results.length; i++)
        var place = results[i];
        var price = createPrice(place.price_level);
        let content = `<h3>${place.name}</h3>
        <h4>${place.vicinity}</h4>
        <p>Price: ${price}<br/> 
        Rating: ${place.rating}`;

        var marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name
        });
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });

        bindInfoWindow(marker, map, infoWindow, content);
        marker.setMap(map);
    }
    }
function bindInfoWindow(marker, map, infoWindow, html) {
    marker.addListner('click', function(){
        infoWindow.setContent(html);
        infoWindow.open(map, this);
    });
    
}
function createPrice(level){
    if(level != "" && level != null){
        let out = "";
        for (var x = 0; x < level; x++){
            out += "$";
        }
        return out;
    } else {
        return "?";
    }
}
initmap();