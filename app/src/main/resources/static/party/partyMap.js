/****************
    지도 생성  
******************/

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


/********************************
    geolocation으로 현위치 지정
*******************************/

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


/******************
    컨트롤 생성  
******************/

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


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



/***********************
    설정된 주소 넘기기
***********************/
$('.address-complete').click(function() {
    
    location.href = `partyList.html?myposition=${myposition}`;
    // console.log(myposition);
    //location.href = "partyList.html";
});