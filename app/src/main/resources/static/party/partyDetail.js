// import { partyList } from '../common/api/apiList.js';

// URL에서 쿼리스트링(query string)을 추출한다.
var arr = location.href.split("?"); 
console.log(arr);

if (arr.length == 1) {
  alert("요청 형식이 올바르지 않습니다.")
  throw "URL 형식 오류!";
}

var qs = arr[1];
console.log(qs);

// 쿼리 스트링에서 모임번호 값을 추출한다.
var params = new URLSearchParams(qs);
var no = params.get("no");

if (no == null) {
  alert("게시물 번호가 없습니다.");
  throw "파라미터 오류!";
}
console.log(no);


  var pTitle = document.querySelector(".party-title");
  var pNickname = document.querySelector(".leader-profile span");
  console.log(pTitle)
  console.log(pNickname)


  // var pContent = document.querySelector("textarea[name=contents]");
  // var pLocation = document.querySelector("input[name=address]");
  // var pDate = document.querySelector("input[name=meetingDate]");
  // var pType = document.querySelector("input[name=alcoholType]");
  // var pLimit = document.querySelector("input[name=alcoholLimit]");
  // var pFee = document.querySelector("input[name=partyFee]");
  // var pMember = document.querySelector("input[name=maxMember]");


  // 3) 서버에서 데이터 가져오기
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
      
      var party = result.data;

      console.log(party);

      pTitle.innerHTML = party.title;
      pNickname.innerHTML = party.nickName;

      console.log(pTitle.innerHTML);
      console.log(pNickname.innerHTML);
    });