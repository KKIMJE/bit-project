/***********************
  summernote 기본 설정
***********************/
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
		  height: 300,                 // 에디터 높이
		  minHeight: null,             // 최소 높이
		  maxHeight: null,             // 최대 높이
		  focus: true,                 // 에디터 로딩후 포커스를 맞출지 여부
		  lang: "ko-KR"			      	 // 한글 설정
	});


/****************************
  해당 모임의 정보 가져오기
***************************/
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
    alert("해당 모임이 존재하지 않습니다.");
    throw "파라미터 오류!";
}

var pTitle = document.querySelector(".party-title");

var pLocation = document.querySelector("input[name=address]");
var pDate = document.querySelector("input[name=meetingDate]");
var pAlcoholType = document.querySelector("input[name=alcoholType]");
var pAlcoholLimit = document.querySelector("input[name=alcoholLimit]");
var pFee = document.querySelector("input[name=partyFee]");
var pMember = document.querySelector("input[name=maxMember]");

var content;

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
    //console.log(result)
    var party = result.data;

    console.log(party)
    
    pTitle.value = party.title;

    console.log(party.contents);
    content = party.contents;

    //console.log("#summernote");

    pLocation.value = party.address
    pDate.value = party.meetingDate;
    pAlcoholType.value = party.alcoholType;
    pAlcoholLimit.value = party.alcoholLimit;
    pFee.value = `${party.partyFee}원`;
    pMember.value = `${party.maxMember}명`;
    //pContents.innerHTML = `${party.contents}`;
    //pNickname2.innerHTML = party.writer.nickName;
  });

setTimeout(() => {$('.note-editable').html(content)},200) // text를 html로 바꿨음



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

  // 실행 전 중복 이벤트 제거
  $('.modal-footer button').off("click");

  switch (ptarget) {
    //------장소-------
    case 1 :

      strT = "지도를 움직여 모임 위치를 지정해주세요";
      strB = '<div id="map">'
      + '<div class="my-address">'
      + '<span id="my-address-center"></span>'
      + '</div>'
      + '<div class="my-address-marker">'
      + '<i class="fa-solid fa-location-dot"></i>'
      + '</div>';

      $('.modal-title').html(strT);
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

    /*********************************
      중심좌표 변경에 따른 주소 출력
    **********************************/

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

    $('.modal-footer span').data('location',`${myposition}`);

    /******************
    설정된 주소 넘기기
    ******************/
    $('.modal-footer button').click(function() {
      $('#ps-location input').val(`${myposition}`);
    });

    break;

    //------일정-------
    case 2 :
    var meetingDate;

    strT = "모임을 원하는 날짜를 지정해주세요";
    strB = '<input type="datetime-local" id="meetingDate">';

    $('.modal-title').html(strT);
    $('.modal-body').html(strB);

    /******************
    설정된 일정 넘기기
    *******************/
    $('.modal-footer button').click(function() {
    meetingDate = $('#meetingDate').val();
    $('.modal-footer span').data('date', `${meetingDate}`);
    $('#ps-date input').val(`${meetingDate}`);
    })

    break;


    //------주종-------
    case 3 :
    strT = "마시고 싶은 주종을 선택해주세요";
    strB = '<select name="alcoholType">'
    + '<option value="1">전체</option>'
    + '<option value="2">소주</option>'
    + '<option value="3">맥주</option>'
    + '<option value="4">와인</option>'
    + '<option value="5">막걸리</option>'
    + '<option value="6">양주</option>'
    + '<option value="7">사케</option>'
    + '<option value="8">전통주</option>'
    + '</select>';

    $('.modal-title').html(strT);
    $('.modal-body').html(strB);

    /******************
    설정된 주종 넘기기
    ******************/
    $('.modal-footer button').click(function() {
      let type = $('select[name=alcoholType] option:selected').text();
      $('.modal-footer span').data('atype', `${type}`);
      $('#ps-type input').val(`${type}`);
    });

      break;

    //------주량-------
    case 4 :
    strT = "원하시는 참여자의 주량을 적어주세요";
    strB = '<input id="alcoholLimit" type="text">';


    $('.modal-title').html(strT);
    $('.modal-body').html(strB);

    /******************
    설정된 주량 넘기기
    ******************/
    $('.modal-footer button').click(function() {
      let limit = $('#alcoholLimit').val();
      $('.modal-footer span').data('alimit', `${limit}`);
      $('#ps-limit input').val(`${limit}`);
    });

      break;


    //------회비-------
    case 5 :
    strT = "모임 회비를 적어주세요";
    strB = '<input id="alcoholFee" type="number" min="0" max="10000000">'
    + '<span>원</span>'


    $('.modal-title').html(strT);
    $('.modal-body').html(strB);

    /******************
    설정된 회비 넘기기
    ******************/
    $('.modal-footer button').click(function() {
      let fee = $('#alcoholFee').val();
      $('.modal-footer span').data('afee', `${fee}`);
      $('#ps-fee input').val(`${fee}`);
    });

      break;


    //------인원-------
    case 6 :
    strT = "원하시는 최대 인원을 선택해주세요";
    strB = '<select name="maxMember">'
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


    $('.modal-title').html(strT);
    $('.modal-body').html(strB);

    /******************
    설정된 인원 넘기기
    ******************/
    $('.modal-footer button').click(function() {
      let member = $('select[name=maxMember] option:selected').text();
      $('.modal-footer span').data('amember', `${member}`);
      $('#ps-member input').val(`${member}`);
    });
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



/****************
  폼 데이터 저장
****************/

//저장버튼 클릭
$('.save').click(function() {
  var pTitle = document.querySelector("input[name=title]");
  var pContent = document.querySelector("textarea[name=contents]");
  var pLocation = document.querySelector("input[name=address]");
  var pDate = document.querySelector("input[name=meetingDate]");
  var pType = document.querySelector("input[name=alcoholType]");
  var pLimit = document.querySelector("input[name=alcoholLimit]");
  var pFee = document.querySelector("input[name=partyFee]");
  var pMember = document.querySelector("input[name=maxMember]");
    
  if (pTitle.value == "" || pContent.value == "" || pLocation.value == "" || pDate.value == "" || pType.value == "" || pLimit.value == "" || pFee.value == "" || pMember.value == "") {
    alert("필수 입력 항목이 비어 있습니다.");
    return;
  } 

    var pb = new FormData(document.forms.namedItem("partyBoard"));
    
    
    fetch(`/party/update?no=${no}`, {
        method: "POST",
        body: new URLSearchParams(pb)
      }).then(function(response) {
        return response.json();
      })
      .then(function(result) {
        console.log(result);
        if (result.status == "success") {
          location.href = "partyList.html";
        } else {
          alert(result.data);
        }
      });
});

/**************
  나가기 버튼
**************/
document.querySelector(".exit").onclick = function() {
  location.href = "partyList.html";
};
