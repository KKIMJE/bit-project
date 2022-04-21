// import { partyList } from '../common/api/apiList.js';

var pbody = document.querySelector("#party-body")
var dbody = document.querySelector("#my-position")


// URL에서 쿼리스트링(query string)을 추출한다.
var arr = location.href.split("?");
// console.log(arr);

if (arr.length == 1) {
  myLoad();
} else {
  mapLoad(); 
}


function myLoad() {
/****************
    리스트 출력
****************/

  fetch("/party/list")
  .then(function(response) {
      return response.json();
  })
  .then(function(result) {      
      for (var party of result) {
      pbody.innerHTML += `<a href="/party/partyDetail.html" class="party-list" data-creatdt="${party.partyNo}"> 
                          <div class="party-body-top">
                              <div class="party-title">${party.title}</div>
                              <div class="party-regdate">` + timeCheck(`${party.regDate}`) + `</div>
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
      현위치와 가게와의 거리 계산
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
    
            const geoResult = await geoLocation() // 현위치
    
            const distanceValue = await distanceLine(positions, geoResult) // 가게 위치와 현위치를 이은 선

            $('.store-distance').each((index, e) => { // 각 모임의 거리 값을 넣는다.
              // 1km 미만이면 m 로 출력한다.
              // 1~5km 사이면 km로 출력한다
              // 5km 이상이면 출력하지 않는다.

              $( `#party-body > a:nth-child(${index + 1})` ).attr( 'data-distance', `${distanceValue[index]}` );

              if (distanceValue[index] < 1000) {
                $(e).html(distanceValue[index] + "m")
              } else if (1000 <= distanceValue[index] < 5000) {
                $(e).html((distanceValue[index] * 0.001).toFixed() + "km 이상") // $(e).html : html 태그의 내용을 이걸로 바꾸겠다. 
              } else {
                $('.party-list').css('display','none');
              }
            })
        } catch (e) {
            console.log(e);
        }
      })();
    
    }


  /****************
      현주소 출력
  ****************/
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
  let myposition = navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError,options);
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




function mapLoad() {
      /****************
          리스트 출력
      ****************/
      fetch("/party/list")
      .then(function(response) {
          return response.json();
      })
      .then(function(result) {      
          for (var party of result) {
          pbody.innerHTML += `<a href="/party/partyDetail.html" class="party-list" data-creatdt="${party.partyNo}"> 
                              <div class="party-body-top">
                                  <div class="party-title">${party.title}</div>
                                  <div class="party-regdate">` + timeCheck(`${party.regDate}`) + `</div>
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

      /**********************
          설정된 주소 출력
      **********************/

      var qs = arr[1];
  
      var params = new URLSearchParams(qs);
      var myposition = params.get("myposition");
      console.log(myposition);
  
      if (myposition == null) {
        alert("주소가 올바르지 않습니다!");
        throw "파라미터 오류!";
      }
      dbody.innerHTML = myposition;

      computeDistance2(myposition);    
      });
      
      
 

      /************************************
          설정된 위치와 가게와의 거리 계산
      ************************************/
      function computeDistance2(mypos) {
        // let myposition = $('#my-position').val();
        // console.log(myposition);
        
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

            // let myposition = await $('#my-position').val();
            // console.log(myposition);
    
            const geoResult = await addressSearch(mypos) // 설정한 위치
    
            const distanceValue = await distanceLine(positions, geoResult) // 가게 위치와 현위치를 이은 선
    
            console.log(distanceValue);

            $('.store-distance').each((index, e) => { // 각 모임의 거리 값을 넣는다.
              // 1km 미만이면 m 로 출력한다.
              // 1~5km 사이면 km로 출력한다
              // 5km 이상이면 출력하지 않는다.

              $( `#party-body > a:nth-child(${index + 1})` ).attr( 'data-distance', `${distanceValue[index]}` );

              if (distanceValue[index] < 1000) {
                $(e).html(distanceValue[index] + "m")
              } else if (1000 <= distanceValue[index] < 5000) {
                $(e).html((distanceValue[index] * 0.001).toFixed() + "km 이상") // $(e).html : html 태그의 내용을 이걸로 바꾸겠다. 
              } else {
                $('.party-list').css('display','none');
              }
            })
        } catch (e) {
            console.log(e);
        }
      })();
    }
}



/******************************
    등록일 포맷 변환하여 출력
******************************/
function timeCheck(time) {

  var min = 60 * 1000
  var now = new Date()
  var writeDay = new Date(time)
  var minsAgo = Math.floor((now - writeDay) / (min))

  var result = {
			'raw': writeDay.getFullYear() + '-' + (writeDay.getMonth() + 1 > 9 ? '' : '0') + (writeDay.getMonth() + 1) + '-' + (writeDay.getDate() > 9 ? '' : '0') +  writeDay.getDate() + ' ' + (writeDay.getHours() > 9 ? '' : '0') +  writeDay.getHours() + ':' + (writeDay.getMinutes() > 9 ? '' : '0') +  writeDay.getMinutes() + ':'  + (writeDay.getSeconds() > 9 ? '' : '0') +  writeDay.getSeconds(),
			'formatted': '',
		};

    if (minsAgo < 60) { // 1시간 내
			result.formatted = minsAgo + '분 전';
		} else if (minsAgo < 60 * 24) { // 하루 내
			result.formatted = Math.floor(minsAgo / 60) + '시간 전';
		} else { // 하루 이상
			result.formatted = Math.floor(minsAgo / 60 / 24) + '일 전';
		};

		return result.formatted;
}


/************************************
    현위치로 재검색(페이지 새로고침)
***********************************/
$('.position-reload').click(function() {
  // 지도에서 주소를 설정했다면 파라미터를 제거합니다
    history.replaceState({}, null, location.pathname);
    location.reload();
});

// F5 클릭 시
window.onkeydown = function() {
  var kcode = event.keyCode;
  if (kcode == 116) {
    history.replaceState({}, null, location.pathname);
  }
}


/**************************
    최신순 / 거리순 정렬
**************************/

$(".party-sort #btnCreatDtOrder").click(function() {
	var dataNm = $(this).data("datanm"); //data() 의 이름은 소문자로 작성
	listSortDate($(this), dataNm);
});

$(".party-sort #btnAddressOrder").click(function() {
	var dataNm = $(this).data("datanm"); //data() 의 이름은 소문자로 작성
	listSortAddress($(this), dataNm);
});


function listSortDate($targetObj, dataNm){
  $('#party-body').html(
    $('#party-body a').sort(function(a, b){
      return $(b).data(dataNm) - $(a).data(dataNm);
    })
  );
//현재 정렬된 방식을 강조(표시)하기 위해 Class 제거 및 추가
$(".order").removeClass("bold");
$targetObj.addClass("bold");
} 

function listSortAddress($targetObj, dataNm){
    //정렬하고자 하는 목록에 대해 sort 해서 다시 html로 뿌려주는 부분.
    $('#party-body').html(
      $('#party-body a').sort(function(a, b){
        return $(a).data(dataNm) - $(b).data(dataNm);
      })
    );
//현재 정렬된 방식을 강조(표시)하기 위해 Class 제거 및 추가
$(".order").removeClass("bold");
$targetObj.addClass("bold");
}


/*****************
    글쓰기 버튼
*****************/

$('.party-open').click(function() {
    location.href = 'partyForm.html';
});