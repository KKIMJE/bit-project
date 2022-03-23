const lightBtn = document.querySelector('.store-category-sort');

lightBtn.addEventListener("click",function(e){
    if (e.target == e.currentTarget) {
      return;
    } else {
      e.currentTarget.querySelector('.act').classList.toggle('act');
      e.target.classList.toggle('act');
    }
  });