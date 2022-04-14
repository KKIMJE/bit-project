// storeAll list => ImgCard Insert
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

    let storeName = stores[i].storeName
    let stras = printStar(stores[i].evaluationScore)
    let storeOper = printOper(stores[i].oper)
    let heart = printheart(stores[i].mno, stores[i].storeNo)
 
    tagStr = `<div class="img-xbox">
      <div class="xImg box">
        ${heart}
        <a><img src="../asset/img/store/storelist${i}.jpg" class="xImg-ori"></a>
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
  
  computeDistance() // 거리 계싼 -> 카드가 다 만들어지고 그 다음에 실행된다. 
};
// 거리계산
function computeDistance() {
  let distanceList = []
  $('.xImg-d').each((index, e) => { // .xImg-d 얘를 다 잡아와서 nodelist를 리턴해 each로 꺼낸다. html 태그 자체가 꺼내짐 /태그들의 리스트를 e로 하나씩 뽑음. e 안에 각 주소가 담겨있음
    distanceList.push($(e).attr("data-address")) // e에 저장했던 값이 뽑힘  그걸 배열에 옮겨 담음
  })
  
  let geocoder = new kakao.maps.services.Geocoder();
  const addressSearch = address => { // 주소를 넣으면 실행을 햇 ㅓ리턴을 하는데 
      return new Promise((resolve, reject) => { // address가 들어가서 주소를 잘 찾았으면 resolve에 담아서 위도 경도값이 리턴되고 아니면 status가 반환됨
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
      navigator.geolocation.getCurrentPosition(function(position) { // 현위치를 구해서 position으로 넘김
        resolve({"lat": position.coords.latitude, "lng": position.coords.longitude}); // position을 위도 경도로 나눔
      })
    })
  }

  const distanceLine = (posList, curPos) => { // 가게위치  현재위치
    return new Promise((resolve) => {

      const dLines = []

      for(const position of posList) {
        // 선 객체 생성
        let linePath = [ // 가게와 내 위치 그은 선
          new kakao.maps.LatLng(position.lat, position.lng), // 가게 위도 경도만 바뀌면서 linePath를 형성
          new kakao.maps.LatLng(curPos.lat, curPos.lng) // 내 위치는 고정
        ];

        let polyline = new kakao.maps.Polyline({
          path : linePath
        });

        dLines.push(Math.round(polyline.getLength())) // 거리를 반올림해줌. 소수점 없이 찍히는걸 다시 담음.
      }
      resolve(dLines) // 리턴해
    })
  }

  // async-await
  (async () => { // 익명함수
    try {
        const positions = []; // 이제 위도 경도가 30개 담김
        for(const address of distanceList) { // 주소 뽑아냄 
            const result = await addressSearch(address); // 위도 경도를 또 담음
            positions.push(result)
        }
        // console.log(positions)

        const geoResult = await geoLocation() // 현위치를 담음
        // console.log(geoResult)

        const distanceValue = await distanceLine(positions, geoResult) // 가게 위치랑 현위치를 이은 선을 담음
        // console.log(distanceValue)

        $('.xImg-d').each((index, e) => { // 각각의 카드에 거리 값을 넣음
          if (1000 < distanceValue[index]) {
            $(e).html((distanceValue[index] * 0.001).toFixed(2) + "km") // $(e).html : html 태그의 내용을 이걸로 바꾸겠다. 
          } else {
            $(e).html(distanceValue[index] + "m")
          }
        })

    } catch (e) {
        console.log(e);
    }
  })();

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


