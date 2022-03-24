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

var introName = document.querySelector(".intro-name-span")
var introBrand = document.querySelector(".intro-brand-span")
var introOrigin = document.querySelector(".intro-origin-span")
var introVol = document.querySelector(".intro-vol-span")
var introChar = document.querySelector(".intro-char-span")

fetch(`/alcohol/get?no=${no}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(alcohol) {
      console.log(alcohol);
      introName.innerHTML = alcohol.name
      introBrand.innerHTML = alcohol.brand
      introOrigin.innerHTML = alcohol.origin
      introVol.innerHTML = alcohol.volume
      introChar.innerHTML = alcohol.characteristic

    });
