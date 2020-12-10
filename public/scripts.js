/*
var lat: =
var long: =
*/
$(document).ready(function () {
  //  ================================= Omars Buttons ======================================
  // Omars Restaurant Button
  const OmarRestaurantButton = document.getElementById('OmarRestaurantButton')
  console.log(OmarRestaurantButton)
  OmarRestaurantButton.addEventListener('click', function () {
    console.log("Omar's Restaurant Button Clicked!")
    alert("Hi you clicked Omar's Restaurant Button!")
    map.setCenter(new google.maps.LatLng(41.1034086, -73.550749))
    // Set to Laylas Falafael
    map.setZoom(17)
  })

  // Omars Park Button
  const OmarParkButton = document.getElementById('OmarParkButton')
  console.log(OmarParkButton)
  OmarParkButton.addEventListener('click', function () {
    console.log("Omar's Park Button Clicked Button Clicked")
    alert("Hi you clicked Omar's Park Button!")
    map.setCenter(new google.maps.LatLng(41.0382745, -73.5464977))
    // Set to Harbour Point
    map.setZoom(15)
  })

  // Omars Store Button
  const OmarStoreButton = document.getElementById('OmarStoreButton')
  console.log(OmarStoreButton)
  OmarStoreButton.addEventListener('click', function () {
    console.log("Omar's Store Button Clicked!")
    alert("Hi you clicked Omar's Store Button!")
    map.setCenter(new google.maps.LatLng(41.0996123, -73.4387004))
    // Set to Best Buy
    map.setZoom(15)
  })

  //  ================================ Wayils Buttons ======================================
  // Wayils Restaurants Button
  const WayilRestaurantButton = document.getElementById('WayilRestaurantButton')
  console.log(WayilRestaurantButton)
  WayilRestaurantButton.addEventListener('click', function () {
    console.log("Wayil's Restaraunt Button Clicked")
    alert("Hi you clicked Wayil's Restaurants Button!")
    map.setCenter(new google.maps.LatLng(-34.397, 150.644))
    map.setZoom(15)
  })

  // Wayils Parks Button
  const WayilParkButton = document.getElementById('WayilParkButton')
  console.log(WayilParkButton)
  WayilParkButton.addEventListener('click', function () {
    console.log("Wayil's Parks Button Clicked")
    alert("Hi you clicked Wayil's Parks Button!")
    map.setCenter(new google.maps.LatLng(-34.397, 150.644))
    map.setZoom(15)
  })

  // Wayils Stores Button
  const WayilStoreButton = document.getElementById('WayilStoreButton')
  console.log(WayilStoreButton)
  WayilStoreButton.addEventListener('click', function () {
    console.log('Wayil Store Button Clicked')
    alert("Hi you clicked Wayil's Stores Button!")
    map.setCenter(new google.maps.LatLng(41.1058578, -73.4211049))
    // Set to The Sono Collection
    map.setZoom(17)
  })

  //  =============================== Datesta's Buttons ====================================
  // Datesta's Restarants Button
  const DatestaRestaurantButton = document.getElementById('DatestaRestaurantButton')
  console.log(DatestaRestaurantButton)
  DatestaRestaurantButton.addEventListener('click', function () {
    console.log("Datesta's Restaurants Button Clicked")
    alert("Hi you clicked Datesta's Restaraunts Button!")
    map.setCenter(new google.maps.LatLng(41.2010458, -73.1859727))
    // Set to Tomlinson's Restaurant
    map.setZoom(16)
  })

  // Datesta's Parks Button
  const DatestaParkButton = document.getElementById('DatestaParkButton')
  console.log(DatestaParkButton)
  DatestaParkButton.addEventListener('click', function () {
    console.log("Datesta's Parks Button Clicked")
    alert("Hi you clicked Datesta's Parks Button!")
    map.setCenter(new google.maps.LatLng(41.2112394, -73.1861488))
    // Beardsly Park
    map.setZoom(17)
  })

  // Datesta's Stores Button
  const DatestaStoreButton = document.getElementById('DatestaStoreButton')
  console.log(DatestaStoreButton)
  DatestaStoreButton.addEventListener('click', function () {
    console.log("Datesta's Stores Button Clicked")
    alert("Hi you clicked Datesta's Stores Button!")
    map.setCenter(new google.maps.LatLng(41.1953766, -73.1444237))
    // Walgreens
    map.setZoom(15)
  })
})

// Saved Places Please don't delete.

// Map zoom 16,15,16 Resaurants Parks Stores (rand-o-d)
// map.setCenter(new google.maps.LatLng(41.218494, -73.2170345)); //Set to Bow Tie Cinemas Theature
// map.setCenter(new google.maps.LatLng(41.1589855, -73.16788859)); //Set to Island near Bridgeport
// map.setCenter(new google.maps.LatLng(41.230046, -73.187542)); //Set to Restaurant Shopping Center
