/*$().ready(function() {
    $("#ceo-account-btn").click(function () {
                Swal.fire({
                    icon: 'success',
                    text: '주점을 등록하면 사장님 계정이 생성됩니다.',
                    showCancelButton:true,
                    confirmButtonColor:'#90d483',
                    cancelButtonColor: '#90d483',
                    confirmButtonText:'들어가기',
                    cancelButtonText:'나가기'
                }).then((result) => {
                  if(result.isConfirmed) {
                    location.href = "../../memberBoss/MemberBoss.html";
                  }
                })
            });
        });*/

/* 주소입력 */
window.onload = function(){
    document.getElementById("address_kakao").addEventListener("click", function(){ //주소입력칸을 클릭하면
        //카카오 지도 발생
        new daum.Postcode({
            oncomplete: function(data) { //선택시 입력값 세팅
                document.getElementById("address_kakao").value = data.address; // 주소 넣기
                document.querySelector("input[name=address_detail]").focus(); //상세입력 포커싱
            }
        }).open();
    });
}

  
   /* 삭제 추가 */ 
      // 1) URL에서 쿼리스트링(query string)을 추출한다.
   var arr = location.href.split("?"); 
  console.log(arr);

  if (arr.length == 1) {
    alert("요청 형식이 올바르지 않습니다.")
    throw "URL 형식 오류!";
  }

  var qs = arr[1];
  console.log(qs);

  
  var params = new URLSearchParams(qs);
  var storeNo= params.get("storeNo"); 

  if (storeNo == null) {
    alert("해당번호의 가게가 없습니다!");
    throw "파라미터 오류!";
  }
  console.log(no);

//가게명 주소 주점테마 전화번호 영업시간 가게소개 사업자등록번호 , 태그(아직추가안함), 파일업로드 (추가안함)
  var xStoreName = document.querySelector("input[name=storeName]");
  var xAddress = document.querySelector("input[name=address]"); 
  var xOptionDivContainer = document.querySelector("#x-option-div-container");
  var xTel = document.querySelector("input[name=tel]");
  var xHour = document.querySelector("textarea[name=hour]");
  var xIntroduction = document.querySelector("textarea[name=introduction]");
  var xBusinessRegistrationNo = document.querySelector("input[name=businessRegistrationNo]");
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
          location.href = "mypage(CEO)/storeChange.html";
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
  