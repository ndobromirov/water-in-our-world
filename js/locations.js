
// Have the locations generated for now...
function getLocations() {
  // Have locations hard-coded in the file here.
  var locations = [
    {
      latitude: 51,
      longitude: 2.2,
      title: 'Manually added title...',
      description: 'Text to show on the pop-up...',
      images: [
        'http://via.placeholder.com/1200x300'
      ]
    },{
      latitude: 51,
      longitude: 2.4,
      title: 'Manually added title 2...',
      description: 'Text to show on the pop-up 2...',
      images: [
        'http://via.placeholder.com/1200x300'
      ]
    }
  ];

  // Comment this out or remove it once the list of locations is in.
  for (var i = 0; i < 20; ++i) {
    locations.push({
      latitude: 50 + 0.1 * i,
      longitude: 2 + 0.1 * i,
      title: 'Hello I am titile ' + i,
      description: 'Body text ' + i,
      images: [
        'http://via.placeholder.com/1200x300'
      ]
    });
    // Remove up o here...
  }
  
  return locations;
}

function renderLoaction(location) {
  var title = "<h2>" + location.title + "</h2>";
  var description = "<div class=\"location-content\">" + location.description + "</div>";
  var images = '';
  for (var i = 0; i < location.images.length; ++i) {
    images += '<img class="carousel-image" src="' + location.images[i] + '" alt="" />';
  }
 
  var rendered = ""
    + "<div class=\"wow-location\">"
    +   title 
    +   description
    +   images
    + "</div>";
  
  return rendered;
}
