let tbody = document.querySelector("#x-notice-table tbody")
let paginationUl = document.querySelector(".pagination-ul")
let currTable = document.querySelector("#x-curr-table")
let detailBtn = document.querySelector(".x-detail-btn")




let pageSize = 10;
let pageCount = 10; // 페이징에 나타낼 페이지 수
let totalNoticePage = 0;
let totalNoticeCount = 0;


$(document).ready(function() {
  // 페이지 버튼 생성
  fetch("/notice/size")
    .then(response => {
      return response.json()
    })
    .then(result => {
      totalNoticeCount = result
      paging(totalNoticeCount, pageSize, pageCount, 1)
      noticeList(1)
    })
})

function paging(totalNoticeCount, pageSize, pageCount, currentPage) {
  console.log("currentPage : " + currentPage);
  console.log(totalNoticeCount);

  totalNoticePage = Math.ceil(totalNoticeCount / pageSize) // 총 페이지 수\
  console.log(totalNoticePage);

  if (totalNoticePage < pageCount) {
    pageCount = totalNoticePage;
  }

  let pageGroup = Math.ceil(currentPage / pageCount) // 페이지 그룹
  let last = pageGroup * pageCount // 화면에 보여질 마지막 페이지 번호

  if (last > totalNoticePage) {
    last = totalNoticePage
  }


  let first = last - (pageCount - 1); //화면에 보여질 첫번째 페이지 번호
  let next = last + 1;
  let prev = first - 1;

  if (last % pageCount != 0) {
    first = currentPage
    last = totalNoticePage
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

  if (last < totalNoticePage) {
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
    paging(totalNoticeCount, pageSize, pageCount, selectedPage);

    noticeList(selectedPage);

  });

}

function noticeList(pageNo) {
  $(tbody).empty()

  fetch(`/notice/list?pageSize=${pageSize}&pageNo=${pageNo}`)
    .then(response => {
      return response.json()
    })
    .then(notices => {
      console.log(notices);
      createList(notices);
    })
}

// 리스트 생성
function createList(notices) {
  for (let notice of notices) {
    // 멤버 테이블
    let noticeTr = `
 <tr style="height:50px;">
   <td>${notice.noticeNo}</td>
   <td>${notice.title}</td>
   <td>${new Date(notice.regDate).toLocaleString()}</td>
   <td>${notice.viewCount}</td>
   <td><button type="button" name="button" class="x-detail-btn" value="${notice.noticeNo}">상세보기</button></td>
 </tr>
`
    tbody.innerHTML += noticeTr
  }
}


$(document).on("click", ".x-detail-btn", (e) => {
  console.log(e.target.value);
  location.href = `noticedetail.html?no=${e.target.value}`
})
