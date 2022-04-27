// 등록 버튼
let xAlcoholName = document.querySelector("input[name=alcoholName]")
let xAlcoholType = document.querySelector("select[name=alcoholTypeNo]")
let xAlcoholDegree = document.querySelector("input[name=degree]")
let xAlcoholBrand = document.querySelector("input[name=brand]")
let xAlcoholOrigin = document.querySelector("input[name=origin]")
let xAlcoholVolume = document.querySelector("input[name=volume]")
let xAlcoholChar = document.querySelector("textarea[name=characteristic]")

document.querySelector(".submit-add-btn").addEventListener("click", () => {

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

  let fd = new FormData(document.forms.namedItem("alcohol__form"))


  fetch("/alcohol/add", {
      method: "POST",
      body: fd
    })
    .then(response => {
      return response.json()
    })
    .then(result => {
      console.log(result);
      if (result.status == "success") {
        location.href = "/admin/alcohollist.html"
      } else {
        alert(result.data);
      }
    })


})



// 나가기 버튼
$(".submit-exit-btn").on("click", () => {
  location.href = "/admin/alcohollist.html";
})
