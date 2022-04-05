console.log(allStoreDataList)

// category-tab
const lightBtn = document.querySelector('.store-category-sort');
lightBtn.addEventListener("click",function(e){
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act');
    e.target.classList.toggle('act');
  }
});

// next, pre button
const next = document.querySelector('.next-store');
const pre = document.querySelector('.pre-store');

window.onload = function () {
  let storeAll = document.querySelectorAll('.storeContents-imgCard');
  console.log("end : " + storeAll.length)

  // 주점 리스트 초기화
  for (let i=1; i < storeAll.length; i++) {
    storeAll[i].style.display = "none";
  }

  let cursor = 1;
  let endPage = storeAll.length;

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
    if (cursor == endPage) {
      console.log("range out");
    } else if (cursor == 0) {
        cursor += 1;
        moveAl(cursor);
        cursor += 1;
        console.log("cursor : " + `${cursor}`);
      } else {
        moveAl(cursor);
        cursor += 1;
        console.log("cursor : " + `${cursor}`);
      }
  });

  pre.addEventListener("click", () => {
    if (cursor == endPage) {
      cursor -= 2;
      if (-1 < cursor) {
        moveAl(cursor);
        console.log("cursor : " + `${cursor}`);
      } else {
        console.log("range out")
      }
    } else {
      if (0 < cursor) {
        cursor -= 1;
        if (cursor == 1) {
          storeAll[cursor].style.display = "none"
          storeAll[cursor-1].style.display = "flex"
          return;
        }
        moveAl(cursor);
        console.log("cursor : " + `${cursor}`);
      } else {
        console.log("range out")
      }
    }
  });
} // onload END


for (let i = 0; i < allStoreDataList.length; i++) {
  console.log(allStoreDataList[i]) 
}

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
  };

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();


for (var i = 0; i < positions.length; i ++) {

  let address = positions[i].address
  let name = positions[i].name

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

          // 커스텀 오버레이를 지도에 표시합니다
          customOverlay.setMap(map);

          map.setCenter(coords);
      } else {
          alert('검색실패')
      }
  });
}


// test map list
var positions = [
  {   
      name: '카카오', 
      address: '제주특별자치도 제주시 첨단로 242'
  },
  {   
      name: '광교호수공원',
      address: '경기 수원시 영통구 하동 1020'
  },
  {   
      name: '매탄공원',
      address: '경기 수원시 영통구 매탄동 1279-3'
  },
  {   
      name: '공원',
      address: '경기 수원시 영통구 매탄로 185'
  }
];







