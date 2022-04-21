/*자기소개 내용  
function counter() {
var content = document.getElementById('x-self-intro').value;
if(content.length >300) {
  alert("최대 300자까지 입력 가능합니다.");
  content = content.substring(0,300);
  document.getElementById('x-self-intro').value=content;
} 
//content += "<br>" + content.length + "/300자" ;
// 요기서 textarea 안에 글자 count를 넣어준다. 그런데 textarea안에서 html tag가 동작 안하는 듯...
document.getElementById('x-self-intro').innerHTML = content + "\n" + content.length+"/300자";
  document.getElementById('count').innerHTML = content.length +'/300자';
 //document.getElementById('x-self-intro').style.textAlign = "right";
  
}*/

/* 글자크기 */ 
document.getElementById("x-self-intro").style.fontSize = '15px';


/*이미지 변경*/
function toggleImg() {
    document.getElementById("ig").src = "../img/logo.png";
  }
  
  /*모달창*/
  $().ready(function() {
    $("#delete").click(function () {
                Swal.fire({
                    icon: 'question',
                    text: '탈퇴하시겠습니까?',
                    showCancelButton:true,
                    confirmButtonColor:'#90d483',
                    cancelButtonColor: '#90d483',
                    confirmButtonText:'확인',
                    cancelButtonText:'취소'
                }).then((result) => {
                  if(result.isConfirmed) {
                    //location.href = "/member/personalInfo.html";
                   location.href="../main/main.html";
                  }else{
                     location.href = "/member/personalInfo.html";
                  }
                })
            });
  }); // end of ready
        
        
  /* 삭제 추가 */ 
 // 1) URL에서 쿼리스트링(query string)을 추출한다.

  var arr = location.href.split("?"); 
  console.log(arr);
  var mno;
  
  if (arr.length > 1) {

    // http://localhost:8080/mypage(CEO)/storeChange.html arr[0]    storeNo=36&parm3=44 arr[1]

    var qs = arr[1];
    console.log(qs);
  
    var params = new URLSearchParams(qs);
    mno= params.get("mno"); 

    
    console.log(mno);
  } // if end
  
  //if (storeNo == null) {
  //    alert("해당번호의 가게가 없습니다!");
  //    throw "파라미터 오류!";
  // }

  //실명, 닉네임(수정), 성별(수정), 생년월일(수정), 이메일주소, 비밀번호(수정), 전화번호(수정),sns계정(수정), 자기소개(수정) 
  var xMno = document.querySelector("input[name=mno]");
  // 이미지 추가해야함 
  var xName = document.querySelector("input[name=name]");
  var xNickname = document.querySelector("input[name=nickname]"); 
  var xGender = document.querySelector("input[name=gender]");
  var xBirth = document.querySelector("input[name=birth]");
  var xEmail = document.querySelector("input[name=email]");
  var xPassword = document.querySelector("input[name=password]"); 
  var xTel = document.querySelector("input[name=tel]");
  // sns계정추가해야함
  var xSelfIntroduction = document.querySelector("textarea[name=selfIntroduction]");
  
  if( mno ) {
    // 3) 서버에서 데이터 가져오기
    fetch(`/member/get?no=${mno}`)
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
        xMno.value = member.mno;
        // 이미지 추가해야함 
        xName.value = member.name;
        xNickname.value = member.nickname;
        if( member.gender == "false" )
          xGender.value="남자";
        else 
          xGender.value="여자";
        xBirth.value = member.birth;
        xEmail.value = member.email;
        xTel.value = member.tel;
        xPassword.value=member.password;
        xSelfIntroduction.value = member.selfIntroduction;
        // sns계정추가해야함
     
   
        /* if (member.Img != null) {
          xPhoto.src = "/member/img?filename=" + member.img;
        }*/
      });
    } else {
      // if mno is null... 
    }

    /*  document.querySelector("#change").onclick = function() {
    if (xStoreName.value == "" ||  xTel.value == "" || xHour.value == "" ) {
      window.alert("필수 입력 항목이 비어 있습니다.");
      return;
    }*/
    
    
    if(false) {
      
    
    var fd = new FormData(document.forms.namedItem("form1"));
    
    fetch("/member/update", {
        method: "POST",
        body: new URLSearchParams(fd)
      }).then(function(response) {
        return response.json();
      })
      .then(function(result) {
        console.log(result); // 1
        //if (result.status == "success") {
          if (result == 1) {
          location.href = "/member/personalInfo.html?mno="+mno;
        } else {
          window.alert("프로필 변경 실패!");
          console.log(result.data);
        }
      });
      }
  
  /* 수정 버튼 */ 
    document.querySelector(".submit-change-btn").onclick = function() {
        window.location.href = "/member/personalInfo.html";
      };

 /* 탈퇴하는거니까 정보 삭제 
  document.querySelector("#delete").onclick = function() {
    fetch(`/member/delete?no=${mno}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) { 
        //if (result.status == "success") {
        if (result == 1) {
          location.href = "/";
        } else {
          window.alert("프로필 삭제 실패!");
          console.log(result);
        }
      });
      
  };*/ 
  
  
  
