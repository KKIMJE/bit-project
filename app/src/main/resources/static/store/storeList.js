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
      let tStoreNumList = [] // 필터링된 주점 번호모음

      for (var i = 0; i < stores.length; i++) {
        if (targetNo == stores[i].storeTypeNo) { // 카테고리 필터링
          tStoreNumList.push(i)

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

          tagStr = `<div class="img-xbox">
          <div class="xImg box">
            <i id="heart" data-heart="${i}" class="fa-heart b fa-solid"></i>
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
      }
      console.log("해당 주점수 : " + tStoreNumList.length)
      if (itemDiv == null) {
        console.log("null")
        return
      } 
      listDiv.appendChild(itemDiv)
      listDiv.appendChild(itemDiv2)
      targetMapMarker(stores, tStoreNumList.slice(0, 10)) // 초기 맵세팅
      targetMapNextpreBtnSet(stores, tStoreNumList) // next pre btn 세팅
      computeDistance() // 거리계산
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
      btnStatus = false // map next, pre 버튼의 중복 동작 방지
    }
  }
  nextPreBtnSet() // 버튼 다시 세팅
});

