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

let repDetailDiv = document.querySelector(".user-repdetail-container")


fetch(`/report/get?no=${no}`)
  .then(response => {
    return response.json()
  })
  .then(result => {
    if (result.status == "success") {
      let report = result.data
      console.log(report);
      let repData = `
    <div class="rep-detail">
    <table id="repdetail-table">
    <tr>
    <td>신고자회원번호: ${report.mno}</td>
    <td style="text-align:left;">신고번호: ${report.repoNo}</td>
    </tr>
    <tr>
    <td>피신고자회원번호: ${report.targetNo}</td>
    <td style="text-align:left;">신고일: ${new Date(report.date).toLocaleString()}</td>
    </tr>
    </table>
    <textarea readonly disabled>${report.contents}</textarea>
    <div class="repdetail-btn">
    <button class="x-sanction-btn" type="button" value="${report.targetNo}">제재하기</button>
    <button type="button" onclick="location.href='userreport.html'">나가기</button>
    </div>
    </div>
`
      repDetailDiv.innerHTML += repData
    } else {
      alert(result.data);
    }
  })

  // 회원 제재 버튼
  $(document).on("click", ".x-sanction-btn", (e) => {
    console.log(e.target.value);
    if (window.confirm("정말 제재하시겠습니까?")) {
      fetch(`/report/update?no=${e.target.value}`)
        .then(response => {
          return response.json()
        })
        .then(result => {
          console.log(result);
          if (result.status == "success") {
            alert("제재에 성공하였습니다.")
            location.href="userreport.html"
          } else {
            alert(result.data);
          }
        })
    } else {
      return;
    }
  })
