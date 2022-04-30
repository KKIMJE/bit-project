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

let repDetailDiv = document.querySelector(".notice-detail-container")


fetch(`/notice/get?no=${no}`)
  .then(response => {
    return response.json()
  })
  .then(result => {
    if (result.status == "success") {
      let notice = result.data
      console.log(notice);
      let repData = `
    <div class="notice-detail">
    <table id="notice-detail-table">
    <tr>
    <td>${notice.noticeNo}</td>
    <td style="text-align:left;">${notice.title}</td>
    <td style="text-align:left;">${new Date(notice.regDate).toLocaleString()}</td>
    <td>${notice.viewCount}</td>
    </tr>
    </table>
    <textarea readonly disabled>${notice.contents}</textarea>
    <div class="notice-detail-btn">
    <button class="x-delete-btn" type="button" value="${notice.noticeNo}">삭제하기</button>
    <button type="button" onclick="location.href='notice.html'">나가기</button>
    </div>
    </div>
`
      repDetailDiv.innerHTML = repData

      $(".x-delete-btn").on("click", (e) => {
        console.log(e.target.value);
        if (window.confirm("정말 삭제하시겠습니까?")) {
          fetch(`/notice/delete?no=${e.target.value}`)
            .then(response => {
              return response.json()
            })
            .then(result => {
              if (result.status == "success") {
                alert("데이터 삭제 완료하였습니다.")
                location.href = "/admin/notice.html";
              } else {
                window.alert("데이터 삭제 실패!");
                console.log(result.data);
              }
            })
        } else {
          return;
        }
      })
    } else {
      alert(result.data);
    }
  })
