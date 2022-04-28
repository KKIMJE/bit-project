//전체리스트 패치로 요청후에 해당 태그가 들어있는 스토어만 골라서 출력함
let filterNoList = []

// fetch
function filterList(choiceList) {

    fetch('/store/list')
    .then(function(response) {
      return response.json() 
    }).then(function(data) {

        let store = data.data
        // 태그번호가 같은 스토어번호를 넣어줌
        // console.log(data.data[20].tags) // tags 리스트
        
        for (let i=0; i < store.length; i++) {
            let storeTags = store[i].tags

            let storeTagChoiceList = []
            for (let j=0; j < storeTags.length; j++) {
                storeTagChoiceList.push(storeTags[j].tagNo)
            }
            storeTagChoiceList.sort()

            if (storeTagChoiceList.length != 0) {
                
                if ( JSON.stringify(storeTagChoiceList) === JSON.stringify(filterNoList) ) {
                    
                    var xTargetNo = store[i].storeNo
                    console.log(xTargetNo)

                    $('.imgContainer').empty()
                    fetch("/store/list")
                    .then(function(response) {
                        return response.json()
                    })
                    .then(function(data) {
                        
                        let filterStores = data.data
                        // console.log(stores)

                        let listAll = document.querySelector(".imgContainer");
                        let count = 0
                        let card = true
                        let tStoreNumList = [] // 필터링된 주점 번호모음, 맵마커 만들때 필요
                        
                        for (var i = 0; i < filterStores.length; i++) {
                            if (xTargetNo == filterStores[i].storeNo) { // 태그 필터링
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
                        
                                let storeName = filterStores[i].storeName
                                let stras = printStar(filterStores[i].evaluationScore)
                                let storeOper = printOper(filterStores[i].oper)
                                let heart = printheart(filterStores[i].mno, filterStores[i].storeNo)
                                // stono 거리값과의 비교를 위한 stono
                                tagStr = `<div class="img-xbox" data-stono="${i}"> 
                                    <div class="xImg box">
                                    ${heart}
                                    <a class="store-link" href="storeDetail.html?no=${filterStores[i].storeNo}">
                                        <img src="../asset/img/store/storelist${i}.jpg" class="xImg-ori">
                                    </a>
                                    </div>
                                    <div class="xImg-contents">
                                    <div class="xImg-content">
                                        <div class="xImg-content-t">${storeName}</div>
                                        <div class="xImg-star">${stras}</div>
                                        <div class="xImg-d" data-address="${filterStores[i].address}">🚧계산중🚧</div>
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
                        filterMarker(filterStores, tStoreNumList.slice(0, 10)) // 초기 맵세팅
                        filterNextpreBtnSet(filterStores, tStoreNumList) // next pre btn 세팅
                        computeDistance() // 거리계산 공유함수
                    })
                }
            }
        }

        // 드랍메뉴에서 선택된 항목 초기화
        filterNoList = [] 
    });
}

// 확인버튼을 눌렀을때 체크가 되어있는 항목이 있으면 체크를 해제함
$('#xCheckBtn').click(function(){

    // 맵 컨트롤 버튼 세팅
    btnStatus = false
    targetBtnStatus = false
    sortBtnStatus = false
    filterBtnStatus = true

    // 전체 체크목록 확인
    $("input[name='cTag']:checked").each(function(idx){
        filterNoList.push( parseInt($(this).val()) )
        filterNoList.sort()
    });
    console.log( "체크한 항목은 " + filterNoList );

    // 필터링한 목록을 출력
    filterList(filterNoList)


    // 드랍다운의 전체 체크된 목록을 해제
    if($("input[name='cTag']").is(":checked")){
        // console.log("체크목록을 해제 합니다.");
        $("input[name='cTag']").prop("checked", false)
    }else{
        console.log("체크된 목록이 없습니다.");
    }

});