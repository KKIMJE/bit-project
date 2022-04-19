/* 삭제 추가 */ 
      // 1) URL에서 쿼리스트링(query string)을 추출한다.
   var arr = location.href.split("?"); 
   console.log(arr);
    var storeNo;

  if (arr.length > 1) {
    

  var qs = arr[1];
  console.log(qs);

  
  var params = new URLSearchParams(qs);
  storeNo= params.get("storeNo"); 

  console.log(storeNo);
  }
  
  
//가게명 주소 주점테마 전화번호 영업시간 가게소개 사업자등록번호 , 태그(아직추가안함), 파일업로드 (추가안함)
  var xStoreNo = document.querySelector("input[name=storeNo]");
  var xOptionDivContainer = document.querySelector("#x-option-div-container");
  var xTel = document.querySelector("input[name=tel]");
  var xHour = document.querySelector("textarea[name=hour]");
  var xIntroduction = document.querySelector("textarea[name=introduction]");
  var xTelDivContainer = document.querySelector("#x-tel-div-container");
  //태그추가해야함
  var xReservationAccept = document.querySelector("#reservationAccept");
  var xMaxMember = document.querySelector("#maxMember");
  //파일업로드 추가해야함


  // 3) 서버에서 데이터 가져오기
  fetch(`/store/get?storeNo=${storeNo}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      // 4) 상세 정보를 화면에 출력한다.
      if (result.status == "fail") {
        window.alert("서버 요청 오류!");
        console.log(result.data);
        return;
      }
      
      var store = result.data;
      
      xStoreName.value = store.storename;
      xAddress.value = store.address;
      xTel.value=store.tel;
      xHour.value = store.hour;
      xIntroduction.value = store.introduction;
      xBusinessRegistrationNo.value = store.businessRegistrationNo;
      //태그추가해야함 
      xReservationAccept.value = store.reservationAccept;
      xMaxMember.value = store.maxMember;
      //파일업로드추가해야함 
   
  /* if (store.Img != null) {
        xPhoto.src = "/store/img?filename=" + store.img;
      }*/
    });

  document.querySelector("#next").onclick = function() {
    if (xStoreName.value == "" ||  xTel.value == "" || xHour.value == "" ) {
      window.alert("필수 입력 항목이 비어 있습니다.");
      return;
    }
 
  
    var fd = new FormData(document.forms.namedItem("form1"));
    
    fetch("/store/update", {
        method: "POST",
        body: new URLSearchParams(fd)
      }).then(function(response) {
        return response.json();
      })
      .then(function(result) {
        if (result.status == "success") {
          location.href = "mypage(CEO)/storeChange2.html";
        } else {
          window.alert("주점 변경 실패!");
          console.log(result.data);
        }
      });
  };
 
 
    document.querySelector("#exit").onclick = function() {
        window.location.href = "../main/main.html";
      };
    

  document.querySelector("#delete").onclick = function() {
    fetch(`/store/delete?storeNo=${storeNo}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) { 
        if (result.status == "success") {
          location.href = "mypage(CEO)/storeChange.html";
        } else {
          window.alert("주점 삭제 실패!");
          console.log(result.data);
        }
      });
      
  };
  