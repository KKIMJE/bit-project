var arr = location.href.split("?");
console.log(arr);

var qs = arr[1];
console.log(qs);

var params = new URLSearchParams(qs);
var no = params.get("no");

console.log(no);

if (no == null) {
  alert("error");
  throw "파라미터 오류!";
}
// var detailImg = document.querySelector("alc-img")
var detailImg = document.getElementById("alc-img");
var introName = document.querySelector(".intro-name-span")
var introBrand = document.querySelector(".intro-brand-span")
var introOrigin = document.querySelector(".intro-origin-span")
var introVol = document.querySelector(".intro-vol-span")
var introDegree = document.querySelector(".intro-degree-span")
var introChar = document.querySelector(".intro-char-span")
var storeList = document.querySelector(".storelist-title-span")
var storeListDiv = document.querySelector(".storelist-div")
// var storeName = document.querySelector(".store-name")
// var storeStatus = document.querySelector(".store-status")

const markerArr = []
// var overlay

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    // 지도의 중심좌표
    center: new kakao.maps.LatLng(37.500723072486, 127.03680544372),
    level: 3 // 지도의 확대 레벨
  };
// 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);



// 지도를 클릭한 위치에 표출할 마커입니다
var marker = new kakao.maps.Marker({
    // 지도 중심좌표에 마커를 생성합니다
    position: map.getCenter()
});

marker.setMap(map);

// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {


  // 클릭한 위도, 경도 정보를 가져옵니다
  var latlng = mouseEvent.latLng;

  // 마커 위치를 클릭한 위치로 옮깁니다
  marker.setPosition(latlng);

});


// HTML5의 geolocation으로 사용할 수 있는지 확인합니다
if (navigator.geolocation) {

    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {

        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도

        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);

      });

} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
        message = 'geolocation을 사용할수 없어요..'

    displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition
    });

    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });

    // 인포윈도우를 마커위에 표시합니다
    infowindow.open(map, marker);

    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);
}





function showMarkers(alcohol) {

  // 기존 마커들은 지워야 한다.
  for (let i = 0; i < markerArr.length; i++) {
    markerArr[i].setMap(null)
  }

  for (let i = 0; i < alcohol.stores.length; i++) {
    const store = alcohol.stores[i]
    const latLng = new kakao.maps.LatLng(store.lat, store.lng)
    const marker = new kakao.maps.Marker({
      map: map,
      position: latLng
    })
    let content =`
    <div class="wrap">
        <div class="info">
            <div class="title">
                ${alcohol.stores[i].storeName}
            </div>
            <div class="body">
                <div class="desc">
                    <div class="marker-store-status">${alcohol.stores[i].status}</div>
                    <div class="marker-store-score">⭐⭐⭐⭐⭐</div>
                </div>
           </div>
        </div>
    </div>`

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition()
    });

    markerArr.push(marker);
    // overlayArr.push(overlay);
  } // end for
}


fetch(`/alcohol/get?no=${no}`)
  .then(function(response) {
    return response.json();

  })
  .then(function(alcohol) {
    console.log(alcohol);
    detailImg.src = alcohol.img
    introName.innerHTML = alcohol.alcoholName
    introBrand.innerHTML = alcohol.brand
    introOrigin.innerHTML = alcohol.origin
    introVol.innerHTML = alcohol.volume
    introDegree.innerHTML = alcohol.degree
    introChar.innerHTML = alcohol.characteristic
    storeList.innerHTML = alcohol.alcoholName

    if (alcohol.stores.length == 0) {
      let tmpDiv = `
      <div class="tmp-div">이 주류를 판매하는 술집이 없습니다.</div>
      `
      storeListDiv.innerHTML = tmpDiv
    }

    for (let i = 0; i < alcohol.stores.length; i++) {

      if (alcohol.stores[i].status == true) {
        alcohol.stores[i].status = "운영중"
      } else {
        alcohol.stores[i].status = "영업종료"
      }

      let storeItemDiv = `
      <div class="store-item-div">
        <a href="/store/storeDetail.html?no=${alcohol.stores[i].storeNo}">
          <img class="store-img" src="${alcohol.storeImgs[i].storeImg}">
          <div class="item-div">
            <span class="store-name">${alcohol.stores[i].storeName}</span>
          </div>
          <span class="store-score">${alcohol.stores[i].evaluationScore}</span>
          <span class="store-status">${alcohol.stores[i].status}</span>
        </a>
      </div>
      `
      storeListDiv.innerHTML += storeItemDiv

    }
    // 마커표시
    showMarkers(alcohol);

  });


















//
