// import { partyList } from '../common/api/apiList.js';

var pcbody = document.querySelector(".party-comment-fst")

// URL에서 쿼리스트링(query string)을 추출한다.
var arr = location.href.split("?"); 

if (arr.length == 1) {
  alert("요청 형식이 올바르지 않습니다.")
  throw "URL 형식 오류!";
}

var qs = arr[1];

// 쿼리 스트링에서 모임번호 값을 추출한다.
var params = new URLSearchParams(qs);
var no = params.get("no");

if (no == null) {
  alert("게시물 번호가 없습니다.");
  throw "파라미터 오류!";
}

  var pTitle = document.querySelector(".party-title");
  var pNickname = document.querySelector(".leader-profile span");
  var pcNickname = document.querySelector(".nickname");
  var pAlcoholType = document.querySelector(".ptype");
  var pDate = document.querySelector(".pdate");
  var pAlcoholLimit = document.querySelector(".plimit");
  var pFee = document.querySelector(".pfee");
  var pMember = document.querySelector(".pmember");

  // 서버에서 데이터 가져오기
  fetch(`/party/get?no=${no}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      // 모임 게시판 상세 정보를 화면에 출력한다.
      if (result.status == "fail") {
    	  window.alert("서버 요청 오류!");
    	  console.log(result.data);
    	  return;
      }
      console.log(result)
      var party = result.data;
      //console.log(party.partyComments)

      pTitle.innerHTML = party.title;
      pNickname.innerHTML = party.nickName;
      pAlcoholType.innerHTML = party.alcoholType;
      pDate.innerHTML = party.meetingDate;
      pAlcoholLimit.innerHTML = party.alcoholLimit;
      pFee.innerHTML = `${party.partyFee}원`;
      pMember.innerHTML = `${party.maxMember}명`;

      pcNickname.innerHTML = party.nickName;

      console.log(pTitle.innerHTML);
    });


/*    for (var partyComment of result) {
      console.log(partyComment)
      pcbody.innerHTML += `<div>
    <img class="profile-img people" src="img/profile_sumi.jpg">
</div>
<div>
    <div class="comment-text">
        <p class="people-name">젠틀맨이다</p>
        <div class="comment-content">오우 강남에 미인이 나타나셨다.
            라ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
        </div>
    </div>
    <div class="comment-footer">
        <p class="comment-datetime">2022-01-01 22:13:10</p>
        <div class="comment-option">
            <button type="button" class="">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span>&nbsp;신고</span>
            </button>
        </div>
    </div>
    `;
}

    /*<div>
        <img class="profile-img people" src="img/profile_sumi.jpg">
    </div>
    <div>
        <div class="comment-text">
            <p class="people-name">젠틀맨이다</p>
            <div class="comment-content">오우 강남에 미인이 나타나셨다.
                라ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
            </div>
        </div>
        <div class="comment-footer">
            <p class="comment-datetime">2022-01-01 22:13:10</p>
            <div class="comment-option">
                <button type="button" class="">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span>&nbsp;신고</span>
                </button>
            </div>
        </div>*/