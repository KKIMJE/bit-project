// ==== Map Controller ====
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    // 지도의 중심좌표
    center: new kakao.maps.LatLng(33.450701, 126.570667), 
    level: 3 // 지도의 확대 레벨
};

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

// 마커구성
let markerList = []
function markerMaker(store, numList) {
  
  // 기존마커 삭제
  for (let j = 0; j < markerList.length; j++) {
    markerList[j].setMap(null)
  }
  // 마커 생성
  for (let i = 0; i < numList.length; i ++) {

    let address = store[numList[i]].address
    let name = store[numList[i]].name
  
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function(result, status) {
    
        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  
            // 커스텀 오버레이를 생성합니다
            var customOverlay = new kakao.maps.CustomOverlay({
                position: coords,
                content: `<div id="mapInfo"><span>${name}</span></div>`   
            });

            markerList.push(customOverlay)

            // 커스텀 오버레이를 지도에 표시합니다
            customOverlay.setMap(map);
            
            // 마지막으로 찍은 마커로 중심을 이동한다.
            // map.setCenter(coords);
        } else {
            console.log(`${name}, ${address} 주소검색 실패`)
        }
    });
  }
}

// 데이터 로딩까지 아주 잠깐만 기다립니다
setTimeout(() => {

  let storeNum = []
  let numStart = 0
  let numEnd = 10
  let mapCursor

  let numMaker = function (data) {
    for (var j = 0; j < data.length; j ++) {
      storeNum.push(j)
    }
  }
  numMaker(allStoreDataList)

  // 총 페이지 수
  let limitCursor = Math.floor((storeNum.length + 10) * 0.1)
  console.log("총페이수 : " + limitCursor)

  // == next, pre button ==
  const next = document.querySelector('.next-store');
  const pre = document.querySelector('.pre-store');
  
  // 주점 리스트 초기화
  let storeAll = document.querySelectorAll('.storeContents-imgCard');
  for (let i=1; i < storeAll.length; i++) {
    storeAll[i].style.display = "none";
  }

  let cursor = 0;
  let endPage = storeAll.length;

  // ==== 주점리스트 next, pre Btn ====
  // cursor를 기준으로 앞뒤로 모두 none으로 변경
  const moveAl = function (cursor) {
    if (storeAll[cursor].style.display == "none") {
      storeAll[cursor].style.display = "flex"
    }
    for (let i=cursor+1; i < endPage; i++) {
      storeAll[i].style.display = "none";
    }
    for (let i=cursor-1; i < cursor; i--) {
      if (i == -1) {
        break;
      };
      storeAll[i].style.display = "none";
    }
  }
  
  next.addEventListener("click", () => {
    if (cursor+1 == endPage) {
      console.log("next: Over page")
    } else {
      cursor += 1;
      console.log("cursor : " + `${cursor}`);
      moveAl(cursor);
    } 
  });

  pre.addEventListener("click", () => {
    if (cursor == 0) {
      console.log("pre: Over page")
    } else {
      cursor -= 1;
      moveAl(cursor);
      console.log("cursor : " + `${cursor}`);
    }
  });


  // ==== Map next, pre Btn ====
  next.addEventListener("click", function(){

    if (limitCursor == mapCursor) {
      console.log(limitCursor)
      console.log("next: Over page")
    } else {
      numStart += 10
      numEnd += 10
      console.log(storeNum.slice(numStart, numEnd))

      let loopNum = storeNum.slice(numStart, numEnd)
      markerMaker(allStoreDataList, loopNum)

      mapCursor = numEnd/10
      console.log("Map : " + mapCursor)
    }
  });

  pre.addEventListener("click", function(){
    if (numStart == 0) {
      console.log("pre: Over page")
    } else {
      numStart -= 10
      numEnd -= 10
      console.log(storeNum.slice(numStart, numEnd))

      let loopNum = storeNum.slice(numStart, numEnd)
      markerMaker(allStoreDataList, loopNum)

      mapCursor = numEnd/10
      console.log("Map : " + mapCursor)
    }
  });

  // 맵 초기화면 세팅
  let initialNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  markerMaker(allStoreDataList, initialNum)

}, 50); // setTime END


// == category-tab ==
const lightBtn = document.querySelector('.store-category-sort')
lightBtn.addEventListener("click",function(e){
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act')
    e.target.classList.toggle('act')
  }
});

// category All Btn
const xAllBtn = document.querySelector('#xAllBtn')
xAllBtn.addEventListener("click", () => location.reload())



// ==== Map 현재위치 표시 ====
// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
  // GeoLocation을 이용해서 접속 위치를 얻어옵니다
  navigator.geolocation.getCurrentPosition(function(position) {
      
      var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
      
      var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
      
      // 마커와 인포윈도우를 표시합니다
      displayMarker(locPosition, message);
          
    });
  
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
  
  var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
      message = 'geolocation을 사용할수 없어요..'
      
  displayMarker(locPosition, message);
}


// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

// 마커를 생성합니다
var marker = new kakao.maps.Marker({  
    map: map, 
    position: locPosition
}); 

// 인포윈도우에 표시할 내용
var iwContent = message, 
    iwRemoveable = true;

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    content : iwContent,
    removable : iwRemoveable
});

// 인포윈도우를 마커위에 표시합니다 
// infowindow.open(map, marker);

// 지도 중심좌표를 접속위치로 변경합니다
map.setCenter(locPosition);
}