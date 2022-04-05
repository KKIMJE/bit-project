// 공유되는 store 전체 리스트
let allStoreDataList

// 서버 데이터 요청
fetch("/store/list")
  .then(function(response) {
    return response.json()})
      .then(function(stores) {
        storeList(stores)
        allStoreDataList = stores
      })

// storeAll list
//  => imgCard insert
//
let listAll = document.querySelector(".imgContainer");
let count = 0
let card = true
function storeList(stores) {
  
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

    let stars = printStar(stores[i].evaluationScore)
    if (count % 5 == 0) {
      if (card == true) {
        card = false
      } else {
        card = true
      }
    }

    if (card == true) {
      itemDiv2.innerHTML += 
      `<div class="img-xbox">
        <div class="xImg box">
          <i class="fa-regular fa-heart b"></i>
          <i class="fa-solid fa-heart b"></i>
          <a><img src="./img/store_2.jpg" class="xImg-ori"></a>
        </div>
        <div class="xImg-contents">
          <div class="xImg-content">
            <div class="xImg-content-t">${stores[i].name}</div>
            <div class="xImg-star">${stars}</div>
            <div class="xImg-d">30m 이내</div>
          </div>
          <div class="storeOpen">${printOper(stores[i].oper)}</div>
        </div>
      </div>`
    } else {
      itemDiv.innerHTML += 
      `<div class="img-xbox">
        <div class="xImg box">
          <i class="fa-regular fa-heart b"></i>
          <i class="fa-solid fa-heart b"></i>
          <a><img src="./img/store_2.jpg" class="xImg-ori"></a>
        </div>
        <div class="xImg-contents">
          <div class="xImg-content">
            <div class="xImg-content-t">${stores[i].name}</div>
            <div class="xImg-star">${stars}</div>
            <div class="xImg-d">30m 이내</div>
          </div>
          <div class="storeOpen">${printOper(stores[i].oper)}</div>
        </div>
      </div>`
    }
    count++
  }
  listDiv.appendChild(itemDiv)
  listDiv.appendChild(itemDiv2)
};

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