let allStoreDataList;
let targetLat, targetLon, lat, lon, tagStr;
var markerList = [];
var targetMarkerList = [];
var sortMarkerList = [];
var filterMarkerList = [];
var btnStatus = false; // map next, pre 버튼의 중복 동작 방지
var targetBtnStatus = false;
var sortBtnStatus = false;
var filterBtnStatus = false;
var dValueList = []; // 거리계산값 list (storeList.js에서 사용)
var next = document.querySelector('.next-store');
var pre = document.querySelector('.pre-store');


function loadData(serverInfo){
  // console.log("loadData: " + serverInfo )
  fetch(serverInfo)
      .then(  response => response.json())
      .then(  data => {
          // console.log(data.data)
          allStoreDataList = data.data
          let storeNumList = numMaker(data.data.length)
          storeList(allStoreDataList) // 전체 주점 초기 세팅
          mapMarker(allStoreDataList, [0,1,2,3,4,5,6,7,8,9]) // 전체 맵 초기화면 세팅
          mapNextpreBtnSet(allStoreDataList, storeNumList)
      })
}
function numMaker (n) {
  let nList = []
  for (let j = 0; j < n; j ++) {
    nList.push(j)
  }
  return nList
}


// storeAll list => ImgCard Insert, 주점 위치 찾기
function storeList(xStores) {

  // console.log(xStores)
  $('.imgContainer').empty()
  let listAll = document.querySelector(".imgContainer");
  let count = 0
  let card = true
  let stores = xStores

  for (let i = 0; i < stores.length; i++) {

    if (count == 0) {
      var listDiv = document.createElement("div")
      listDiv.classList.add("storeContents-imgCard")
      listAll.appendChild(listDiv)

      var itemDiv = document.createElement("div")
          itemDiv.classList.add("store-contents-1")
          listDiv.appendChild(itemDiv)

      var itemDiv2 = document.createElement("div")
          itemDiv2.classList.add("store-contents-2")
          listDiv.appendChild(itemDiv2)

    } else if (count % 10 == 0) {
      var listDiv = document.createElement("div")
      listDiv.classList.add("storeContents-imgCard")
      listAll.appendChild(listDiv)

      var itemDiv = document.createElement("div")
      itemDiv.classList.add("store-contents-1")
      listDiv.appendChild(itemDiv)

      var itemDiv2 = document.createElement("div")
      itemDiv2.classList.add("store-contents-2")
      listDiv.appendChild(itemDiv2)
    }

    if (count % 5 == 0) {
      if (card == true) {
        card = false
      } else {
        card = true
      }
    }

    let storeName = stores[i].storeName
    let stras = printStar(stores[i].evaluationScore)
    let storeOper = printOper(stores[i].oper)
    let heart = printheart(stores[i].mno, stores[i].storeNo)
    // stono 거리값과의 비교를 위한 stono
    tagStr = `<div class="img-xbox" data-stono="${i}"> 
      <div class="xImg box">
        ${heart}
        <a class="store-link" href="storeDetail.html?no=${stores[i].storeNo}">
          <img src="../asset/img/store/storelist${i}.jpg" class="xImg-ori">
        </a>
      </div>
      <div class="xImg-contents">
        <div class="xImg-content">
          <div class="xImg-content-t">${storeName}</div>
          <div class="xImg-star">${stras}</div>
          <div class="xImg-d" data-address="${stores[i].address}">🚧계산중🚧</div>
        </div>
        <div class="storeOpen">${storeOper}</div>
      </div>
    </div>`

    if (card == true) {
      itemDiv2.innerHTML += tagStr
    } else {
      itemDiv.innerHTML += tagStr
    }
    count++
  }

  listDiv.appendChild(itemDiv)
  listDiv.appendChild(itemDiv2)
  
  computeDistance()
};
// 거리계산
function computeDistance() {
  let distanceList = []
  $('.xImg-d').each((index, e) => {
    distanceList.push($(e).attr("data-address"))
  })
  
  let geocoder = new kakao.maps.services.Geocoder();
  const addressSearch = address => {
      return new Promise((resolve, reject) => {
        geocoder.addressSearch(address, function(result, status) {
          if (status === kakao.maps.services.Status.OK) {
            resolve({"lat": result[0].y, "lng": result[0].x});
          } else {
            reject(status);
          }
        });
      });
  };

  // GeoLocation을 이용해서 접속 위치를 얻어옵니다
  const geoLocation = () => {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(function(position) {
        resolve({"lat": position.coords.latitude, "lng": position.coords.longitude});
      })
    })
  }

  const distanceLine = (posList, curPos) => {
    return new Promise((resolve) => {

      const dLines = []

      for(const position of posList) {
        // 선 객체 생성
        let linePath = [
          new kakao.maps.LatLng(position.lat, position.lng),
          new kakao.maps.LatLng(curPos.lat, curPos.lng)
        ];

        let polyline = new kakao.maps.Polyline({
          path : linePath
        });

        dLines.push(Math.round(polyline.getLength()))
      }
      resolve(dLines)
    })
  }

  // async-await
  (async () => {
    try {
        const positions = [];
        for(const address of distanceList) {
            const result = await addressSearch(address);
            positions.push(result)
        }
        // console.log(positions)

        const geoResult = await geoLocation()
        // console.log(geoResult)

        const distanceValue = await distanceLine(positions, geoResult)
        // console.log(distanceValue)

        $('.xImg-d').each((index, e) => {
          if (1000 < distanceValue[index]) {
            $(e).html( Math.round((distanceValue[index] * 0.001) ) + "km")
            dValue = Math.round((distanceValue[index] * 0.001) ) + "km"
            dValueList.push({"storeNo":index, "dValue":distanceValue[index]}) 
          } else {
            $(e).html( Math.round(distanceValue[index] ) + "m")
            dValue = Math.round(distanceValue[index] ) + "m"
            dValueList.push({"storeNo":index, "dValue":distanceValue[index]}) 
          }

        })

    } catch (e) {
        console.log(e);
    }
  })();

}
// 영업여부
function printOper(oper) {
  let status = " ";
  if (oper == 1) {
    status = "영업중"
  } else {
    status = "종료"
  }
  return status;
}
// 별점
function printStar(score) {
  // console.log("score: " + score)
  let star = "⭐⭐⭐⭐⭐";
  if (1 == score) {
    star = "⭐"
  } else if(2 == score) {
    star = "⭐⭐"
  } else if(3 == score) {
    star = "⭐⭐⭐"
  } else if(4 == score) {
    star = "⭐⭐⭐⭐"
  } else if(5 == score) {
    star = "⭐⭐⭐⭐⭐"
  } else {
    star = "😥"
  }
  return star;
}
// 주점찜
function printheart(mno, storeNo) {
  if (mno == null || mno == 0) {
    //console.log("해당 주점은 찜이 없습니다.")
    return `<i id="heart" class="b"></i>`
  } else {
    //console.log(`${mno}님이 ${storeNo}를 찜했습니다.`)
    return `<i id="heart" class="fa-heart b fa-solid"></i>`
  }
}


// == next, pre button ==
function nextPreBtnSet() {
  setTimeout(() => {
    // 주점 리스트 초기화 - 페이지 1로 맞추기
    let storeAll = document.querySelectorAll('.storeContents-imgCard');
    for (let i=1; i < storeAll.length; i++) {
      storeAll[i].style.display = "none";
    }
    // cursor를 기준으로 앞뒤로 모두 none으로 변경
    let cursor = 0;
    let endPage = storeAll.length;
    function moveAl(cursor) {
      if (storeAll[cursor].style.display == null || storeAll[cursor].style == null) {
        return
      }
      if (storeAll[cursor].style.display == "none") {
        storeAll[cursor].style.display = "flex"
      } else {
        return
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

      console.log("card next")

      if (cursor+1 == endPage) {
        console.log("next: Over page")
      } else {
        cursor += 1;
        console.log("cursor : " + `${cursor}`);
        moveAl(cursor);
      }
    });
    pre.addEventListener("click", () => {

      console.log("card pre")

      if (cursor == 0) {
        console.log("pre: Over page")
      } else {
        cursor -= 1;
        moveAl(cursor);
        console.log("cursor : " + `${cursor}`);
      }
    });
  }, 500)
  
}

// 초기 로드 세팅
loadData("/store/list")
// 맵 컨트롤 버튼 세팅
btnStatus = true
targetBtnStatus = false
sortBtnStatus = false
filterBtnStatus = false

setTimeout(() => {
  nextPreBtnSet()
}, 150);

// ============= Map 생성 ============= store list 생성후 적용필요
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
mapOption = {
    // 지도의 중심좌표
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3 // 지도의 확대 레벨
};
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
var geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체를 생성합니다

// 마커구성
function mapMarker(xStore, numList) {
  
  // 기존마커 삭제
  for (let j = 0; j < targetMarkerList.length; j++) {
    targetMarkerList[j].setMap(null)
  }
  for (let j = 0; j < markerList.length; j++) {
    markerList[j].setMap(null)
  }
  // 마커 생성
  for (let i = 0; i < numList.length; i ++) {
    // console.log(i)
    // console.log(xStore[numList[i]])
    let address = xStore[numList[i]].address
    let name = xStore[numList[i]].storeName

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
function targetMapMarker(xStore, numList) {

  let store = xStore

  // 기존마커 삭제
  for (let j = 0; j < markerList.length; j++) {
    markerList[j].setMap(null)
  }
  for (let j = 0; j < targetMarkerList.length; j++) {
    targetMarkerList[j].setMap(null)
  }
  // 마커 생성
  for (let i = 0; i < numList.length; i ++) {
    let address = store[numList[i]].address
    let name = store[numList[i]].storeName

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

            targetMarkerList.push(customOverlay)

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
function sortMapMarker(xStore, numList) {

  let store = xStore

  // 기존마커 삭제
  for (let j = 0; j < markerList.length; j++) {
    markerList[j].setMap(null)
  }
  for (let j = 0; j < sortMarkerList.length; j++) {
    sortMarkerList[j].setMap(null)
  }
  for (let j = 0; j < targetMarkerList.length; j++) {
    targetMarkerList[j].setMap(null)
  }
  for (let j = 0; j < filterMarkerList.length; j++) {
    filterMarkerList[j].setMap(null)
  }


  // 마커 생성
  for (let i = 0; i < numList.length; i ++) {
    let address = store[numList[i]].address
    let name = store[numList[i]].storeName

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

            sortMarkerList.push(customOverlay)

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
function filterMarker(xStore, numList) {

  let store = xStore

  // 기존마커 삭제
  for (let j = 0; j < markerList.length; j++) {
    markerList[j].setMap(null)
  }
  for (let j = 0; j < sortMarkerList.length; j++) {
    sortMarkerList[j].setMap(null)
  }
  for (let j = 0; j < targetMarkerList.length; j++) {
    targetMarkerList[j].setMap(null)
  }
  for (let j = 0; j < filterMarkerList.length; j++) {
    filterMarkerList[j].setMap(null)
  }


  // 마커 생성
  for (let i = 0; i < numList.length; i ++) {
    let address = store[numList[i]].address
    let name = store[numList[i]].storeName

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

            sortMarkerList.push(customOverlay)

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

// ==== Map next, pre Btn ====
function mapNextpreBtnSet(xStoresData, numList) {

  let storesData = xStoresData
  
  targetMarkerList = []

  let numStart = 0
  let numEnd = 10
  let mapCursor
  let allStoreNum = numList
  let limitCursor = Math.floor((allStoreNum.length) * 0.1)
  
  next.addEventListener("click", function(){

    if (limitCursor <= 1) { return }

    if (btnStatus == false) {
      return
    }
    console.log("originBtn")
    if (limitCursor == mapCursor) {
      console.log(limitCursor)
      console.log("next: Over page")
    } else {
      numStart += 10
      numEnd += 10
      console.log(allStoreNum.slice(numStart, numEnd))
      
      let loopNum = allStoreNum.slice(numStart, numEnd)
      mapMarker(storesData, loopNum)
  
      mapCursor = numEnd/10
      console.log("Map : " + mapCursor)
    }
  });
  pre.addEventListener("click", function(){

    if (limitCursor <= 1) { return }

    if (btnStatus == false) {
      return
    }
    console.log("originBtn")
    if (numStart == 0) {
      console.log("pre: Over page")
    } else {
      numStart -= 10
      numEnd -= 10
      console.log(allStoreNum.slice(numStart, numEnd))
  
      let loopNum = allStoreNum.slice(numStart, numEnd)
      mapMarker(storesData, loopNum)
  
      mapCursor = numEnd/10
      console.log("Map : " + mapCursor)
    }
  });
}
function targetMapNextpreBtnSet(storesData, numLsit) {
  if (targetBtnStatus == false) {
    return
  }
  markerList = []
  sortMarkerList = []
  targetMarkerList = []

  let targetNumStart = 0
  let targetNumEnd = 10
  let mapCursor
  let allStoreNum = numLsit
  let limitCursor = Math.floor((allStoreNum.length) * 0.1)

  console.log("limitCursor" + limitCursor)

  // 페이지가 1개 이하면 다음 이전 버튼을 사라지게 한다.
  if (limitCursor <= 1) {
    $('.next-store').hide();
    $('.pre-store').hide();
  } else {
    $('.next-store').show();
    $('.pre-store').show();
  }
  
  next.addEventListener("click", function(){
    console.log("targetBtn")
    sortMarkerList = []

    if (limitCursor <= 1) { return }

    if (limitCursor == mapCursor) {
      console.log(limitCursor)
      console.log("next: Over page")
    } else {
      targetNumStart += 10
      targetNumEnd += 10
      console.log(allStoreNum.slice(targetNumStart, targetNumEnd))
      
      let loopNum = allStoreNum.slice(targetNumStart, targetNumEnd)
      targetMapMarker(storesData, loopNum)
  
      mapCursor = targetNumEnd/10
      console.log("Map : " + mapCursor)
    }
  });
  pre.addEventListener("click", function(){
    console.log("targetBtn")
    sortMarkerList = []

    if (limitCursor <= 1) { return }

    if (targetNumStart == 0) {
      console.log("pre: Over page")
    } else {
      targetNumStart -= 10
      targetNumEnd -= 10
      console.log(allStoreNum.slice(targetNumStart, targetNumEnd))
  
      let loopNum = allStoreNum.slice(targetNumStart, targetNumEnd)
      targetMapMarker(storesData, loopNum)
  
      mapCursor = targetNumEnd/10
      console.log("Map : " + mapCursor)
    }
  });
}
function sortMapNextpreBtnSet(storesData, numLsit) {
  if (sortBtnStatus == false) {
    return
  }
  markerList = []
  targetMarkerList = []

  let targetNumStart = 0
  let targetNumEnd = 10
  let mapCursor
  let allStoreNum = numLsit
  let limitCursor = Math.floor((allStoreNum.length) * 0.1)

  // 페이지가 1개 이하면 다음 이전 버튼을 사라지게 한다.
  if (limitCursor <= 1) {
    $('.next-store').hide();
    $('.pre-store').hide();
  } else {
    $('.next-store').show();
    $('.pre-store').show();
  }
  
  next.addEventListener("click", function(){
    console.log("sortBtn")
    targetMarkerList = []

    if (limitCursor <= 1) { return }

    if (limitCursor == mapCursor) {
      console.log(limitCursor)
      console.log("next: Over page")
    } else {
      targetNumStart += 10
      targetNumEnd += 10
      console.log(allStoreNum.slice(targetNumStart, targetNumEnd))
      
      let loopNum = allStoreNum.slice(targetNumStart, targetNumEnd)
      sortMapMarker(storesData, loopNum)
  
      mapCursor = targetNumEnd/10
      console.log("Map : " + mapCursor)
    }
  });
  pre.addEventListener("click", function(){
    console.log("sortBtn")
    targetMarkerList = []

    if (limitCursor <= 1) { return }

    if (targetNumStart == 0) {
      console.log("pre: Over page")
    } else {
      targetNumStart -= 10
      targetNumEnd -= 10
      console.log(allStoreNum.slice(targetNumStart, targetNumEnd))
  
      let loopNum = allStoreNum.slice(targetNumStart, targetNumEnd)
      sortMapMarker(storesData, loopNum)
  
      mapCursor = targetNumEnd/10
      console.log("Map : " + mapCursor)
    }
  });
}
function filterNextpreBtnSet(storesData, numList) {
  if (filterBtnStatus == false) {
    return
  }
  
  markerList = []
  sortMarkerList = []
  targetMarkerList = []

  let numStart = 0
  let numEnd = 10
  let mapCursor
  let allStoreNum = numList
  let limitCursor = Math.floor((allStoreNum.length) * 0.1)

  // 페이지가 1개 이하면 다음 이전 버튼을 사라지게 한다.
  if (limitCursor <= 1) {
    $('.next-store').hide();
    $('.pre-store').hide();
  } else {
    $('.next-store').show();
    $('.pre-store').show();
  }
  
  next.addEventListener("click", function(){
    console.log("filterBtn")

    if (limitCursor <= 1) { return }

    if (limitCursor == mapCursor) {
      console.log(limitCursor)
      console.log("next: Over page")
    } else {
      numStart += 10
      numEnd += 10
      console.log(allStoreNum.slice(numStart, numEnd))
      
      let loopNum = allStoreNum.slice(numStart, numEnd)
      filterMarker(storesData, loopNum)
  
      mapCursor = numEnd/10
      console.log("Map : " + mapCursor)
    }
  });
  pre.addEventListener("click", function(){
    console.log("filterBtn")

    if (limitCursor <= 1) { return }

    if (numStart == 0) {
      console.log("pre: Over page")
    } else {
      numStart -= 10
      numEnd -= 10
      console.log(allStoreNum.slice(numStart, numEnd))
  
      let loopNum = allStoreNum.slice(numStart, numEnd)
      filterMarker(storesData, loopNum)
  
      mapCursor = numEnd/10
      console.log("Map : " + mapCursor)
    }
  });
}

