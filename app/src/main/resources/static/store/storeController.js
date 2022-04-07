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


  let storeAll = document.querySelectorAll('.storeContents-imgCard');

  // 주점 리스트 초기화
  for (let i=1; i < storeAll.length; i++) {
    storeAll[i].style.display = "none";
  }

  let cursor = 0;
  let endPage = storeAll.length;

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


  // == Map Controller ==
  var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
  };

  // 지도를 생성합니다    
  var map = new kakao.maps.Map(mapContainer, mapOption); 

  // 주소-좌표 변환 객체를 생성합니다
  var geocoder = new kakao.maps.services.Geocoder();

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
    
              map.setCenter(coords);
          } else {
              console.log(`${name}, ${address} 주소검색 실패`)
          }
      });
    }
  }

  // 맵 초기화면 세팅
  let initialNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  markerMaker(allStoreDataList, initialNum)


}, 100); // setTime END


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

// heart
const fHeartBtn = document.querySelector('#fHeart')
const sHeartBtn = document.querySelector('#sHeart')
$(document).ready(function() {
  $(sHeartBtn).click(() => console.log("okok"))
})
// fHeartBtn.addEventListener("click", () => classList.replace(fHeartBtn, sHeartBtn))
// fHeartBtn.addEventListener("click", () => console.log("okok"))
