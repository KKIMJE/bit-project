let xTitle = document.querySelector("input[name=title]")
let xContents = document.querySelector("textarea[name=contents]")


document.querySelector(".x-add-btn").addEventListener("click", () => {
  if (xTitle == "" || xContents == "") {
    alert("필수 입력 항목이 비어있습니다.")
    return
  }

  let fd = new FormData(document.forms.namedItem("notice-form"))

  console.log(fd);

  fetch("/notice/add", {
    method: "POST",
    body: new URLSearchParams(fd)
  })
  .then(response => {
    return response.json()
  })
  .then(result => {
    console.log(result);
    if (result.status == "success") {
      alert("등록이 완료되었습니다.")
      location.href = "/admin/notice.html"
    } else {
      alert(result.data);
    }
  })


})
