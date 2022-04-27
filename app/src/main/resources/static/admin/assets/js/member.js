let tbody = document.querySelector("#x-member-table tbody")
let paginationUl = document.querySelector(".pagination-ul")
let currTable = document.querySelector("#x-curr-table")




let pageSize = 10;
let pageNo = 1;
let totalMemberPage;
let totalMemberCount=0;
let userMemberCount=0;
let ceoMemberCount=0;


// 회원 카운트
fetch("/admin/member/list")
.then(response => {
  return response.json()
})
.then(result => {
  for (let member of result) {
    if (member.storeCount == 0) {
      userMemberCount++
    } else (
      ceoMemberCount++
    )
    totalMemberCount = userMemberCount + ceoMemberCount

    // 회원 현황 테이블
    let currDt = `
    <th>전체회원</th>
    <td>${totalMemberCount}</td>
    <th>일반회원</th>
    <td>${userMemberCount}</td>
    <th>사장회원</th>
    <td>${ceoMemberCount}</td>
    `
    currTable.innerHTML = currDt
  }
})


// 페이지 버튼 생성
fetch("/admin/member/size")
  .then(response => {
    return response.text()
  })
  .then(result => {
    // totalMemberCount = result
    totalMemberPage = Math.ceil(result / pageSize)

    for (let i = 1; i <= totalMemberPage; i++) {
      let paginationLi = `
      <li class="x-page-btn" onclick="memberList(${i})">${i}</li>
      `
      paginationUl.innerHTML += paginationLi;
    }
  })


// 멤버 테이블 생성
function memberList(pageNo) {
  $(tbody).empty()

  fetch(`/admin/member/pagelist?pageSize=${pageSize}&pageNo=${pageNo}`)
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
   <td><button type="button" name="button" class="x-sanction-btn" value="${member.mno}">제재</button><button type="button" name="button">탈퇴</button></td>
 </tr>
`
    tbody.innerHTML += memberTr
  }
}

// 회원 제재 버튼
$(document).on("click", ".x-sanction-btn", (e) => {
  console.log(e.target.value);
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



$(paginationUl).on("click", (e) => {
  $(".pagination-ul li").removeClass("page-btn-active")
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.target.classList.add("page-btn-active")
  }
console.log(e.target);
})










//
