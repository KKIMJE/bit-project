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





fetch(`/alcohol/get?no=${no}`)
.then(response => {
  return response.json()
})
.then(result => {
  let xAlcoholName = $("input[name=alcoholName]")
  let xAlcoholType = $("select[name=alcoholTypeNo]")
  let xAlcoholDegree = $("input[name=degree]")
  let xAlcoholBrand = $("input[name=brand]")
  let xAlcoholOrigin = $("input[name=origin]")
  let xAlcoholVolume = $("input[name=volume]")
  let xAlcoholChar = $("textarea[name=characteristic]")
  // console.log(alcohol);
  let alcohol = result.data;
  console.log(alcohol.alcoholName);

  xAlcoholName.value = alcohol.alcoholName;
  // xAlcoholType.val() = alcohol.alcoholTypeNo;
  // xAlcoholDegree.val() = alcohol.degree;
  // xAlcoholBrand.val() = alcohol.brand;
  // xAlcoholOrigin.val() = alcohol.origin;
  // xAlcoholVolume.val() = alcohol.volume;
  // xAlcoholChar.val() = alcohol.characteristic;

})

//
//
// $(".submit-add-btn").on("click", () => {
//   // let xAlcoholImg = $("input[name=img]")
//
//   if (xAlcoholName == "" ||
//     xAlcoholType == "" ||
//     xAlcoholDegree == "" ||
//     xAlcoholBrand == "" ||
//     xAlcoholOrigin == "" ||
//     xAlcoholVolume == "" ||
//     xAlcoholChar == "") {
//     alert("필수 입력 항목이 비어있습니다.")
//     return;
//   }
//
//   let fd = new FormData(document.forms.namedItem("alcohol__form"))
//
//
//   fetch("/alcohol/add", {
//       method: "POST",
//       body: fd
//     })
//     .then(response => {
//       return response.json()
//     })
//     .then(result => {
//       console.log(result);
//       window.location.href = "/admin/alcohol.html"
//     })
//
// })
//
//
//
// 나가기 버튼
$(".submit-exit-btn").on("click", () => {
  location.href = "/admin/member.html";
})
