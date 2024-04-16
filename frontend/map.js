var appMap;
var latitude;
var longitude;

function initialMap() {
  // กำหนดตำแหน่งเริ่มต้นของแผนที่ Santa Rosa Beach
  var santaRosaBeachData = { lat: 30.39728467194934, lng: -86.2286622307958 };
  var santaRosaBeachOptions = { zoom: 10, center: santaRosaBeachData };
  appMap = new google.maps.Map(document.getElementById("mapDisplay"), santaRosaBeachOptions);

  // ปักหมุด Santa Rosa Beach บนแผนที่
  var santaMarkerOptions = {
    position: { lat: 30.379117618337986, lng: -86.27673117730546 },
    title: "Santa Rosa Beach",
  };
  var santaMarker = new google.maps.Marker(santaMarkerOptions);
  santaMarker.setMap(appMap);

  // กำหนดตำแหน่งเริ่มต้นของแผนที่ Williamsburg, Virginia
  var williamsburgData = { lat: 37.265520987139084, lng: -76.7104663494262 };
  var williamsburgOptions = { zoom: 10, center: williamsburgData };
  appMap = new google.maps.Map(document.getElementById("mapDisplays"), williamsburgOptions);

  // ปักหมุด Williamsburg, Virginia บนแผนที่
  var williamsburgMarkerOptions = {
    position: { lat: 37.290366471808184, lng: -76.7233410008799 },
    title: "Williamsburg, Virginia",
  };
  var williamsburgMarker = new google.maps.Marker(williamsburgMarkerOptions);
  williamsburgMarker.setMap(appMap);
}
