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
let xAlcoholNo = document.querySelector("input[name=alcoholDetailNo]");
let xAlcoholName = document.querySelector("input[name=alcoholName]");
let xAlcoholType = document.querySelector("select[name=alcoholTypeNo]")
let xAlcoholDegree = document.querySelector("input[name=degree]")
let xAlcoholBrand = document.querySelector("input[name=brand]")
let xAlcoholOrigin = document.querySelector("input[name=origin]")
let xAlcoholVolume = document.querySelector("input[name=volume]")
let xAlcoholChar = document.querySelector("textarea[name=characteristic]")
let xAlcoholFile = document.querySelector("input[name=file]")

fetch(`/alcohol/get?no=${no}`)
.then(response => {
  return response.json()
})
.then(result => {
  console.log(result);
  let alcohol = result.data;


  xAlcoholNo.value = alcohol.alcoholDetailNo;
  xAlcoholName.value = alcohol.alcoholName;
  xAlcoholType.value = alcohol.alcoholTypeNo;
  xAlcoholDegree.value = alcohol.degree;
  xAlcoholBrand.value = alcohol.brand;
  xAlcoholOrigin.value = alcohol.origin;
  xAlcoholVolume.value = alcohol.volume;
  xAlcoholChar.value = alcohol.characteristic;


})



document.querySelector(".submit-update-btn").addEventListener("click", () => {
  // let xAlcoholImg = $("input[name=img]")

  if (xAlcoholName == "" ||
    xAlcoholType == "" ||
    xAlcoholDegree == "" ||
    xAlcoholBrand == "" ||
    xAlcoholOrigin == "" ||
    xAlcoholVolume == "" ||
    xAlcoholChar == "") {
    alert("필수 입력 항목이 비어있습니다.")
    return;
  }



  let fd = new FormData(document.forms.namedItem("update__form"))


  fetch("/alcohol/update", {
      method: "POST",
      body: fd
    })
    .then(response => {
       return response.json()
    })
    .then(result => {
      if (result.status == "success") {
        alert("데이터 수정 성공")
        location.href = "/admin/alcohollist.html";
      } else {
        window.alert("게시글 변경 실패!");
        console.log(result.data);
      }
    })

})



// 나가기 버튼
$(".submit-exit-btn").on("click", () => {
  location.href = "/admin/alcohollist.html";
})
