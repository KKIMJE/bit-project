// import axios from "axios";

var pbody = document.querySelector("#party-body")

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
                            <span>${party.address}</span>
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
    });


// $('.position-reload').click(function() {
//     location.reload();
//     });

    //        pbody.innerHTML += `<a href="/party/partyDetail.html&no=${party.partyNo}" class="party-list"> 


/***********************************
    geolocation으로 현재 좌표 검색
**********************************/

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
    };


    var lat;
    var lng;
    
function success(position) {
    //좌표를 알아내어 kakaoAPI url에 사용한다.
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    console.log('위도 : ' + lat); 
    console.log('경도: ' + lng);
};
    
function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);


function onGeoOk(position){
    console.log(lat, lng);
    // const REST_API_KEY = "4e01457312537eb81d1716cd0d22bcfd";
    
    //kakao REST API에 get 요청을 보낸다.
    //파라미터 x,y에 lon,lat을 넣어주고 API_KEY를 Authorization헤더에 넣어준다.
    fetch(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}&input_coord=WGS84`, {
        method: "GET",
        headers: {
            "Authorization": "KakaoAK 4e01457312537eb81d1716cd0d22bcfd"
        }
    })
    .then(function(response) {
        console.log(JSON.stringify(response.data));
        // console.log(response);
        // return response.json();
    })
      .then(function(result) { 
        console.log(result);
    });
        // console.log(res.data.documents);
        // dispatch(changeRegion(res.data.documents[0].address.region_1depth_name));
        // dispatch(changeCity(res.data.documents[0].address.region_2depth_name));

}

function onGeoError(){
    alert("위치권한을 확인해주세요");
}


//navigator.geolocation.getCurrentPosition(위치받는함수, 에러났을때 함수)
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);