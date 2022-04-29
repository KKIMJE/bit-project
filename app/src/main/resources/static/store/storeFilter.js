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
        console.log(data.data[20].tags) // 주점이 선택한 tags 리스트
        
        for (let i=0; i < store.length; i++) {
            let storeTags = store[i].tags // 주점의 태그 목록들

            let storeTagChoiceList = []
            for (let j=0; j < storeTags.length; j++) {
                storeTagChoiceList.push(storeTags[j].tagNo)
            }
            storeTagChoiceList.sort()

            if (storeTagChoiceList.length != 0) {
                
                if ( JSON.stringify(storeTagChoiceList) === JSON.stringify(filterNoList) ) { // 필터링
                    // 전체선택목록이 같은것 ex) [1,2,3] === [1,2,3]

                    var xTargetNoList = []
                    
                    xTargetNoList.push(store[i].storeNo) // 같은것이 여러개 일 수 있음, 맵마커와 카드출력 목록
                    
                    console.log(xTargetNoList + " => 선택된 주점 출력")
                    if (xTargetNoList.length == 0) {
                        alert("선택한 태그를 모두 만족하는 주점이 없습니다.")
                        location.reload()
                    }

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
                        
                        for (var e = 0; e < xTargetNoList.length; e++) {
                    
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
                        
                                let storeName = filterStores[e].storeName
                                let stras = printStar(filterStores[e].evaluationScore)
                                let storeOper = printOper(filterStores[e].oper)
                                let heart = printheart(filterStores[e].mno, filterStores[e].storeNo)
                                // stono 거리값과의 비교를 위한 stono
                                tagStr = `<div class="img-xbox" data-stono="${e}"> 
                                    <div class="xImg box">
                                    ${heart}
                                    <a class="store-link" href="storeDetail.html?no=${filterStores[e].storeNo}">
                                        <img src="../asset/img/store/storelist${e}.jpg" class="xImg-ori">
                                    </a>
                                    </div>
                                    <div class="xImg-contents">
                                    <div class="xImg-content">
                                        <div class="xImg-content-t">${storeName}</div>
                                        <div class="xImg-star">${stras}</div>
                                        <div class="xImg-d" data-address="${filterStores[e].address}">🚧계산중🚧</div>
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
                        console.log("해당 주점수 : " + xTargetNoList.length)
                        if (itemDiv == null) {
                            console.log("null")
                            return
                        }
                        listDiv.appendChild(itemDiv)
                        listDiv.appendChild(itemDiv2)
                        filterMarker(filterStores, xTargetNoList.slice(0, 10)) // 초기 맵세팅
                        filterNextpreBtnSet(filterStores, xTargetNoList) // next pre btn 세팅
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

    // 드랍메뉴 전체 체크목록 확인
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