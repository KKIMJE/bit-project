let tbody = document.querySelector("#x-member-table tbody")
let paginationUl = document.querySelector(".pagination-ul")
let currTable = document.querySelector("#x-curr-table")




let pageSize = 10;
let pageCount = 10; // 페이징에 나타낼 페이지 수
let totalMemberPage;
let totalMemberCount;
let userMemberCount = 0;
let ceoMemberCount = 0;
let withdrawMemberCount = 0;


// 회원 카운트
fetch("/admin/member/list")
  .then(response => {
    return response.json()
  })
  .then(result => {
    for (let member of result) {
      if (member.storeCount == 0 && member.memberStatus == 0) {
        userMemberCount++
      }
      if (member.storeCount > 0 && member.memberStatus == 0) {
        ceoMemberCount++
      }
      if (member.memberStatus == 1) {
        withdrawMemberCount++
      }

        console.log(ceoMemberCount);
      totalMemberCount = userMemberCount + ceoMemberCount + withdrawMemberCount

      // 회원 현황 테이블
      let currDt = `
    <th>전체회원</th>
    <td>${totalMemberCount}</td>
    <th>일반회원</th>
    <td>${userMemberCount}</td>
    <th>사장회원</th>
    <td>${ceoMemberCount}</td>
    <th>탈퇴회원</th>
    <td>${withdrawMemberCount}</td>
    `
      currTable.innerHTML = currDt
    }
  })

$(document).ready(function() {
// 페이지 버튼 생성
fetch("/admin/member/size")
  .then(response => {
    return response.text()
  })
  .then(result => {
    totalMemberCount = result
    // totalMemberPage = Math.ceil(result / pageSize)
    //
    // for (let i = 1; i <= totalMemberPage; i++) {
    //   let paginationLi = `
    //   <li class="x-page-btn" onclick="memberList(${i})">${i}</li>
    //   `
    //   paginationUl.innerHTML += paginationLi;
    // }
    paging(totalMemberCount, pageSize, pageCount, 1);
  })
})

function paging(totalMemberCount, pageSize, pageCount, currentPage) {
  console.log("currentPage : " + currentPage);
  console.log(totalMemberCount);

  totalMemberPage = Math.ceil(totalMemberCount / pageSize) // 총 페이지 수\
  console.log(totalMemberPage);

  if (totalMemberPage < pageCount) {
    pageCount = totalMemberPage;
  }

  let pageGroup = Math.ceil(currentPage / pageCount) // 페이지 그룹
  let last = pageGroup * pageCount // 화면에 보여질 마지막 페이지 번호

  if (last > totalMemberPage) {
    last = totalMemberPage
  }


  let first = last - (pageCount - 1); //화면에 보여질 첫번째 페이지 번호
  let next = last + 1;
  let prev = first - 1;

  if (last % pageCount != 0) {
    first = currentPage
    last = totalMemberPage
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

  if (last < totalMemberPage) {
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
    paging(totalMemberCount, pageSize, pageCount, selectedPage);

    memberList(selectedPage);

  });

}





// 멤버 테이블 생성
function memberList(selectedPage) {
  $(tbody).empty()

  fetch(`/admin/member/pagelist?pageSize=${pageSize}&pageNo=${selectedPage}`)
    .then(response => {
      return response.json()
    })
    .then(members => {
      console.log(members);
      createList(members);
    })
}

// 테이블 생성 함수
function createList(members) {
  for (let member of members) {

    if (member.gender == false) {
      member.gender = "남자"
    } else {
      member.gender = "여자"
    }

    if (member.socialAccept == false) {
      member.socialAccept = "아니오"
    } else {
      member.socialAccept = "예"
    }

    if (member.memberStatus == false) {
      member.memberStatus = "일반"
    } else {
      member.memberStatus = "탈퇴"
    }

    if (member.storeCount == 0) {
      member.storeCount = "일반"
    } else {
      member.storeCount = "사장"
    }





    // 멤버 테이블
    let memberTr = `
 <tr style="height:50px;">
   <td>${member.mno}</td>
   <td>${member.email}</td>
   <td>${member.name}</td>
   <td>${member.nickName}</td>
   <td>${member.gender}</td>
   <td>${member.birth}</td>
   <td>${member.tel}</td>
   <td>${member.socialAccept}</td>
   <td>${member.storeCount}</td>
   <td>${member.joinDate.split("T", 1)}</td>
   <td>${member.memberStatus}</td>
   <td>${member.blockAccept}</td>
   <td><button type="button" name="button" class="x-sanction-btn" value="${member.mno}">제재</button>
   <button type="button" name="button" class="x-delete-btn" value="${member.mno}">탈퇴</button></td>
 </tr>
`
    if (member.email != "admin@admin.com") {
      tbody.innerHTML += memberTr
    }
  }
}

// 회원 제재 버튼
$(document).on("click", ".x-sanction-btn", (e) => {
  if (window.confirm("정말 제재하시겠습니까?")) {
    fetch(`/admin/member/update?no=${e.target.value}`)
      .then(response => {
        return response.json()
      })
      .then(result => {
        console.log(result);
        if (result.status == "success") {
          location.reload();
        } else {
          alert(result.data);
        }
      })
  } else {
    return;
  }
})

// 탈퇴 전환 버튼
$(document).on("click", ".x-delete-btn", (e) => {
  console.log(e.target.value);
  if (window.confirm("정말 탈퇴시키시겠습니까?")) {
    fetch(`/admin/member/delete?no=${e.target.value}`)
      .then(response => {
        return response.json()
      })
      .then(result => {
        if (result.status == "success") {
          alert("탈퇴 전환 완료했습니다.")
          location.reload();
        } else {
          console.log("삭제실패");
          alert(result.data);
        }
      })
  } else {
    return;
  }
})

// 검색창
$('.x-search-btn').on("click", () => {
  let searchFilt = $('.x-search-div select').val()
  let searchValue = $('.x-search-div input').val()

  if (searchValue == "") {
    alert("검색어를 입력하세요")
    return;
  }
  $(tbody).empty()
  $(paginationUl).empty()
  fetch(`/admin/member/get?filt=${searchFilt}&value=${searchValue}`)
    .then(response => {
      return response.json()
    })
    .then(members => {
      createList(members);
    })
})




//
