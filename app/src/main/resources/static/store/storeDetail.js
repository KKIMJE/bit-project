var arr = location.href.split("?");
// console.log(arr);

var qs = arr[1];
// console.log(qs);

var params = new URLSearchParams(qs);
var no = params.get("no");

console.log(no);

if (no == null) {
  alert("error");
  throw "파라미터 오류!";
}

fetch(`/store/get?no=${no}`)
  .then(function(response) {
    return response.json() 
  }).then(function(store) {
    console.log(store);
    mapMarker(store)
    storeTextBox(store)
});

// Map 생성
var container = document.getElementById('map');
var options = {center: new kakao.maps.LatLng(33.450701, 126.570667), level: 3};
var map = new kakao.maps.Map(container, options);
var geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체를 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 단일 Map마커생성
function mapMarker(store) {
  // 마커 생성
  let address = store.address
  let name = store.storeName
  // console.log(address, name)

  // 주소로 좌표를 검색합니다
  geocoder.addressSearch(address, function(result, status) {

    // 정상적으로 검색이 완료됐으면
    if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 커스텀 오버레이를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
            position: coords,
            content: `<div id="mapInfo"><span><i class="fa-solid fa-location-dot"></i></span></div>`
        });

        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map);

        // 마지막으로 찍은 마커로 중심을 이동한다.
        map.setCenter(coords);
    } else {
        console.log(`${name}, ${address} 주소검색 실패`)
    }
  });
  
}
// 주점 정보 입력
function storeTextBox (store) {
  let storeOper = document.querySelector(".storeOper")
  let storeName = document.querySelector(".storeName")
  let storeAddress = document.querySelector(".storeAddress")
  let storeTel = document.querySelector(".storeTel")
  let storeIntro = document.querySelector(".storeIntro")
  let storeTimeInfo = document.querySelector(".storeTimeInfo")
  let storeStar = document.querySelector(".storeStar")
  let storeTag = document.querySelector(".storeTag")

  storeDetailImgPrint(store.storeImg) // 주점 상세 이미지
  storeAlcPrint(store.alcoholSales) // 추천주류
  storeMenuPrint(store.storeMenu) // 추천메뉴
  storeCountMno(store.storeNo) // 주점찜
  storeName.innerHTML = store.storeName // 주점이름
  storeAddress.innerHTML += store.address // 주점주소
  storeTel.innerHTML += store.tel // 주점주소
  storeIntro.innerHTML += store.introduction // 주점소개
  storeTimeInfo.innerHTML = store.hour // 영업시간
  storeTag.innerHTML += tags(store.tags) // 태그
  storeStar.innerHTML = printStar(store.evaluationScore) // 별점
  storeOper.innerHTML = printOper(store.oper) + " / " +  "&nbsp;" // 영업여부, 거리
  computeDistance(store.address) // 거리계산
}

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
// 태그
function tags (tagArr) {
  let tagStr = ""
  for (let i=0; i < tagArr.length; i++) {
    if (i == tagArr.length-1) {
      tagStr += tagArr[i].name
    } else {
      tagStr += tagArr[i].name + ", "
    }
  }
  return tagStr
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
// 거리계산
function computeDistance(address) {
  let geocoder = new kakao.maps.services.Geocoder(); 
  const addressSearch = address => {// 주소 => 좌표리턴
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
  //GeoLocation을 이용해서 접속 위치를 얻어옵니다
  const geoLocation = () => {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(function(position) {
        resolve({"lat": position.coords.latitude, "lng": position.coords.longitude});
      })
    })
  }
  const distanceLine = (storePos, curPos) => {
    return new Promise((resolve) => {

      // 선 객체 생성
      let linePath = [
        new kakao.maps.LatLng(storePos.lat, storePos.lng),
        new kakao.maps.LatLng(curPos.lat, curPos.lng)
      ];

      let polyline = new kakao.maps.Polyline({
        path : linePath
      });

      resolve(Math.round(polyline.getLength()))
    })
  }
  // async-await
  (async () => {
    try {
      const storeGeoResult = await addressSearch(address)
      const geoResult = await geoLocation()
      const distanceValue = await distanceLine(storeGeoResult, geoResult)

      if (1000 < distanceValue) {
        $('.storeDistance').html((distanceValue * 0.001).toFixed(0) + "km")
      } else {
        $('.storeDistance').html(distanceValue.toFixed(0) + "m")
      }
    } catch (e) {
        console.log(e);
    }
  })();
}
// 주점찜
function storeCountMno(storeNo) {
  fetch(`/store/getMnoCnt?no=${storeNo}`)
  .then(function(response) {
    return response.json() 
  }).then(function(cnt) {
    let storeMnoCnt = document.querySelector(".storeMnoCnt")
    storeMnoCnt.innerHTML += cnt
  });
}
// 추천주류
function storeAlcPrint(alcList) { 
  let sugAlcImg = document.querySelector(".sugAlcImg")
  let str = ""

  if (alcList.length == 0) {
    str = "추천주류를 준비중입니다."
  }

  for (let i=0; i < 5; i++) { // 최대 출력 5개
    str += `
    <a class="alc-link" href="/alcohol/alcoholdetail.html?no=${alcList[i].alcoholDetailNo}">
      <div class="sugAlcImg-card">
        <img class="xAlc-img" src="../alcohol/alcoholimg/alcohol${alcList[i].alcoholDetailNo}.png" alt="">
        <p class="xAlc-name">${alcList[i].name}</p>
        <p class="xAlc-price">${alcList[i].price}원</p>
      </div>
    </a>`

    // console.log(alcList[i].alcoholDetailNo)
    // console.log(alcList[i].price)
  }
  sugAlcImg.innerHTML = str
}

// 추천안주
function storeMenuPrint(storeMenuList) {
  let sugFoodImg = document.querySelector(".sugFoodImg")
  let str = ""

  if (storeMenuList.length == 0) {
    str = "추천메뉴를 준비중입니다."
  }

  for (let i=0; i < 5; i++) { // 최대 출력 5개
    str += `
      <div class="sugAlcImg-card">
        <img class="xAlc-img" src="../asset/img/storeMenu/storeMenu${i+1}.jpg" alt="">
        <p class="xAlc-name">${storeMenuList[i].storeMenuName}</p>
        <p class="xAlc-price">${storeMenuList[i].storeMenuPrice}원</p>
      </div>`

    // console.log(storeMenuList[i].storeMenuName)
    // console.log(storeMenuList[i].storeMenuPrice)
  }
  sugFoodImg.innerHTML = str
}

// 주점상세 이미지
function storeDetailImgPrint(Imgs) {
  

  let imgBox = document.querySelector(".img-box")
  let str 
  if (Imgs.length == 0) {
    str = "이미지를 준비중입니다."
  }

// 최대 출력 5개
  str = `
  <img class="xMain-img" src="../asset/img/storeDetail/${Imgs[0].storeImg}.jpg" alt="">
  
  <div class="xSub-box">
    <div class="xSub-box1">
      <img class="xSub-img" src="../asset/img/storeDetail/${Imgs[1].storeImg}.jpg" alt="">
      <img class="xSub-img" src="../asset/img/storeDetail/${Imgs[2].storeImg}.jpg" alt="">
    </div>
    <div class="xSub-box2">
      <img class="xSub-img" src="../asset/img/storeDetail/${Imgs[3].storeImg}.jpg" alt="">
      <img class="xSub-img" src="../asset/img/storeDetail/${Imgs[4].storeImg}.jpg" alt="">
    </div>
  </div>`

  // console.log(Imgs)

  imgBox.innerHTML = str
}

// 모달
// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })






