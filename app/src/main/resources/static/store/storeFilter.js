// 돌면서 체크확인하고 체크가 트루면 밸류값을 가져온다. 가져와서 리스트에 저장후 뿌린다
// 태그가 19개이고 태그로 거르고 안주가격으로 거른다. 리스트에서
function is_checked(el) {
    // 1. checkbox element를 찾습니다.
    const checkbox = el
    // 2. checked 속성을 체크합니다.
    const is_checked = checkbox.checked
    return is_checked
}
function unChecked(el) {
    let checkbox = el
    let is_checked = checkbox.checked
    if (is_checked == true) {
        checkbox.checked = false
    } else {
        return
    }
}
const checkBtn = document.getElementById('checkBtn');
checkBtn.addEventListener("click",function(){
    const allCheckBtn = document.querySelectorAll('.form-check-input')
    allCheckBtn.forEach(function(element) {
        if (is_checked(element) == true) {
            console.log(element.value)
            
            // 선택된 애들을 리스트에 모아 놓는다
            // 그리고 한번에 달라고 서버에 요청한다.
            // 태그는 스토어 태그테이블에서 가져온다. 정보를
            // 가격은 스토어 메뉴 테이블에서 가져온다. 정보를
            // => 스토어 메뉴 데이터 채우기
        }
    }) 
        
    
    allCheckBtn.forEach(element => unChecked(element))
})

