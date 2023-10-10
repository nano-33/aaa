var Latitude = undefined;//緯度
var Longitude = undefined;//経度

// 初期処理
function getMapLocation() {
    navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError, { enableHighAccuracy: true });
}
// getMapLocation()での位置情報の取得に成功したら呼ばれる
var onMapSuccess = function (position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    getMap(Latitude, Longitude);
}

// 取得した位置情報をもとにMapを生成する
function getMap(latitude, longitude) {
    var latLong = new google.maps.LatLng(latitude, longitude);//位置情報の設定
    var mapOptions = {
        center: latLong,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP//Mapの表示形式。この場合通常の道路地図になる
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: latLong
    });
    marker.setMap(map);
}
// 位置情報の取得に失敗した時に呼ばれる
function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

