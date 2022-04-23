let tbody = document.querySelector("#x-member-table tbody")
let paginationUl = document.querySelector(".pagination-ul")
let currTable = document.querySelector("#x-curr-table")


let pageSize = 10;
let pageNo = 1;
let totalMemberPage;
let totalMemberCount;
let userMemberCount;
let ceoMemberCount;

// 전체 회원 수
fetch("/admin/member/size")
  .then(response => {
    return response.json()
  })
  .then(result => {
    totalMemberCount = result
    totalMemberPage = Math.ceil(result / pageSize)
    console.log(totalMemberPage);

    for (let i = 1; i <= totalMemberPage; i++) {
      console.log("aaa");
      let paginationLi = `
    <li><span><a class="x-page-btn" onclick="memberList(${i})">${i}</a></span></li>
    `
      paginationUl.innerHTML += paginationLi;
    }
  })

fetch("/admin/member/typesize?memberStatus=false")
  .then(response => {
    return response.json()
  })
  .then(result => {
    userMemberCount = result;
  })

fetch("/admin/member/typesize?memberStatus=true")
  .then(response => {
    return response.json()
  })
  .then(result => {
    ceoMemberCount = result;

  })






// 멤버 페이지
function memberList(pageNo) {
  $(tbody).empty()

  fetch(`/admin/member/list?pageSize=${pageSize}&pageNo=${pageNo}`)
    .then(response => {
      return response.json()
    })
    .then(members => {
      console.log(members);

      for (let member of members) {
        console.log(member.storeCount);

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
       <td><button type="button" name="button">제재</button><button type="button" name="button">탈퇴</button></td>
     </tr>
    `
        tbody.innerHTML += memberTr
      }

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

    })
}
