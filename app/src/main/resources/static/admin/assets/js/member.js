let tbody = document.querySelector("#x-member-table tbody")
let paginationUl = document.querySelector(".pagination-ul")


let pageSize = 10;
let pageNo = 1;
let totalMemberPage;





// 전체 회원 수
fetch("/admin/member/size")
  .then(response => {
    return response.json()
  })
  .then(result => {
    totalMemberPage = Math.ceil(result / pageSize)
    console.log(totalMemberPage);

    for (let i = 1; i <= totalMemberPage; i++) {
      console.log("aaa");
      let paginationLi = `
    <li><span><a onclick="memberList(${i})">${i}</a></span></li>
    `
      paginationUl.innerHTML += paginationLi;
    }
  })


function memberList(pageNo) {
  $(tbody).empty()

  fetch(`/admin/member/list?pageSize=${pageSize}&pageNo=${pageNo}`)
    .then(response => {
      return response.json()
    })
    .then(members => {
      console.log(members);




      for (let member of members) {
        console.log(member.joinDate);

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

        if (member.memberStatus == 1) {
          member.memberStatus = "사장"
        } else {
          member.memberStatus = "일반"
        }

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
       <td>${member.memberStatus}</td>
       <td>${member.joinDate.split("T", 1)}</td>
       <td>${member.Accept}</td>
       <td>${member.blockDate}</td>
       <td><button type="button" name="button">제재</button><button type="button" name="button">탈퇴</button></td>
     </tr>
    `
        tbody.innerHTML += memberTr
      }

    })
}
