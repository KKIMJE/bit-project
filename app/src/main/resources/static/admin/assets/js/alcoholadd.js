// 등록 버튼
$(".submit-add-btn").on("click", () => {
  let xAlcoholName = $("input[name=alcoholName]").val()
  let xAlcoholType = $("select[name=alcoholTypeNo]").val()
  let xAlcoholDegree = $("input[name=degree]").val()
  let xAlcoholBrand = $("input[name=brand]").val()
  let xAlcoholOrigin = $("input[name=origin]").val()
  let xAlcoholVolume = $("input[name=volume]").val()
  let xAlcoholChar = $("textarea[name=characteristic]").val()
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
      window.location.href = "/admin/alcohollist.html"
    })

})



// 나가기 버튼
$(".submit-exit-btn").on("click", () => {
  location.href = "/admin/alcohollist.html";
})
