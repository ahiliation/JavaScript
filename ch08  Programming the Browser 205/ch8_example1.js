function geoSuccess(position) {
    var coords = position.coords;
    var latitude = coords.latitude;
    var longitude = coords.longitude;

    var message = "You're at " + latitude + ", " + longitude

    console.log(message);
}

function geoError(errorObj) {
    console.log(errorObj.message);
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
