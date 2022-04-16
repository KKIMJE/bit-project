var pbody = document.querySelector("#party-body")
var dbody = document.querySelector("#my-position")

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

// pbody.innerHTML += `<a href="/party/partyDetail.html&no=${party.partyNo}" class="party-list"> 


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
    .then(function() {
        let mp = result.documents[0].address.address_name
        console.log(mp);
        dbody.innerHTML = `${mp}`;
        });
    }

function onGeoError(){
    alert("위치권한을 확인해주세요");
}

//navigator.geolocation.getCurrentPosition(위치받는함수, 에러났을때 함수, 옵션)
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError,options);

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
    location.reload();
});