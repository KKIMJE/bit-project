//전체리스트 패치로 요청후에 해당 태그가 들어있는 스토어만 골라서 출력함
var filterNoList = []

// fetch
function filterList(choiceList) {
    fetch('/store/list')
    .then(function(response) {
      return response.json() 
    }).then(function(data) {

        let xTargetNoList = []
        let store = data.data
        
        $('.imgContainer').empty()
        let listAll = document.querySelector(".imgContainer");
        let count = 0
        let card = true
        // console.log(data.data[20].tags) // 주점이 선택한 tags 리스트

        // @@ storeNO가 아니라 등록순의 번호 입니다. @@
        let iPrintList = []
        
        for (let i=0; i < store.length; i++) {
            let storeTags = store[i].tags // 주점의 태그 목록들
            let storeTagChoiceList = []
            for (let j=0; j < storeTags.length; j++) { // 각각 주점의 선택 태그 확인
                storeTagChoiceList.push(storeTags[j].tagNo)
                // console.log("주점번호 :"+  store[i].storeNo + " / 태그 : "+  storeTags[j].tagNo)
            }
            storeTagChoiceList.sort() // ex) [1,2]
            // console.log( "드랍메뉴에서 사용자가 누른 태그 : " + JSON.stringify(choiceList) )
            // console.log( "주점들이 가진 태그 : "+ JSON.stringify(storeTagChoiceList) )
                
            for (let q=0; q < choiceList.length; q++) { // 사용자가 선택한 태그 리스트
                let tagChoiceN = choiceList[q] // 사용자가 선택한 태그번호
                if ( storeTagChoiceList.indexOf(tagChoiceN) != -1 ) {
                    // console.log("====================")
                    // console.log("@@ 일치하는 항목확인 @@")
                    // console.log("일치하는 스토어 " + store[i].storeNo)
                    xTargetNoList.push(store[i].storeNo) // 전체데이터중 태그 선택된 주점번호 모음, 맵마커와 카드출력 목록
                    iPrintList.push(i)
                }
            }
        }

        for (let o=0; o < iPrintList.length; o++) {
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

            let lastNum = iPrintList[o]

            // 주점태그가 유저가 고른 태그리스트에 속한다면 그 값을 tagName에 저장
            let tagName = ""
            let tList = store[lastNum].tags
            for (let t=0; t < tList.length; t++) {
                if ( choiceList.indexOf(tList[t].tagNo) != -1 ) {
                    tagName = tList[t].name
                }
            }

            let storeName = store[lastNum].storeName
            let stras = printStar(store[lastNum].evaluationScore)
            let storeOper = printOper(store[lastNum].oper)
            let heart = printheart(store[lastNum].mno, store[lastNum].storeNo)
            // stono 거리값과의 비교를 위한 stono
            tagStr = `<div class="img-xbox" data-stono="${lastNum}"> 
                <div class="xImg box">
                ${heart}
                <a class="store-link" href="storeDetail.html?no=${store[lastNum].storeNo}">
                    <img src="../asset/img/store/storelist${lastNum}.jpg" class="xImg-ori">
                </a>
                </div>
                <div class="xImg-contents">
                <div class="xImg-content">
                    <div class="xImg-content-t">${storeName}</div>
                    <div class="xImg-star">${stras}</div>
                    <div class="xImg-d" data-address="${store[lastNum].address}">🚧계산중🚧</div>
                    <div class="storeTag"><span class="highlight">#${tagName}</span></div>
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

        // console.log(xTargetNoList + " => 선택된 주점 출력")
        if (iPrintList.length == 0) {
            alert("선택한 태그를 만족하는 주점이 없습니다.")
            location.reload()
        } else {
            console.log( "출력할 storeNo 목록 : " + xTargetNoList )
        }

        listDiv.appendChild(itemDiv)
        listDiv.appendChild(itemDiv2)
        filterMarker(store, iPrintList.slice(0, 10)) // 초기 맵세팅, 실제 storeNo가 아니라 불러온순의 번호를 넣어야함
        filterNextpreBtnSet(store, iPrintList) // next pre btn 세팅, 실제 storeNo가 아니라 불러온순의 번호를 넣어야함
        computeDistance() // 거리계산 공유함수
        
    });
    // 드랍메뉴에서 선택된 항목 초기화
    filterNoList = [] 
    xTargetNoList = []
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