// == category tab ==
function targetList(targetNo) {
  fetch("/store/list")
    .then(function(response) {
      return response.json()
    })
    .then(function(stores) {
      let listAll = document.querySelector(".imgContainer");
      let count = 0
      let card = true

      for (var i = 0; i < stores.length; i++) {
        if (targetNo == stores[i].storeTypeNo) {
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
      
                let polyline = new kakao.maps.Polyline({
                  path : linePath
                });
                // console.log("거리" + polyline.getLength())
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
      }
      listDiv.appendChild(itemDiv)
      listDiv.appendChild(itemDiv2)
    })
};

const lightBtn = document.querySelector('.store-category-sort')
lightBtn.addEventListener("click",function(e){
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act')
    e.target.classList.toggle('act')
    
    $('.imgContainer').empty()

    let targetNo = e.target.value

    if (targetNo == 0) {
      location.reload()
    } else {
      targetList(targetNo)
    }
  }
});

