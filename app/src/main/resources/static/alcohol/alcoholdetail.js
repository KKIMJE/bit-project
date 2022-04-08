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
        console.log(alcohol.stores[i].storeName);
        console.log(alcohol.stores[i].lat);
        console.log(alcohol.stores[i].lng);
      }
      for (let i = 0; i < alcohol.storeImgs.length; i++) {
        console.log(alcohol.storeImgs[i].storeImg);
      }


        // console.log(alcohol.stores[0].storeName);



    });


















    //
