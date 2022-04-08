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


    for (let i = 0; i < alcohol.stores.length; i++) {
      if (alcohol.stores[i].status != true) {
        alcohol.stores[i].status = "운영중"
      } else {
        alcohol.stores[i].status = "영업종료"
      }

      let storeItemDiv = `
      <div class="store-item-div">
        <a href="#">
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

  });









//
