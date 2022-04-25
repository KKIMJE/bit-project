// 등록 버튼
document.querySelector(".submit-add-btn").addEventListener("click", () => {
  let xAlcoholName = document.querySelector("input[name=alcoholName]").value
  let xAlcoholType = document.querySelector("select[name=alcoholTypeNo]").value
  let xAlcoholDegree = document.querySelector("input[name=degree]").value
  let xAlcoholBrand = document.querySelector("input[name=brand]").value
  let xAlcoholOrigin = document.querySelector("input[name=origin]").value
  let xAlcoholVolume = document.querySelector("input[name=volume]").value
  let xAlcoholChar = document.querySelector("textarea[name=characteristic]").value
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
