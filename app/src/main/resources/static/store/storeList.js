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
        if (targetNo == stores[i].storeTypeNo) { // 카테고리 필터링(포차, 펍, 바...)
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
          let heart = printheart(stores[i].mno, stores[i].storeNo)
          // stono 거리값과의 비교를 위한 stono
          tagStr = `<div class="img-xbox" data-stono="${i}"> 
            <div class="xImg box">
              ${heart}
              <a class="store-link" href="storeDetail.html?no=${stores[i].storeNo}">
                <img src="../asset/img/store/storelist${i}.jpg" class="xImg-ori">
              </a>
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
      computeDistance() // 거리계산 공유함수
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
      btnStatus = false
      targetBtnStatus = true
      sortBtnStatus = false
    }
  }
  nextPreBtnSet() // 버튼 다시 세팅
});













// 거리순 정렬
var sortJSON = function(data, key, type) { // json 데이터 정렬
  if (type == undefined) {
    type = "asc";
  }
  return data.sort(function(a, b) {
    var x = a[key];
    var y = b[key];
    if (type == "desc") {
      return x > y ? -1 : x < y ? 1 : 0;
    } else if (type == "asc") {
      return x < y ? -1 : x > y ? 1 : 0;
    }
  });
};
function distanceSortList() {
  fetch("/store/list")
    .then(function(response) {
      return response.json()
    })
    .then(function(stores) {

      $('.imgContainer').empty()
      let listAll = document.querySelector(".imgContainer");
      let count = 0
      let card = true
      
      console.log(dValueList) 
      let dValueNumList = [] // 순수 숫자배열

      for (var i = 0; i < dValueList.length; i++) {
        dValueNumList.push(dValueList[i].storeNo)
          
        if (count == 0) {
          var listDiv = document.createElement("div")
          listDiv.classList.add("storeContents-imgCard")
          listAll.appendChild(listDiv)
    
          var itemDiv = document.createElement("div")
          itemDiv.classList.add("store-contents-1")
          listDiv.appendChild(itemDiv)
    
          var itemDiv2 = document.createElement("div")
          itemDiv2.classList.add("store-contents-2")
          listDiv.appendChild(itemDiv2)
    
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

        // 정렬값
        let sortNo = dValueList[i].storeNo
        let sortDis = dValueList[i].dValue
        if (1000 < sortDis) {
          sortDis = Math.round( sortDis * 0.001) + "km"
        } else {
          sortDis = Math.round( sortDis ) + "m"
        }
        
        // 기존 store 데이터
        let storeName = stores[sortNo].storeName
        let stras = printStar(stores[sortNo].evaluationScore)
        let storeOper = printOper(stores[sortNo].oper)
        let heart = printheart(stores[sortNo].mno, stores[sortNo].storeNo)
        // stono 거리값과의 비교를 위한 stono
        tagStr = `<div class="img-xbox" data-stono="${sortNo}"> 
          <div class="xImg box">
            ${heart}
            <a class="store-link" href="storeDetail.html?no=${stores[sortNo].storeNo}">
              <img src="../asset/img/store/storelist${sortNo}.jpg" class="xImg-ori">
            </a>
          </div>
          <div class="xImg-contents">
            <div class="xImg-content">
              <div class="xImg-content-t">${storeName}</div>
              <div class="xImg-star">${stras}</div>
              <div class="xImg-d" data-address="${stores[sortNo].address}">${sortDis}</div>
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
      console.log("거리정렬 주점수 : " + dValueList.length)
      if (itemDiv == null) {
        console.log("null")
        return
      }
      listDiv.appendChild(itemDiv)
      listDiv.appendChild(itemDiv2)
      nextPreBtnSet()
      sortMapMarker(stores, dValueNumList.slice(0, 10)) // 초기 맵세팅
      sortMapNextpreBtnSet(stores, dValueNumList) // next pre btn 세팅
    })
};
$(".xDistance").click(function() {
  
  // 거리순으로 sort한 후에 List 정렬
  sortJSON(dValueList, "dValue", "asc") // 거리값 정렬
  console.log(dValueList)
  distanceSortList()
  btnStatus = false
  targetBtnStatus = false
  sortBtnStatus = true
  
})