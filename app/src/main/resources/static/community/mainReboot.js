/********************
    카테고리별 정렬
********************/
const lightBtn = document.querySelector('.room-category-sort')
lightBtn.addEventListener("click",function(e){
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act')
    e.target.classList.toggle('act')

    let targetNo = e.target.value

    if (targetNo == 0) {
    
    }
    else if (targetNo == 1 || targetNo == 6 || targetNo == 5) {
      alert("해당 게시물은 준비중 입니다.")
      location.reload()
    } else {
        console.log("나머지")
    }
  }
});



var plbody = document.querySelector(".imgCardAll") // 모임리스트

// /****************
//     리스트 출력
// ****************/
// fetch("/party/list")
// .then(function(response) {
//     return response.json();
// })
// .then(function(result) {      
//     for (var party of result) {
//     plbody.innerHTML += `<div class="imgContainer">
//     <div class="rooomCon">
//         <div class="roomTitle">제목 : 
//             <span>외롭다 같이 술먹을 사람??</span>
//         </div>
//         <div class="roomContent">
//             <div class="roomOption">  
//                 <div class="roomDate">일정 : </div>  
//                 <div class="roomLocation fontSpase">위치 : </div>
//                 <div class="roomAlc">술종류 : </div>
//                 <div class="roomLimit fontSpase">주량 : </div>
//                 <div class="roomFee">회비 : </div>
//                 <div class="roomMember fontSpase">인원 : </div>
//             </div>
//             <div class="relative">
//                 <img src="img/suzy-photo.jpg" class="roomProfile">
//                 <div class="userNickName">수지</div>
//             </div>
//         </div>
//         <div class="roomStatus relative2">
//             <div class="entrance roomBtn">들어가기</div>
//             <div class="roomDelete roomBtn">삭제</div>
//         </div>
//     </div>
// </div>`
    
    
    
    
    
    
    
//     `<a href="partyDetail.html?no=${party.partyNo}" class="party-list" data-creatdt="${party.partyNo}"> 
//                         <div class="party-body-top">
//                             <div class="party-title">${party.title}</div>
//                             <div class="party-regdate">` + timeCheck(`${party.regDate}`) + `</div>
//                         </div> 
//                         <div class="party-body-content">
//                             <div class="leader-profile">
//                                 <img class="profile-img leader" src="/asset/img/member/${party.writer.mimg}" alt="방장 프로필">
//                                 <span>${party.writer.nickName}</span>
//                             </div>
//                             <div class="party-detail">
//                         <div class="first-row">
//                             <i class="fa-solid fa-calendar-days"></i>
//                             <span>${party.meetingDate}</span>
//                         </div>
//                         <div class="second-row">
//                             <div>
//                                 <span>
//                                     <i class="fa-solid fa-bottle-droplet"></i>${party.alcoholType}</span>
//                             </div>
//                             <div>
//                                 <span>
//                                     <i class="fa-solid fa-whiskey-glass"></i>${party.alcoholLimit}</span>
//                             </div>
//                             <div>
//                                 <span>
//                                     <i class="fa-solid fa-won-sign"></i>${party.partyFee}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="party-body-footer">
//                     <div class="party-store">
//                         <div class="meeting-distance" data-address="${party.address}">🚧계산중🚧</div>
//                     </div>
//                     <div class="party-like">
//                     <button type="button"><i class="fa-regular fa-heart"></i></button>
//                     <button type="button" class="like-click"><i class="fa-solid fa-heart like-click"></i></button>
//                     </div>
//                     <div class="party-member-count">
//                         <i class="fa-solid fa-user"></i>
//                         <span>3</span>&nbsp;/&nbsp;<span>${party.maxMember}</span>
//                     </div>
//                 </div>
//             </a>
//     `;
// }

/*****************
    글쓰기 버튼
*****************/

$('.entrance').click(function() {
    location.href = '/party/chat.html?roomNum=1&username=개코';
})