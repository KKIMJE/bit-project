/***********************
  summernote 기본 설정
***********************/

$(document).ready(function() {
	$('#summernote').summernote({
    toolbar: [
        // [groupName, [list of button]]
        ['fontname', ['fontname']],
        ['fontsize', ['fontsize']],
        ['style', ['bold', 'italic', 'underline','strikethrough', 'clear']],
        ['color', ['forecolor','color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']]
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


/*********************************
  버튼 클릭시 생성되는 모달 변경
*********************************/

$(".pbtn").on('click', function(e){
  console.log(e.target.id);
  let ptarget = e.target.id;

  if (ptarget == "p-location") {
    ptarget = 1;
    console.log(ptarget);
  } else if (ptarget == "p-date") {
    ptarget = 2;
    console.log(ptarget);
  } else if (ptarget == "p-type") {
    ptarget = 3;
    console.log(ptarget);
  } else if (ptarget == "p-limit") {
    ptarget = 4;
    console.log(ptarget);
  } else if (ptarget == "p-fee") {
    ptarget = 5;
    console.log(ptarget);
  } else if (ptarget == "p-member") {
    ptarget = 6;
    console.log(ptarget);
  }

  let strT = null;
  let strB = null;
  let strF = null;

  switch (ptarget) {
    case 1 : // 장소
    
      strT = "지도를 움직여 모임 위치를 지정해주세요";
      strB = '<div id="map">'
      + '<div class="my-address">'
      + '<span id="my-address-center"></span>'
      + '</div>'
      + '<div class="my-address-marker">'
      + '<i class="fa-solid fa-location-dot"></i>'
      + '</div>';

      $('.modal-body').html(strB);

/*****************
  모달 지도 생성  
*****************/
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };
    
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 지도 표시 영역이스타일이 잡히고 난 후 map.relayout()을 호출한다.
    setTimeout(function(){ map.relayout(); }, 1500);

    
/******************************
  geolocation으로 현위치 지정
******************************/

// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
  
// GeoLocation을 이용해서 접속 위치를 얻어옵니다
navigator.geolocation.getCurrentPosition(function(position) {
    
    var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도

        var locPosition = new kakao.maps.LatLng(lat, lon);
        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);    
});

} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

var locPosition2 = new kakao.maps.LatLng(33.450701, 126.570667)
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition2); 
}


/***********************************
    중심좌표 변경에 따른 주소 출력 
***********************************/

var myposition;

// 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
kakao.maps.event.addListener(map, 'center_changed', function() {

    // 지도의 중심좌표를 얻어옵니다 
    var latlng = map.getCenter(); 
    
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    var coord = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng());
    var callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            var resultDiv = document.getElementById('my-address-center');
            myposition = result[0].address.address_name;
            resultDiv.innerHTML = myposition;
        }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);

});

// -------------------------------------------------------------------------------하는중
/***********************
    설정된 주소 넘기기
***********************/
$('.modal-footer button').click(function() {
    
  // 세션에 이 정보를 어떻게 저장해???????????
  //location.href = `partyList.html?myposition=${myposition}`;
  // console.log(myposition);
  //location.href = "partyList.html";
});

      $('.modal-title').html(strT);
      $('.modal-footer span').html(strF);
      break;

    case 2 : // 일정
    strT = "모임을 원하는 날짜를 지정해주세요";
    strB = '<input name="date" type="datetime-local">';
    strF = '';
  
    $('.modal-title').html(strT);
    $('.modal-body').html(strB);
      break;

    case 3 : // 주종
    strT = "마시고 싶은 주종을 선택해주세요";
    strB = '<p>주종'
    + '<select name="type">'
    + '<option value="1">전체</option>'
    + '<option value="2">소주</option>'
    + '<option value="3">맥주</option>'
    + '<option value="4">와인</option>'
    + '<option value="5">막걸리</option>'
    + '<option value="6">양주</option>'
    + '<option value="7">사케</option>'
    + '<option value="8">전통주</option>'
    + '</select>'
    + '</p>';

    strF = '';
  
    $('.modal-title').html(strT);
    $('.modal-body').html(strB);
    $('.modal-footer span').html(strF);
      break;

    case 4 : // 주량
    strT = "원하시는 참여자의 주량을 적어주세요";
    strB = '<input name="limit" type="text">';
    strF = '';
  
    $('.modal-title').html(strT);
    $('.modal-body').html(strB);
    $('.modal-footer span').html(strF);
      break;

    case 5 : // 회비
    strT = "모임 회비를 적어주세요";
    strB = '<input name="fee" type="number" min="0" max="10000000">'
    + '<span>원</span>'
    strF = '';
  
    $('.modal-title').html(strT);
    $('.modal-body').html(strB);
    $('.modal-footer span').html(strF);
      break;

    case 6 : // 인원
    strT = "원하시는 최대 인원을 선택해주세요";
    strB = '<select name="type">'
    + '<option value="1">1</option>'
    + '<option value="2">2</option>'
    + '<option value="3">3</option>'
    + '<option value="4">4</option>'
    + '<option value="5">5</option>'
    + '<option value="6">6</option>'
    + '<option value="7">7</option>'
    + '<option value="8">8</option>'
    + '<option value="9">9</option>'
    + '<option value="10">10</option>'
    + '</select>명'
    strF = '';
  
    $('.modal-title').html(strT);
    $('.modal-body').html(strB);
    $('.modal-footer span').html(strF);
      break;
  }
});

/**********************************
  모임옵션에 따른 모달창 크기 변경
**********************************/
$('#p-location').click(function(){
  $("#exampleModal > div").removeClass("pmodal-size");
  $("#exampleModal > div").addClass("mmodal-size");
})

$("#p-date, #p-type, #p-limit, #p-fee, #p-member").click(function(){
  $("#exampleModal > div").removeClass("mmodal-size");
  $("#exampleModal > div").addClass("pmodal-size");
})


/**************
  나가기 버튼
**************/
document.querySelector(".exit").onclick = function() {
  location.href = "partyList.html";
};