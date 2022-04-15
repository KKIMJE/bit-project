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

// var detailImg = document.getElementById("alc-img");
// var introName = document.querySelector(".intro-name-span")
// var introBrand = document.querySelector(".intro-brand-span")

// var storeListDiv = document.querySelector(".storelist-div")
// var storeName = document.querySelector(".store-name")
// var storeStatus = document.querySelector(".store-status")

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
// var zoomControl = new kakao.maps.ZoomControl();
// map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

fetch(`/store/get?no=${no}`)
  .then(function(response) {
    return response.json() 
  }).then(function(store) {
    console.log(store);
    // detailImg.src = alcohol.img
    // introName.innerHTML = alcohol.alcoholName
    // introBrand.innerHTML = alcohol.brand
    // introOrigin.innerHTML = alcohol.origin
    // introVol.innerHTML = alcohol.volume
    // introDegree.innerHTML = alcohol.degree
    // introChar.innerHTML = alcohol.characteristic
    // storeList.innerHTML = alcohol.alcoholName
});

