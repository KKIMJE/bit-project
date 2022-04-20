$(document).ready(function() {
	$('#summernote').summernote({
    toolbar: [
        // [groupName, [list of button]]
        ['fontname', ['fontname']],
        ['fontsize', ['fontsize']],
        ['style', ['bold', 'italic', 'underline','strikethrough', 'clear']],
        ['color', ['forecolor','color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['insert',['picture']]
      ],
      fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New','맑은 고딕','궁서','굴림체','굴림','돋움체','바탕체'],
      fontSizes: ['8','9','10','11','12','14','16','18','20','22','24','28','30','36','50','72'],
		  height: 400,                 // 에디터 높이
		  minHeight: null,             // 최소 높이
		  maxHeight: null,             // 최대 높이
		  focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
		  lang: "ko-KR",					// 한글 설정
		  placeholder: '내용을 입력해주세요',	//placeholder 설정
      onImageUpload: function(files, editor, welEditable) { sendFile(files[0], editor, welEditable); } // 파일 업로드 - 임의

	});
});


  /*****************
    모달 지도 생성  
  *****************/
//       var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
//       var options = { //지도를 생성할 때 필요한 기본 옵션
//         center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
//         level: 3 //지도의 레벨(확대, 축소 정도)
//       };
      
//       var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

//       // 지도 표시 영역이스타일이 잡히고 난 후 map.relayout()을 호출한다.
//       setTimeout(function(){ map.relayout(); }, 1500);

//       // kakao.maps.event.addListener(map, 'dragend', function() {
//       //   setTimeout(function(){ map.relayout(); }, 1000);
//       // }

      
// /********************************
//     geolocation으로 현위치 지정
// *******************************/

// // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
// if (navigator.geolocation) {
    
//   // GeoLocation을 이용해서 접속 위치를 얻어옵니다
//   navigator.geolocation.getCurrentPosition(function(position) {
      
//       var lat = position.coords.latitude, // 위도
//           lon = position.coords.longitude; // 경도

//           var locPosition = new kakao.maps.LatLng(lat, lon);
//           // 지도 중심좌표를 접속위치로 변경합니다
//           map.setCenter(locPosition);    
//   });
  
// } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
  
//   var locPosition2 = new kakao.maps.LatLng(33.450701, 126.570667)
//       // 지도 중심좌표를 접속위치로 변경합니다
//       map.setCenter(locPosition2); 
// }



/*********************************
  버튼 클릭시 생성되는 모달 변경
*********************************/

// 모달 엄마에 넣어. if 위에 전역변수로 str을 선언하고. 엄마태그 안에 자식 태그인 str을 추가해라

$(".btn").on('click', function(e){
  console.log(e.target.id);
  let ptarget = e.target.id;

  if (ptarget == "p-date") {
    ptarget = 1;
    console.log(ptarget);
  }


  let str = null;

  switch (ptarget) {
    // case p-location :
    //   alert('선택한 값은 1002입니다.');
    //   break;

    case 1 :
      str = "룰루랄라";


    //  str += '<div class="modal-dialog">' 
    // + '<div class="modal-content">' 
    // + '<div class="modal-header">' 
    // + '<h5 class="modal-title" id="exampleModalLabel">모임을 원하는 날짜를 지정해주세요</h5>' 
    // + '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' 
    // + '</div>'
    // + '<div class="modal-body">'

    
    // + '</div>'
    // + '</div>'      
    // + '</div>'
  
    $('.p-option').html(str);
      break;

    // case p-type :
    //   alert('선택한 값은 1002입니다.');
    //   break;
    // case p-limit :
    //   alert('선택한 값은 1003입니다.');
    //   break;
    // case p-fee :
    //   alert('선택한 값은 1004입니다.');
    //   break;
    // case p-member :
    //   alert('선택한 값은 1004입니다.');
    //   break;
    // default :
    //   alert('선택한 값이 없습니다.');
    //   break;
  }





//   if(e.target.id === 'btn-1'){
//     // 1번 버튼을 클릭했을 때 구현하고 싶은 코드
// }else if(e.target.id === 'btn-2'){
//     // 2번 버튼을 클릭했을 때 구현하고 싶으 코드
// }
});








//   let pbody= '<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">'
//   + '<div class="modal-dialog">' + '<div class="modal-content">' + '<div class="modal-header">' 
//   + '<h5 class="modal-title" id="exampleModalLabel">모임을 원하는 날짜를 지정해주세요</h5>' 
//   + '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' 
//   + '</div>'
//   + '<div class="modal-body">'
//   + '</div>'
//   + '</div>'      
//   + '</div>'
//   + '</div>'

//   $('.p-option').html(pbody);
// });


