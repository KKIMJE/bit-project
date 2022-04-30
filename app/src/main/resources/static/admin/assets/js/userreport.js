let tbody = document.querySelector("#x-report-table tbody")
let paginationUl = document.querySelector(".pagination-ul")
let currTable = document.querySelector("#x-curr-table")
let detailBtn = document.querySelector(".x-detail-btn")




let pageSize = 10;
let pageCount = 10; // 페이징에 나타낼 페이지 수
let totalBoardPage = 0;
let totalBoardCount = 0;
let totalUserReportCount = 0;
let userReportCount = 0;
let reportHandlingCount = 0;





$(document).ready(function() {
  // 페이지 버튼 생성
  fetch("/report/typeSize?type=b")
    .then(response => {
      return response.json()
    })
    .then(result => {
      totalBoardCount = result
      paging(totalBoardCount, pageSize, pageCount, 1)
      reportList(1)
    })
})

function paging(totalBoardCount, pageSize, pageCount, currentPage) {
  console.log("currentPage : " + currentPage);
  console.log(totalBoardCount);

  totalBoardPage = Math.ceil(totalBoardCount / pageSize) // 총 페이지 수\
  console.log(totalBoardPage);

  if (totalBoardPage < pageCount) {
    pageCount = totalBoardPage;
  }

  let pageGroup = Math.ceil(currentPage / pageCount) // 페이지 그룹
  let last = pageGroup * pageCount // 화면에 보여질 마지막 페이지 번호

  if (last > totalBoardPage) {
    last = totalBoardPage
  }


  let first = last - (pageCount - 1); //화면에 보여질 첫번째 페이지 번호
  let next = last + 1;
  let prev = first - 1;

  if (last % pageCount != 0) {
    first = currentPage
    last = totalBoardPage
  }

  let pageHtml = "";

  if (prev > 0) {
    pageHtml += "<li><a href='#' id='prev'> 이전 </a></li>";
  }

  console.log(first);
  console.log(last);

  //페이징 번호 표시
  for (var i = first; i <= last; i++) {
    if (currentPage == i) {
      pageHtml +=
        "<li class='on'><a href='#' id='" + i + "'>" + i + "</a></li>";
    } else {
      pageHtml += "<li><a href='#' id='" + i + "'>" + i + "</a></li>";
    }
  }

  if (last < totalBoardPage) {
    pageHtml += "<li><a href='#' id='next'> 다음 </a></li>";
  }

  $(".pagination-ul").html(pageHtml)

  //페이징 번호 클릭 이벤트
  $(".pagination-ul li a").click(function() {
    let $id = $(this).attr("id");
    selectedPage = $(this).text();

    if ($id == "next") selectedPage = next;
    if ($id == "prev") selectedPage = prev;



    //페이징 표시 재호출
    paging(totalBoardCount, pageSize, pageCount, selectedPage);

    storeList(selectedPage);

  });

}

fetch("/report/list?type=b")
  .then(response => {
    return response.json()
  })
  .then(result => {
    for (report of result) {
      if (report.status == 0) {
        userReportCount++;
      }
      if (report.status == 1) {
        reportHandlingCount++;
      }

      totalUserReportCount = userReportCount + reportHandlingCount


      // 주점 현황 테이블
      let currDt = `
            <th>신고접수수</th>
            <td>${totalUserReportCount}</td>
            <th>신고접수수</th>
            <td>${userReportCount}</td>
            <th>신고처리수</th>
            <td>${reportHandlingCount}</td>

      `
      currTable.innerHTML = currDt


    }
  })

function reportList(pageNo) {
  $(tbody).empty()

  fetch(`/report/typeList?type=b&pageSize=${pageSize}&pageNo=${pageNo}`)
    .then(response => {
      return response.json()
    })
    .then(reports => {
      console.log(reports);
      createList(reports);
    })
}

// 리스트 생성
function createList(reports) {
  for (let report of reports) {
    console.log(report.status);

    if (report.status == false) {
      report.status = "접수"
    } else {
      report.status = "처리완료"
    }

    // 멤버 테이블
    let reportTr = `
 <tr style="height:50px;">
   <td>${report.repoNo}</td>
   <td>${report.mno}</td>
   <td>${report.targetNo}</td>
   <td>${report.status}</td>
   <td>${new Date(report.date).toLocaleString()}</td>
   <td><button type="button" name="button" class="x-detail-btn" value="${report.repoNo}">상세보기</button>
 </tr>
`
    tbody.innerHTML += reportTr
  }
}


// 검색
// $('.x-search-btn').on("click", () => {
//   let searchFilt = $('.x-search-div select').val()
//   let searchValue = $('.x-search-div input').val()
//
//   console.log(searchFilt);
//   console.log(searchValue);
//
//   if (searchValue == "") {
//     alert("검색어를 입력하세요")
//     return;
//   }
//   $(tbody).empty()
//   $(paginationUl).empty()
//   fetch(`/admin/store/get?filt=${searchFilt}&value=${searchValue}`)
//     .then(response => {
//       return response.json()
//     })
//     .then(stores => {
//       if (stores.length == 0) {
//         alert("검색 결과가 없습니다.")
//         location.reload()
//       }
//       createList(stores);
//     })
// })


$(document).on("click", ".x-detail-btn", (e) => {
  console.log(e.target.value);
  location.href = `userreportdetail.html?no=${e.target.value}`
})
