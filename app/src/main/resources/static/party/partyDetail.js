// import { partyList } from '../common/api/apiList.js';

var pbody = document.querySelector("#party-body")

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