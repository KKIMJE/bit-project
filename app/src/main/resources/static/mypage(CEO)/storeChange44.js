var arr = location.href.split("?");
console.log(arr);

var qs = arr[1];
console.log(qs);

// 2) 쿼리 스트링에서 no 값을 추출한다.
var params = new URLSearchParams(qs);
var no = params.get("no");

console.log(no);

//가게명 주소 주점테마 전화번호 영업시간 가게소개 사업자등록번호 , 태그(아직추가안함), 파일업로드 (추가안함)
  var xStoreName = document.querySelector("input[name=storeName]");
  var xTel = document.querySelector("input[name=tel]");
  var xHour = document.querySelector("textarea[name=hour]");
  var xIntroduction = document.querySelector("textarea[name=introduction]");

  // 3) 서버에서 데이터 가져오기
  fetch(`/store/get?no=${no}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(store) {
      // 4) 상세 정보를 화면에 출력한다.      
      xStoreName.value = store.storeName;
      xTel.value=store.tel;
      xHour.value = store.hour;
      xIntroduction.value = store.introduction;
    });
  