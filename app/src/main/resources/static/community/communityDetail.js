  var xCommunityNo = document.querySelector(".community-category");
  var xTitle = document.querySelector(".title");
  var xTime = document.querySelector(".detail-date");
  var xViewCount = document.querySelector(".detail-viewCount");
  var xLikeCount = document.querySelector(".like-count");
  var xContent = document.querySelector(".community-board-content");
  var xProfileName = document.querySelector(".profile-name1");
  var xCommentName = document.querySelector(".profile-name2");
  var xBoardCommentBody = document.querySelector(".comment-container")
  var updateBtn = document.querySelector("#button-update")
  var deleteBtn = document.querySelector("#button-delete")
  var updateBoardNo = 0;
  var boardWriter = 0;

  function dateFormat(date) {
          let month = date.getMonth() + 1;
          let day = date.getDate();
          let hour = date.getHours();
          let minute = date.getMinutes();

          month = month >= 10 ? month : '0' + month;
          day = day >= 10 ? day : '0' + day;
          hour = hour >= 10 ? hour : '0' + hour;
          minute = minute >= 10 ? minute : '0' + minute;

          return date.getFullYear() + '.' + month + '.' + day + '.   ' + hour + ':' + minute;
  }

  function sortCategory(no) {
    if (no === 1) {
      return `전체`
    } else if (no === 2) {
      return `술집추천`
    } else if (no === 3) {
      return `분실/실종센터`
    } else if (no === 4) {
      return `일상`
    } else if (no === 5) {
      return `사건사고`
    } else if (no === 6) {
      return `술게임`
    } else if (no === 7){
      return `기타`
    }
  }
  var arr = location.href.split("?");
  if (arr.length == 1) {
    alert("요청 형식이 옳바르지 않습니다.")
    throw "URL 형식 오류!";
  }
  var qs = arr[1];
  var params = new URLSearchParams(qs);
  var currentBoardNo = params.get("boardNo");

  // window.onload = function getBoardNo(currentBoardNo) {

  fetch(`/community/get?no=${currentBoardNo}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      var community = result;
      xContent.innerHTML = createBoard(community);
      xCommunityNo.innerHTML = sortCategory(community.communityNo);
      xTitle.innerHTML = community.boardTitle;
      xTime.innerHTML = dateFormat(new Date(community.regDate));
      xViewCount.innerHTML = community.viewCount;
      xProfileName.innerHTML = community.name;
      xCommentName.innerHTML = community.name;
      updateBoardNo = community.boardNo;
      boardWriter = community.mno;


      fetch('/member/getLoginUser')
      .then(function(response){
        return response.json()
      })
      .then(function(result){
        xmno = result.data.mno;

        if (xmno != boardWriter) {

          updateBtn.style.display = 'none';
          deleteBtn.style.display = 'none';
        }

        $(".btn-complete").click(function () {

            var bComment = document.querySelector("textarea[name=partyCommentContents]");

            if (bComment.value == "") {
                alert("내용을 입력해주세요.");
                return;
            }
            console.log(currentBoardNo);
            console.log(xmno);

            fetch(`/communityComment/add?commentWriter=${xmno}&boardNo=${currentBoardNo}&communityCommentContents=${bComment.value}`)
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(result) {
                  bComment.value = '';
                  location.reload();
                  // 업데이트 호출해야 함.
            });
        });
      });

    });

console.log(boardWriter);



    deleteBtn.addEventListener("click", function(e) {
      fetch(`/community/delete?no=${currentBoardNo}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        location.href = "main.html"
      })
    })

  // }

  fetch(`/communityComment/getByBoardNo?no=${currentBoardNo}`)
    .then(function(response) {
      // var json = eval("'" + response + "'");
      console.log(response);
      return response.json();
    })
    .then(function(result) {
      console.log(result);

      for (var i = 0; i < result.length; i++) {
        var div = document.createElement("div")
        div.classList.add("community-comment-fst")

        var commentCard =
                 `
                  <div>
                         <img class="profile-img people" src="img/profile_sumi.jpg">
                     </div>
                     <div>
                         <div class="comment-text">
                             <p class="people-name">${result[i].name}</p>
                             <div class="comment-content">
                                 ${result[i].communityCommentContents}
                             </div>
                         </div>
                         <div class="comment-footer">
                             <p class="comment-datetime">` + dateFormat(new Date(`${result[i].commentDate}`)) + `</p>
                             <div class="comment-option">
                                 <button type="button" class="report2">
                                     <i class="fa-solid fa-triangle-exclamation"></i>
                                     <span>&nbsp;신고</span>
                                 </button>
                             </div>
                         </div>
                    `
                    div.innerHTML = commentCard
                 xBoardCommentBody.appendChild(div)
                   }
    })

    function createBoard (data) {
      return `              ${data.boardContents}  <div class="community-board-option">
                          <div class="community-like">
                              <i class="fa-regular fa-heart like-click"></i>
                              <i class="fa-solid fa-heart like-click"></i>
                              <div>
                                <span class="like-count">${data.boardLike}</span>
                              </div>
                          </div>
                          <div>
                            <button type="button">
                                <i class="fa-solid fa-share"></i>
                                <span>&nbsp;공유</span>
                            </button>
                          </div>
                          <div>
                              <button type="button" class="report">
                                  <i class="fa-solid fa-triangle-exclamation"></i>
                                  <span>&nbsp;신고</span>
                              </button>
                          </div>
                      </div>`
    }

var xmno = 0;



    // fetch('/member/getLoginUser')
    // .then(function(response){
    // 	return response.json()
    // })
    // .then(function(result){
    // 	xmno = result.data.mno;
    //
    //   // if (xmno != ) {
    //   //
    //   // }
    //
    //   $(".btn-complete").click(function () {
    //
    //       var bComment = document.querySelector("textarea[name=partyCommentContents]");
    //
    //       if (bComment.value == "") {
    //           alert("내용을 입력해주세요.");
    //           return;
    //       }
    //       console.log(currentBoardNo);
    //       console.log(xmno);
    //
    //       fetch(`/communityComment/add?commentWriter=${xmno}&boardNo=${currentBoardNo}&communityCommentContents=${bComment.value}`)
    //       .then(function(response) {
    //           console.log(response);
    //           return response.json();
    //       })
    //       .then(function(result) {
    //             bComment.value = '';
    //             location.reload();
    //             // 업데이트 호출해야 함.
    //       });
    //   });
    // });


    $( document ).on("click", ".report", function() { // 동적 생성된 html에 이벤트 걸기
      console.log("aaaaaaaaaaaaaaaaaaaa");
        reportModal();
    })

    $( document ).on("click", ".report2", function() { // 동적 생성된 html에 이벤트 걸기
        reportModal();
    })

    function reportModal() {
        Swal.fire({
            title: '신고하기',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            inputLabel: '신고 이유를 적어주세요',
            showCancelButton: false,
            confirmButtonText: '제출하기',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                var rContent = document.querySelector(".swal2-input");

                fetch(`/report/add?no=${xmno}&rtype=b&rcontent=${rContent.value}`, { // 회원: m, 주점: s, 게시글: b
                    method : "POST"
                }).then(response => {
                    return response.json()
                }).then((result) => {
                    if (result.data == "로그인 하지 않았습니다!") {
                    alert("로그인 후 신고가 가능합니다.")
                } else {
                    Swal.fire({
                        icon: 'success',
                        text: '신고가 접수되었습니다.',
                        showCancelButton:false,
                        confirmButtonColor:'#90d483',
                        cancelButtonColor: '#90d483',
                        confirmButtonText:'확인',
                    })
                }
            })
        }
    })
    }

      updateBtn.addEventListener("click", function(e) {
        location.href = `view.html?boardNo=${updateBoardNo}`
      })
