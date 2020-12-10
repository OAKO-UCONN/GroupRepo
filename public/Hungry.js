// Naming the 3 foundations for the app. The map itself,
// the circle to specify search location area and the markets
// that will include additional data.
let map = null
let circle
let markers = []

// Next we call our create the map details being its location and zoom level.
function initmap () {
  const location = new Object()
  navigator.geolocation.getCurrentPosition(function (pos) {
    location.lat = pos.coords.latitude
    location.long = pos.coords.longitude
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: location.lat, lng: location.long },
      zoom: 13
    })
    // Next is the drawing a circle ability and circle style.
    const drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.CIRCLE,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['circle']
      },
      circleOptions: {
        fillColor: '#ffff00',
        fillOpacity: 0.2,
        strokeWeight: 5,
        strokeOpacity: 0.4,
        clickable: false,
        editable: true,
        zIndex: 1
      }
    })
    drawingManager.setMap(map)
    google.maps.event.addListener(drawingManager, 'circlecomplete', onCircleComplete)
    infowindow = new google.maps.InfoWindow()
    const service = new google.maps.places.PlacesService(map)

    function onCircleComplete (shape) {
      if (shape == null || (!(shape instanceof google.maps.Circle))) return
      circle = shape
      google.maps.event.addListener(circle, 'radius_changed', function () {
        performSearch(circle)
      })
      google.maps.event.addListener(circle, 'center_changed', function () {
        performSearch(circle)
      })
      performSearch(circle)
    }
    // Here we create markers for each searched resturants within 65K meters(40 Miles) of our location
    // once we have created a circle.
    // TO DO add any user specficed location or keyword type.
    // TO DO full distance search (Only about 20 max results appear)
    function performSearch (shape) {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null)
      }
      markers = []
      const currentCity = new google.maps.LatLng(location.lat, location.long)
      const request = {
        location: currentCity,
        radius: 65000,
        keyword: ['restaurant']
      }
      service.nearbySearch(request, callback)
    }

    function callback (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i])
        }
      }
    }

    function createMarker (place) {
      const placeLoc = place.geometry.location
      if (google.maps.geometry.spherical.computeDistanceBetween(placeLoc, circle.getCenter()) > circle.getRadius())
      // if marker outside circle, don't add it to the map
      { return }

      const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name
      })
      // This event listener allows us to have location information in a clickable window.
      google.maps.event.addListener(marker, 'click', function () {
        const that = this
        service.getDetails({
          placeId: place.place_id
        }, function (result, status) {
          infowindow.setContent(result.name + '<br>' + result.formatted_address + '<br>' + result.rating)
          infowindow.open(map, that)
        })
      })
      markers.push(marker)
    }
  })
}
// Call the function.
initmap()
