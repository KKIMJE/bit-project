const lightBtn = document.querySelector('.room-category-sort')
lightBtn.addEventListener("click",function(e){
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act')
    e.target.classList.toggle('act')

    let targetNo = e.target.value

    if (targetNo == 0) {
        console.log("전체")
    } else {
        console.log("나머지")
    }
  }
});