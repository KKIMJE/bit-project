var arr = location.href.split("?");
// console.log(arr);

var qs = arr[1];
// console.log(qs);

var params = new URLSearchParams(qs);
var no = params.get("no");

console.log(no);

if (no == null) {
  alert("error");
  throw "파라미터 오류!";
}


// var introName = document.querySelector(".intro-name-span")
// var introBrand = document.querySelector(".intro-brand-span")

// var storeListDiv = document.querySelector(".storelist-div")
// var storeName = document.querySelector(".store-name")
// var storeStatus = document.querySelector(".store-status")

fetch(`/store/get?no=${no}`)
  .then(function(response) {
    return response.json() 
  }).then(function(store) {
    console.log(store);
    mapMarker(store)
    storeTextBox(store)
    // detailImg.src = alcohol.img
    // introName.innerHTML = alcohol.alcoholName
    // introBrand.innerHTML = alcohol.brand
    // introOrigin.innerHTML = alcohol.origin
    // introVol.innerHTML = alcohol.volume
    // introDegree.innerHTML = alcohol.degree
    // introChar.innerHTML = alcohol.characteristic
    // storeList.innerHTML = alcohol.alcoholName
});

// Map 생성
var container = document.getElementById('map');
var options = {center: new kakao.maps.LatLng(33.450701, 126.570667), level: 3};
var map = new kakao.maps.Map(container, options);
var geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체를 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 단일 Map마커생성
function mapMarker(store) {
  // 마커 생성
  let address = store.address
  let name = store.storeName

  console.log(address, name)

  // 주소로 좌표를 검색합니다
  geocoder.addressSearch(address, function(result, status) {

    // 정상적으로 검색이 완료됐으면
    if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 커스텀 오버레이를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
            position: coords,
            content: `<div id="mapInfo"><span>${name}</span></div>`
        });

        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map);

        // 마지막으로 찍은 마커로 중심을 이동한다.
        map.setCenter(coords);
    } else {
        console.log(`${name}, ${address} 주소검색 실패`)
    }
  });
  
}
// 영업여부
function printOper(oper) {
  let status = " ";
  if (oper == 1) {
    status = "영업중"
  } else {
    status = "휴일"
  }
  return status;
}

function storeTextBox (store) {
  let storeName = document.querySelector(".storeName")


  storeName.innerHTML = store.storeName
}
