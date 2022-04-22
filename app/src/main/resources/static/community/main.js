// 글쓰기 form.html로 이동
document.querySelector(".writing__").addEventListener("click", function() {
  console.log(e.target);
	location.href = "form.html"
})


var boardCardDiv = document.querySelector(".card")
const lightBtn = document.querySelector(".category");

// 몇분 전 표시
function timeCheck(time) {

  var min = 60 * 1000
  var now = new Date()
  var writeDay = new Date(time)
  var minsAgo = Math.floor((now - writeDay) / (min))

  var result = {
			'raw': writeDay.getFullYear() + '-' + (writeDay.getMonth() + 1 > 9 ? '' : '0') + (writeDay.getMonth() + 1) + '-' + (writeDay.getDate() > 9 ? '' : '0') +  writeDay.getDate() + ' ' + (writeDay.getHours() > 9 ? '' : '0') +  writeDay.getHours() + ':' + (writeDay.getMinutes() > 9 ? '' : '0') +  writeDay.getMinutes() + ':'  + (writeDay.getSeconds() > 9 ? '' : '0') +  writeDay.getSeconds(),
			'formatted': '',
		};

    if (minsAgo < 60) { // 1시간 내
			result.formatted = minsAgo + '분 전';
		} else if (minsAgo < 60 * 24) { // 하루 내
			result.formatted = Math.floor(minsAgo / 60) + '시간 전';
		} else { // 하루 이상
			result.formatted = Math.floor(minsAgo / 60 / 24) + '일 전';
		};

		return result.formatted;



  // var BeforeDay = null
  //
  // if (now.getMonth() - writeDay.getMonth() > 0) {
  //   return BeforeDay = "오래전"
  // } else if (30 > now.getDate() - writeDay.getDate() && now.getDate() - writeDay.getDate() > 0) {
  //   return BeforeDay = now.getDate() - writeDay.getDate() + "일 전"
  // } else if (24 > now.getHours() - writeDay.getHours() && now.getHours() - writeDay.getHours() > 0) {
  //   return BeforeDay = now.getHours() - writeDay.getHours() + "시간 전"
  // } else if (60 > now.getMinutes() - writeDay.getMinutes() && now.getMinutes() - writeDay.getMinutes() > 0) {
  //   return BeforeDay = now.getMinutes() - writeDay.getMinutes() + "분 전"
  // } else {
  //   return BeforeDay = "방금전"
  // }
}

// 커뮤니티 번호 스트링으로
function sortCategory(no) {
  var boardCategory = no

  if (boardCategory === 1) {
    return boardCategory = "술집추천"
  } else if (boardCategory === 2) {
    return boardCategory = "분실/실종센터"
  } else if (boardCategory === 3) {
    return boardCategory = "일상"
  } else if (boardCategory === 4) {
    return boardCategory = "사건사고"
  } else if (boardCategory === 5) {
    return boardCategory = "술게임"
  } else {
    return boardCategory = "기타"
  }
}

usedBoard = [];

newBoards = [];

function findDupliBoard(arr1, arr2) {
   // newBoards = arr1.filter(item => !arr2.includes(item));

   for (var i = 0; i < arr1.length; i++) {
     newBoards.push()
     for (var j = 0; j < arr2.length; j++) {
       if(`arr1[i].communityNo` === `arr2[i].communityNo`) {
         newBoards.pop()
         break;
       }
     }
   }
   return newBoards
}




function allList() {
  fetch("/community/list")
    .then(function(response) {
      return response.json()
    })
    .then(function(boards) {


      for (var i = 0; i < 5; i++) {
        var div = document.createElement("div")
        div.classList.add("card-body")
        div.innerHTML = `
            <img class="community_img" src="">
            <div class="card-category">${boards[i].communityNo}</div><br>
            <div class="contents">
              <div class="card-contents-name">${boards[i].boardTitle}</div>
              <div id="card-contents">${boards[i].boardContents}<button class="see_more">. . .</button></div><br>
            </div> <br>
            <div class="card-like"><i class="fa-regular fa-thumbs-up"></i> ${boards[i].boardLike}</div>
            <div class="card-comment"><i class="fa-regular fa-comment"></i> 댓글 ${boards[i].boardCommentCount}</div>
            <div class="community_time">` + timeCheck(`${boards[i].regDate}`) + `</div>
            <div class="community_writer">${boards[i].name}</div>
        `
        boardCardDiv.appendChild(div)


        boards.shift()
        // pop() 마지막
      }
    })
}
//
// function allList() {
//   fetch("/community/list")
//     .then(function(response) {
//       return response.json()
//     })
//     .then(function(boards) {
//       findDupliBoard(boards, usedBoard)
//       for (var i = 0; i < 6; i++) {
//         var div = document.createElement("div")
//         div.classList.add("card-body")
//         div.innerHTML = `
//             <img class="community_img" src="">
//             <div class="card-category">${boards[i].communityNo}</div><br>
//             <div class="contents">
//               <div class="card-contents-name">${boards[i].boardTitle}</div>
//               <div id="card-contents">${boards[i].boardContents}<button class="see_more">. . .</button></div><br>
//             </div> <br>
//             <div class="card-like"><i class="fa-regular fa-thumbs-up"></i> ${boards[i].boardLike}</div>
//             <div class="card-comment"><i class="fa-regular fa-comment"></i> 댓글 ${boards[i].boardCommentCount}</div>
//             <div class="community_time">` + timeCheck(`${boards[i].regDate}`) + `</div>
//             <div class="community_writer">${boards[i].name}</div>
//         `
//         boardCardDiv.appendChild(div)
//       }
//     })
// }

// 카테고리 렌더링
function targetList(targetNo) {

  fetch("/community/list")
    .then(function(response) {
      return response.json()
    })
    .then(function(boards) {
      for (var i = 0; i < boards.length; i++) {
        if (targetNo == boards[i].communityNo) {
          var div = document.createElement("div")
          div.classList.add("card-body")
          div.innerHTML = `
          <img class="community_img" src="">
          <div class="card-category">${boards[i].communityNo}</div><br>
          <div class="contents">
            <div class="card-contents-name">${boards[i].boardTitle}</div>
            <div id="card-contents">${boards[i].boardContents}<button class="see_more">. . .</button></div><br>
          </div> <br>
          <div class="card-like"><i class="fa-regular fa-thumbs-up"></i> ${boards[i].boardLike}</div>
          <div class="card-comment"><i class="fa-regular fa-comment"></i> 댓글 ${boards[i].boardCommentCount}</div>
          <div class="community_time">` + timeCheck(`${boards[i].regDate}`) + `</div>
          <div class="community_writer">${boards[i].name}</div>
        `
          boardCardDiv.appendChild(div)
        }
      }
    })
}

// 무한스크롤
function debounce(callback, limit = 100) {
    let timeout
    return function(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback.apply(this, args)
        }, limit)
    }
}

// 카테고리 클릭
lightBtn.addEventListener("click", function(e) {
  $(".card").empty()

  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act');
    e.target.classList.toggle('act');

    let targetNo = e.target.value


    if (targetNo == 1) {
      allList()

      // ===== 무한 스크롤 (스크롤 이벤트) =====
      document.addEventListener("scroll", debounce(e => {

          // clientHeight : 웹 브라우저 창의 높이
          // scrollTop : 현재 스크롤된 부분의 맨 위의 높이
          // scrollHeight : 문서의 총 높이 (= 스크롤의 총 높이)
          // 스크롤의 마지막에 도달 : clientHeight + scrollTop >= scrollHeight

          const { clientHeight, scrollTop, scrollHeight } = e.target.scrollingElement
          if(clientHeight + scrollTop >= scrollHeight) {
                allList()
          }
      }, 200))
    }
    if (targetNo != 1) {

      targetList(targetNo)

      // ===== 무한 스크롤 (스크롤 이벤트) =====
      document.addEventListener("scroll", debounce(e => {

          const { clientHeight, scrollTop, scrollHeight } = e.target.scrollingElement
          if(clientHeight + scrollTop >= scrollHeight) {
                targetList(targetNo)
          }
      }, 200))
    }
  }
})

$("#recent").click(function() {
	var dataNm = $(this).data("datanm"); //data() 의 이름은 소문자로 작성
	listSortDate($(this), dataNm);
});

function listSortDate($targetObj, dataNm){
  $('.card').html(
    $('.card .card-body').sort(function(a, b){
      return $(b).data(dataNm) - $(a).data(dataNm);
    })
  );

  $(".order").removeClass("bold");
  $targetObj.addClass("bold");
}


// // ===== 무한 스크롤 (스크롤 이벤트) =====
// document.addEventListener("scroll", debounce(e => {
//
//     // clientHeight : 웹 브라우저 창의 높이
//     // scrollTop : 현재 스크롤된 부분의 맨 위의 높이
//     // scrollHeight : 문서의 총 높이 (= 스크롤의 총 높이)
//     // 스크롤의 마지막에 도달 : clientHeight + scrollTop >= scrollHeight
//
//     const { clientHeight, scrollTop, scrollHeight } = e.target.scrollingElement
//     if(clientHeight + scrollTop >= scrollHeight) {
//           allList()
//         }
//       }, 200))
