// import { partyList } from '../common/api/apiList.js';

var pbody = document.querySelector("#party-body")
var dbody = document.querySelector("#my-position")

/****************
    리스트 출력
****************/
fetch("/party/list")
.then(function(response) {
    return response.json();
})
.then(function(result) {      
    for (var party of result) {
    pbody.innerHTML += `<a href="/party/partyDetail.html" class="party-list"> 
                        <div class="party-body-top">
                            <div class="party-title">${party.title}</div>
                            <div class="party-regdate">${party.regDate}</div>
                        </div> 
                        <div class="party-body-content">
                            <div class="leader-profile">
                                <img class="profile-img leader" src="img/profile_suzy.jpg" alt="방장 프로필">
                                <span>${party.name}</span>
                            </div>
                            <div class="party-detail">
                        <div class="first-row">
                            <i class="fa-solid fa-calendar-days"></i>
                            <span>${party.meetingDate}</span>
                        </div>
                        <div class="second-row">
                            <div>
                                <span>
                                    <i class="fa-solid fa-bottle-droplet"></i>${party.alcoholType}</span>
                            </div>
                            <div>
                                <span>
                                    <i class="fa-solid fa-whiskey-glass"></i>${party.alcoholLimit}</span>
                            </div>
                            <div>
                                <span>
                                    <i class="fa-solid fa-won-sign"></i>${party.partyFee}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="party-body-footer">
                    <div class="party-store">
                        <div class="store-distance" data-address="${party.address}">🚧계산중🚧</div>
                    </div>
                    <div class="party-like">
                        <i class="fa-solid fa-heart like-click"></i>
                        1.3k
                    </div>
                    <div class="party-member-count">
                        <i class="fa-solid fa-user"></i>
                        <span>3</span>&nbsp;/&nbsp;<span>${party.maxMember}</span>
                    </div>
                </div>
            </a>
    `;
}
computeDistance();

});

// pbody.innerHTML += `<a href="/party/partyDetail.html&no=${party.partyNo}" class="party-list"> 


/********************************
    내위치와 가게와의 거리 계산
********************************/
function computeDistance() {
    let distanceList = []
    $('.store-distance').each((index, e) => { // .store-distance를 다 잡아와서 nodelist를 리턴해 each로 꺼낸다. html 태그 자체가 꺼내지는데, 태그들의 리스트를 e로 하나씩 뽑을 것이다. e 안에는 각 주소가 담겨있다.
      distanceList.push($(e).attr("data-address")) // e에 저장된 주소 값을 뽑아서 배열에 옮겨 담을 것이다.
    })

    var mapContainer = document.getElementById('map')
    let geocoder = new kakao.maps.services.Geocoder();

    const addressSearch = address => { // 주소를 넣으면
        return new Promise((resolve, reject) => { // address가 들어가서 위도경도 값을 찾았으면 resolve에 담아 리턴되고 아니라면 status가 반환된다.
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
    const geoLocation = () => { // 현위치
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(function(position) {
          resolve({"lat": position.coords.latitude, "lng": position.coords.longitude});
        })
      })
    }
  
    const distanceLine = (posList, curPos) => { // (가게위치, 현재위치)
      return new Promise((resolve) => {
  
        const dLines = []
  
        for(const position of posList) {
          // 선 객체 생성
          let linePath = [ // 가게와 내 위치 사이의 선 객체
            new kakao.maps.LatLng(position.lat, position.lng), // 가게마다 위도 경도가 바뀌면서 linePath를 형성
            new kakao.maps.LatLng(curPos.lat, curPos.lng) // 내 위치 고정
          ];
  
          let polyline = new kakao.maps.Polyline({
            path : linePath
          });
  
          dLines.push(Math.round(polyline.getLength())) // 소수점 이하를 반올림해하여 다시 담는다.
        }
        resolve(dLines)
      })
    }
  
    // async-await
    (async () => { // 익명함수
      try {
          const positions = [];
          for(const address of distanceList) { // 가게 위치
              const result = await addressSearch(address); // 위도 경도값을 담는다.
              positions.push(result)
          }
          // console.log(positions)
  
          const geoResult = await geoLocation() // 현위치
          // console.log(geoResult)
  
          const distanceValue = await distanceLine(positions, geoResult) // 가게 위치와 현위치를 이은 선
          // console.log(distanceValue)
  
          $('.store-distance').each((index, e) => { // 각 모임의 거리 값을 넣는다.
            if (1000 < distanceValue[index]) {
              $(e).html((distanceValue[index] * 0.001).toFixed() + "km 이상") // $(e).html : html 태그의 내용을 이걸로 바꾸겠다. 
            } else {
              $(e).html(distanceValue[index] + "m")
            }
          })
  
      } catch (e) {
          console.log(e);
      }
    })();
  
  }


/*********************************
    현주소 혹은 설정된 주소 출력
*********************************/
// 1) URL에서 쿼리스트링(query string)을 추출한다.
var arr = location.href.split("?");
// console.log(arr);

if (arr.length == 1) {
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
    };

function onGeoOk(position){

    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    
    //kakao REST API에 get 요청을 보낸다.
    fetch(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}&input_coord=WGS84`, {
        method: "GET",
        headers: {
            "Authorization": "KakaoAK 4e01457312537eb81d1716cd0d22bcfd"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        dbody.innerHTML = result.documents[0].address.address_name
        });
    }

function onGeoError(){
    alert("위치권한을 확인해주세요");
}

//navigator.geolocation.getCurrentPosition(위치받는함수, 에러났을때 함수, 옵션)
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError,options);

} else {
  // 2) 쿼리 스트링에서 주소 값을 추출한다.
  var qs = arr[1];
  // console.log(qs);

  var params = new URLSearchParams(qs);
  var myposition = params.get("myposition");

  if (myposition == null) {
    alert("주소가 올바르지 않습니다!");
    throw "파라미터 오류!";
  }

  dbody.innerHTML = myposition;
  // console.log(myposition);
}

/***************
    result 정보
***************/
    // console.log(result)
    // address:
    // address_name: "경기 하남시 신장동 281"
    // main_address_no: "281"
    // mountain_yn: "N"
    // region_1depth_name: "경기"
    // region_2depth_name: "하남시"
    // region_3depth_name: "신장동"

    // road_address:
    // address_name: "경기도 하남시 미사대로 505"
    // building_name: "미사리경정장・조정카누경기장"
    // main_building_no: "505"
    // region_1depth_name: "경기"
    // region_2depth_name: "하남시"
    // region_3depth_name: ""
    // road_name: "미사대로"


/************************************
    현위치로 재검색(페이지 새로고침)
***********************************/
$('.position-reload').click(function() {
  // 지도에서 주소를 설정했다면 파라미터를 제거합니다
    history.replaceState({}, null, location.pathname);
    location.reload();
});