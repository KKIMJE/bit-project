// category-tab
const lightBtn = document.querySelector('.store-category-sort');
lightBtn.addEventListener("click",function(e){
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act');
    e.target.classList.toggle('act');
  }
});

// next, pre button
const next = document.querySelector('.next-store');

let storeAll = document.querySelectorAll('.store-contents-imgCard');
let cursor = 1;
let endPage = storeAll.length;

for (let i=1; i < storeAll.length; i++) {
  storeAll[i].style.display = "none";
}

next.addEventListener("click", () => {
  if (storeAll[cursor].style.display == "none") {
    storeAll[cursor].style.display = "flex"
  }
  for (let i=cursor+1; i < endPage; i++) {
    storeAll[i].style.display = "none";
  }
  for (let i=cursor-1; i < cursor; i--) {
    if (i == -1) {
      break;
    };
    storeAll[i].style.display = "none";
  }
  cursor += 1;
});