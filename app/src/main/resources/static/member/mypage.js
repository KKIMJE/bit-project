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
  var xNickname = document.querySelector(".my-nickname");
  var xEmail = document.querySelector(".my-email");
  let xMemberPhoto = document.querySelector(".my-profile")
  let ceoBtnDiv = document.querySelector(".ceo-btn-div")

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
        xNickname.innerHTML = member.nickName;
        xEmail.innerHTML = member.email;
        $(xMemberPhoto).attr("src", `/member/photo?filename=150x150_${member.mimg}`);

        let addCeo = `<button type="button" id="ceo-account-btn">사장님 계정 추가하기</button>`
        let ceoPage = `<button type="button" class="ceo-page-btn" onclick="location.href='/ceo/mypage.html'">사장님 페이지 이동</button>`


        if (member.storeCount == 0) {
          ceoBtnDiv.innerHTML = addCeo
        } else {
          ceoBtnDiv.innerHTML = ceoPage
        }
          });




        // sns계정추가해야함
