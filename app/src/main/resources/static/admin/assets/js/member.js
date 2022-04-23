let tbody = document.querySelector("#x-member-table tbody")


let pageSize = 10;
let pageNo = 1;
let totalMemberPage;



// 전체 회원 수
fetch("/admin/member/size")
.then(response => {
  return response.text()
})
.then(result => {
  totalMemberPage = Math.ceil(result / pageSize)
  console.log(totalMemberPage);
})


fetch("/admin/member/list?pageSize=10&pageNo=1")
.then(response => {
  return response.json()
})
.then(members => {
  console.log(members);


  for (let member of members) {
    console.log(member.joinDate);

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




// <tr style="height:50px;">
//   <td>1</td>
//   <td>test@test.com</td>
//   <td>홍길동</td>
//   <td>kill동</td>
//   <td>남자</td>
//   <td>1991.05.21</td>
//   <td>010-2929-2929</td>
//   <td>있음</td>
//   <td>사장</td>
//   <td>2022-04-22</td>
//   <td>일반</td>
//   <td>2</td>
//   <td><button type="button" name="button">제재</button><button type="button" name="button">탈퇴</button></td>
// </tr>
