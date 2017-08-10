// TODO: Put your JS code in here
$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=berlin&key=AIzaSyDeg7-dCj3eBcqTGtYkDqJrsiJUF9u1KZk",
    success: function(data) {
      initMap(52.5200066, 13.404954)
    },
    error: function(jqXHR) {
        console.error(jqXHR.responseText);
      }
  })

  $('form').submit(function(e) {
    e.preventDefault();
    var address = $('input').val()
    console.log(address)
    $.ajax({
      type: "GET",
      url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDeg7-dCj3eBcqTGtYkDqJrsiJUF9u1KZk",
      success: function(data) {
        // console.log(data)
        var lat = data.results[0].geometry.location.lat
        var lng = data.results[0].geometry.location.lng
        console.log(lat)
        console.log(lng)
        initMap(lat, lng);
      },
      error: function(jqXHR) {
        console.error(jqXHR.responseText);
      }
    });
  });

  function initMap(lat, lng) {
        var uluru = {lat: lat, lng: lng};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
});





// AIzaSyDeg7-dCj3eBcqTGtYkDqJrsiJUF9u1KZk

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
