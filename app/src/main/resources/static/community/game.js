const lightBtn = document.querySelector(".category");

var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

// 카테고리 클릭
lightBtn.addEventListener("click", function(e) {
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act');
    e.target.classList.toggle('act');
    let targetNo = e.target.value
    if (targetNo == 6) {
       return 0;
    } else {
      location.href = "main.html"
    }
  }
})
