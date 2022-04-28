$().ready(function() {
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
        });


 //var xMno = document.querySelector("input[name=mno]");
  // 이미지 추가해야함
  var xNickname = document.querySelector("#nickname");
  var xEmail = document.querySelector("#email");
  
 fetch("/member/getLoginUser")
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        // 4) 상세 정보를 화면에 출력한다.
        if (result.status == "fail") {
          window.alert("서버 요청 오류!");
          console.log(result);
          return;
        }
        console.log(result.data);
        var member = result.data;
       // xMno.value = member.mno;
        // 이미지 추가해야함
        xNickname.value = member.nickName;
        xEmail.value = member.email;
          });

        // sns계정추가해야함
