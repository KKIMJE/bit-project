function loadData(serverInfo){
  console.log("loadData: " + serverInfo )
  fetch(serverInfo)
      .then(  response => response.json())
      .then(  data => {
          limitCursor = Math.floor((data.length) * 0.1)
          allStoreDataList = data
          storeNum = numMaker(data.length)

          storeList(allStoreDataList)
          // 맵 초기화면 세팅
          mapMarker(allStoreDataList, storeNum)
      })
}
function numMaker (n) {
  let nList = []
  for (let j = 0; j < n; j ++) {
    nList.push(j)
  }
  return nList
}

// storeAll list
//  => ImgCard Insert
// 주점 위치 찾기
let targetLat, targetLon, lat, lon, tagStr
var distanceLine = []
function storeList(stores) {
  let listAll = document.querySelector(".imgContainer");
  let count = 0
  let card = true

  for (let i = 0; i < stores.length; i++) {

    if (count == 0) {
      var listDiv = document.createElement("div")
      listDiv.classList.add("storeContents-imgCard")
      listAll.appendChild(listDiv)

      var itemDiv2 = document.createElement("div")
      itemDiv2.classList.add("store-contents-2")
      listDiv.appendChild(itemDiv2)

      var itemDiv = document.createElement("div")
      itemDiv.classList.add("store-contents-1")
      listDiv.appendChild(itemDiv)

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

    let address = stores[i].address
    let storeName = stores[i].storeName
    let stras = printStar(stores[i].evaluationScore)
    let storeOper = printOper(stores[i].oper)

    geocoder.addressSearch(address,
      function(result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        targetLat = result[0].y
        targetLon = result[0].x

        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
          lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

          // 선 객체 생성
          let linePath = [
            new kakao.maps.LatLng(lat, lon),
            new kakao.maps.LatLng(targetLat, targetLon)
          ];

          polyline = new kakao.maps.Polyline({
            path : linePath
          });
          // console.log("거리" + polyline.getLength())
          console.log(polyline.getLength);
          distanceLine.push(polyline.getLength())
        })
      } else {
          console.log(`${address} 주소검색 실패`)
      }
    })

    tagStr = `<div class="img-xbox">
      <div class="xImg box">
        <i id="heart" data-heart="${i}" class="fa-heart b fa-solid"></i>
        <a><img src="../asset/img/store/storelist${i}.jpg" class="xImg-ori"></a>
      </div>
      <div class="xImg-contents">
        <div class="xImg-content">
          <div class="xImg-content-t">${storeName}</div>
          <div class="xImg-star">${stras}</div>
          <div class="xImg-d">${0}</div>
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
};
// 영업여부
function printOper(oper) {
  let status = " ";
  if (oper == 1) {
    status = "영업중"
  } else {
    status = "휴일"
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

function inputDistance() {
  // const xDistance = document.querySelector('.xImg-d')
  for(const d of distanceLine) {
    console.log(d)
    // xDistance.innerHTML = Math.round(distanceLine[i]) + "m"
  }
}

inputDistance()
console.log(distanceLine.length)
console.log(distanceLine);

// 접속자-주점 거리 구하기
// function distanceCal (address) {
//   // let targetLat, targetLon, lat, lon
//   // 주점 위치 찾기
//   // 주소-좌표 변환 객체를 생성합니다
//   // let geocoder = new kakao.maps.services.Geocoder();
//   // 주소로 좌표를 검색합니다

//   geocoder.addressSearch(address, function(result, status) {
//     // 정상적으로 검색이 완료됐으면
//     if (status === kakao.maps.services.Status.OK) {
//       targetLat = result[0].y
//       targetLon = result[0].x
//       // var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

//       // 접속자 현재위치 찾기
//       if (navigator.geolocation) {
//         // GeoLocation을 이용해서 접속 위치를 얻어옵니다
//         navigator.geolocation.getCurrentPosition(function(position) {

//               lat = position.coords.latitude, // 위도
//               lon = position.coords.longitude; // 경도

//               // console.log(targetLat, targetLon)
//               // console.log(lat, lon)

//               // 선 객체 생성
//               let linePath = [
//                 new kakao.maps.LatLng(lat, lon),
//                 new kakao.maps.LatLng(targetLat, targetLon)
//               ];
//               let polyline = new kakao.maps.Polyline({
//                 path : linePath
//               });
//               console.log("거리" + polyline.getLength())


//               // Math.round(polyline.getLength())
//               // return polyline.getLength()
//         })
//       } else { // HTML5의 GeoLocation을 사용할 수 없을때
//         console.log("현위치 검색실패")
//       }
//     } else {
//         console.log(`${address} 주소검색 실패`)
//     }
//   })
// }


var storeNum;
var allStoreDataList;
var limitCursor;
var markerList = []


loadData("/store/list")

// == category tab ==
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

// == next, pre button ==
const next = document.querySelector('.next-store');
const pre = document.querySelector('.pre-store');
setTimeout(() => {
// 주점 리스트 초기화 - 페이지 1로 맞추기
let storeAll = document.querySelectorAll('.storeContents-imgCard');
for (let i=1; i < storeAll.length; i++) {
  storeAll[i].style.display = "none";
}
// cursor를 기준으로 앞뒤로 모두 none으로 변경
let cursor = 0;
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
}, 600)

// ==== Map 생성 ====
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
function mapMarker(store, numList) {

  // 기존마커 삭제
  for (let j = 0; j < markerList.length; j++) {
    markerList[j].setMap(null)
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
let numStart = 0
let numEnd = 10
let mapCursor

next.addEventListener("click", function(){
  if (limitCursor == mapCursor) {
    console.log(limitCursor)
    console.log("next: Over page")
  } else {
    numStart += 10
    numEnd += 10
    console.log(storeNum.slice(numStart, numEnd))

    let loopNum = storeNum.slice(numStart, numEnd)
    mapMarker(allStoreDataList, loopNum)

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
    mapMarker(allStoreDataList, loopNum)

    mapCursor = numEnd/10
    console.log("Map : " + mapCursor)
  }
});
