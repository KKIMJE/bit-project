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
  .then(function(result) {
    console.log(result);
    let alcohol = result.data

    introName.innerHTML = alcohol.alcoholName
    introBrand.innerHTML = alcohol.brand
    introOrigin.innerHTML = alcohol.origin
    introVol.innerHTML = alcohol.volume
    introDegree.innerHTML = alcohol.degree
    introChar.innerHTML = alcohol.characteristic
    storeList.innerHTML = alcohol.alcoholName

    if (alcohol.img != null) {

      detailImg.src = "/alcohol/photo?filename=" + alcohol.img
    }

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
